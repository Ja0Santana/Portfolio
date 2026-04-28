function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildBoxShadow(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const layers = [
    [0, 0, 0, 1, 100, true], [0, 0, 1, 0, 60, true], [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true], [0, 0, 15, 0, 30, true], [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false], [0, 0, 3, 0, 50, false], [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false], [0, 0, 25, 2, 20, false], [0, 0, 50, 2, 10, false],
  ];
  return layers.map(([x, y, blur, spread, alpha, inset]) => {
    const a = Math.min(alpha * intensity, 100);
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
  }).join(', ');
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildMeshGradients(colors) {
  const gradients = [];
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
  }
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
  return gradients;
}

class BorderGlow {
  constructor(element, config = {}) {
    this.el = element;
    this.config = {
      edgeSensitivity: 30,
      glowColor: '190 90 50',    // Adaptive cyan/blue
      backgroundColor: '#0f172a',// Match background
      borderRadius: 16,          
      glowRadius: 40,
      glowIntensity: 1.0,
      coneSpread: 25,
      colors: ['#0dccf2', '#38bdf8', '#818cf8'], // Original primary color + purples
      fillOpacity: 0.5,
      animated: false,
      ...config
    };
    
    if (this.el.dataset.borderGlowInit) return;
    this.el.dataset.borderGlowInit = 'true';

    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerEnter = this.handlePointerEnter.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    
    this.init();
  }
  
  getCenterOfElement() {
    const rect = this.el.getBoundingClientRect();
    return [rect.width / 2, rect.height / 2];
  }

  getEdgeProximity(x, y) {
    const [cx, cy] = this.getCenterOfElement();
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }

  getCursorAngle(x, y) {
    const [cx, cy] = this.getCenterOfElement();
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }
  
  init() {
    this.el.style.position = 'relative';
    this.el.style.isolation = 'isolate';
    // Remove conflicting hover borders & backgrounds
    this.el.classList.remove('border-slate-700/50', 'hover:border-primary/50', 'bg-slate-800/40', 'bg-white/5', 'hover:bg-white/10', 'hover:bg-white/5');
    // Ensure outer glow is visible globally
    this.el.style.overflow = 'visible'; 
    this.el.style.border = `1px solid rgba(255,255,255,0.15)`;
    if (this.config.borderRadius !== null) {
      this.el.style.borderRadius = typeof this.config.borderRadius === 'number' ? `${this.config.borderRadius}px` : this.config.borderRadius;
    }
    
    // We don't need a contentWrapper!
    // Since we cleared the parent background and use isolation: isolate,
    // elements with z-index: -1 will perfectly sit behind the normal children.
    
    const meshGradients = buildMeshGradients(this.config.colors);
    const borderBg = meshGradients.map(g => `${g} border-box`).join(', ');
    const fillBg = meshGradients.map(g => `${g} padding-box`).join(', ');
    
    this.el.style.setProperty('--cursor-angle', '45deg');
    this.el.style.setProperty('--border-opacity', '0');
    this.el.style.setProperty('--glow-opacity', '0');
    
    const baseStyle = `
      position: absolute;
      inset: 0;
      border-radius: inherit;
      z-index: -1;
      border: 1px solid transparent;
      opacity: var(--border-opacity);
      transition: opacity 0.25s ease-out;
      pointer-events: none;
    `;
    
    this.borderLayer = document.createElement('div');
    const angleVar = `var(--cursor-angle)`;
    const spread = this.config.coneSpread;
    
    const borderMask = `conic-gradient(from ${angleVar} at center, black ${spread}%, transparent ${spread + 15}%, transparent ${100 - spread - 15}%, black ${100 - spread}%)`;
    
    this.borderLayer.style.cssText = baseStyle;
    this.borderLayer.style.background = `
      linear-gradient(${this.config.backgroundColor} 0 100%) padding-box,
      linear-gradient(rgba(255,255,255,0) 0% 100%) border-box,
      ${borderBg}
    `;
    this.borderLayer.style.maskImage = borderMask;
    this.borderLayer.style.webkitMaskImage = borderMask;
    
    this.fillLayer = document.createElement('div');
    this.fillLayer.style.cssText = baseStyle;
    this.fillLayer.style.background = fillBg;
    this.fillLayer.style.opacity = `calc(var(--border-opacity) * ${this.config.fillOpacity})`;
    this.fillLayer.style.mixBlendMode = 'soft-light';
    
    const fillMasks = `
        linear-gradient(to bottom, black, black),
        radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
        radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
        radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
        radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
        radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
        conic-gradient(from ${angleVar} at center, transparent 5%, black 15%, black 85%, transparent 95%)
    `;
    this.fillLayer.style.maskImage = fillMasks;
    this.fillLayer.style.webkitMaskImage = fillMasks;
    this.fillLayer.style.maskComposite = 'subtract, add, add, add, add, add';
    this.fillLayer.style.webkitMaskComposite = 'source-out, source-over, source-over, source-over, source-over, source-over';

    this.glowLayerWrapper = document.createElement('span');
    this.glowLayerWrapper.style.cssText = `
      position: absolute;
      pointer-events: none;
      z-index: -1;
      border-radius: inherit;
      inset: -${this.config.glowRadius}px;
      opacity: var(--glow-opacity);
      mix-blend-mode: plus-lighter;
      transition: opacity 0.25s ease-out;
    `;
    const glowMask = `conic-gradient(from ${angleVar} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`;
    this.glowLayerWrapper.style.maskImage = glowMask;
    this.glowLayerWrapper.style.webkitMaskImage = glowMask;
    
    const glowInner = document.createElement('span');
    glowInner.style.cssText = `
      position: absolute;
      border-radius: inherit;
      inset: ${this.config.glowRadius}px;
      box-shadow: ${buildBoxShadow(this.config.glowColor, this.config.glowIntensity)};
    `;
    this.glowLayerWrapper.appendChild(glowInner);
    
    this.el.prepend(this.glowLayerWrapper);
    this.el.prepend(this.fillLayer);
    this.el.prepend(this.borderLayer);
    
    if (this.config.animated) {
      this.el.style.setProperty('--border-opacity', '1');
      this.el.style.setProperty('--glow-opacity', '1');
      let angle = 0;
      const tick = () => {
        angle = (angle + 1) % 360;
        this.el.style.setProperty('--cursor-angle', `${angle.toFixed(1)}deg`);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    } else {
      this.el.addEventListener('pointermove', this.handlePointerMove);
      this.el.addEventListener('pointerenter', this.handlePointerEnter);
      this.el.addEventListener('pointerleave', this.handlePointerLeave);
    }
  }
  
  handlePointerEnter() {
    this.borderLayer.style.transition = 'opacity 0.25s ease-out';
    this.fillLayer.style.transition = 'opacity 0.25s ease-out';
    this.glowLayerWrapper.style.transition = 'opacity 0.25s ease-out';
  }
  
  handlePointerLeave() {
    this.el.style.setProperty('--border-opacity', '0');
    this.el.style.setProperty('--glow-opacity', '0');
    this.borderLayer.style.transition = 'opacity 0.75s ease-in-out';
    this.fillLayer.style.transition = 'opacity 0.75s ease-in-out';
    this.glowLayerWrapper.style.transition = 'opacity 0.75s ease-in-out';
  }
  
  handlePointerMove(e) {
    const rect = this.el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const proximity = this.getEdgeProximity(x, y);
    const angle = this.getCursorAngle(x, y);
    
    const colorSensitivity = this.config.edgeSensitivity + 20;
    const borderOp = Math.max(0, (proximity * 100 - colorSensitivity) / (100 - colorSensitivity));
    const glowOp = Math.max(0, (proximity * 100 - this.config.edgeSensitivity) / (100 - this.config.edgeSensitivity));
    
    this.el.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
    this.el.style.setProperty('--border-opacity', borderOp.toString());
    this.el.style.setProperty('--glow-opacity', glowOp.toString());
  }
}

// Automatically attach to `.project-card`, `.certificate-item`, timeline boxes and skill cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card, .certificate-item, #timeline .bg-white\\/5.rounded-2xl, #skills .grid > div').forEach(el => {
        new BorderGlow(el);
    });

    const photoGlow = document.getElementById('profile-photo-glow');
    if (photoGlow) {
        new BorderGlow(photoGlow, {
            animated: true,
            borderRadius: null,
            glowIntensity: 1.5,
            glowRadius: 50
        });
    }
});

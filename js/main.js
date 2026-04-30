// Standard scroll restoration management
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    // Ensure we start at top without forcing layout during parse
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
}

// i18n Implementation with Glitch Animation
const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?";
const glitchState = new Map();

function animateTextGlitch(el, targetText, delay) {
    // Cancela animação anterior no mesmo elemento se existir
    if (glitchState.has(el)) {
        clearInterval(glitchState.get(el).interval);
        clearTimeout(glitchState.get(el).timeout);
    }

    const timeout = setTimeout(() => {
        let frame = 0;
        const interval = setInterval(() => {
            const output = targetText
                .split("")
                .map((char, index) => {
                    if (char === " " || char === "\n") return char;
                    if (index < frame) return targetText[index];
                    return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                })
                .join("");

            el.innerHTML = output;
            frame += 1.8;

            if (frame >= targetText.length) {
                clearInterval(interval);
                el.innerHTML = targetText;
                glitchState.delete(el);
            }
        }, 15);

        glitchState.set(el, { interval, timeout });
    }, delay);

    glitchState.set(el, { timeout });
}

function updateContent(lang) {
    if (typeof translations === 'undefined') return;
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el, index) => {
        const key = el.getAttribute('data-i18n');
        const newText = dict[key];
        if (newText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = newText;
            } else {
                // Só anima se o texto for realmente diferente
                if (el.innerHTML !== newText) {
                    animateTextGlitch(el, newText, index * 3); // 3ms de stagger para propagação
                }
            }
        }
    });

    if (dict.page_title) {
        document.title = dict.page_title;
    }
}

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);

    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        if (lang === 'en') {
            toggle.classList.add('en');
            toggle.classList.remove('pt');
        } else {
            toggle.classList.add('pt');
            toggle.classList.remove('en');
        }
    }
}

// Initialize Language as early as possible
const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
// Update content immediately if possible, or wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(savedLang));
} else {
    setLanguage(savedLang);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const svg = document.getElementById('menu-icon-svg');
    const path = svg.querySelector('path');

    if (menu.classList.contains('grid-rows-[0fr]')) {
        menu.classList.remove('grid-rows-[0fr]', 'opacity-0');
        menu.classList.add('grid-rows-[1fr]', 'opacity-100');
        menu.style.borderColor = "rgba(148, 163, 184, 0.2)";

        // Change to "close" icon path
        path.setAttribute('d', 'M256,760L200,704L424,480L200,256L256,200L480,424L704,200L760,256L536,480L760,704L704,760L480,536L256,760Z');
    } else {
        menu.classList.remove('grid-rows-[1fr]', 'opacity-100');
        menu.classList.add('grid-rows-[0fr]', 'opacity-0');
        menu.style.borderColor = "transparent";

        // Change back to "menu" icon path
        path.setAttribute('d', 'M120,720L120,640L840,640L840,720L120,720ZM120,520L120,440L840,440L840,520L120,520ZM120,320L120,240L840,240L840,320L120,320Z');
    }
}

function openModal(imageSrc, url) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    const linkBtn = document.getElementById('modal-link-btn');

    modalImg.src = imageSrc;

    if (linkBtn) {
        if (url) {
            linkBtn.href = url;
            linkBtn.parentElement.classList.remove('hidden');
        } else {
            linkBtn.parentElement.classList.add('hidden');
        }
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('certModal');

    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('certModal');
        if (modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-animate').forEach((el) => {
        observer.observe(el);
    });

    // Language Toggle Listener
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
        });
    }

    // Lógica de Foco Dinâmente (Mobile Border Glow)
    let activeInstances = new Set();
    let currentGlowItem = null;
    let temporaryGlowItems = new Set(); // Itens que ficam acesos temporariamente após uma ação

    if (window.innerWidth < 1024) {
        const glowObserverOptions = {
            threshold: 0.01,
            rootMargin: '-2% 0px -2% 0px'
        };

        const intersectingElements = new Set();

        const elementData = new Map(); // Cache de dimensões para evitar reflows

        const updateActiveGlow = () => {
            if (intersectingElements.size === 0) {
                activeInstances.forEach(inst => {
                    // Só apaga se não for o certificado aberto ou um item em "timer" de 2s
                    if (inst !== (currentGlowItem ? currentGlowItem._borderGlow : null) && !temporaryGlowItems.has(inst)) {
                        inst.stopAnimation();
                    }
                });
                activeInstances.clear();

                // Mantém vivos os itens especiais
                if (currentGlowItem && currentGlowItem._borderGlow) activeInstances.add(currentGlowItem._borderGlow);
                temporaryGlowItems.forEach(inst => activeInstances.add(inst));
                return;
            }

            let bestElement = null;
            let minDistance = Infinity;
            // Coordenada do centro da visão em relação ao documento (absoluta)
            const viewportCenter = window.pageYOffset + (window.innerHeight / 2);

            intersectingElements.forEach(el => {
                const data = elementData.get(el);
                if (!data) return;

                const elementCenter = data.top + (data.height / 2);
                const distance = Math.abs(elementCenter - viewportCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    bestElement = el;
                }
            });

            const newActiveInstances = new Set();
            if (bestElement) {
                if (bestElement._borderGlow) newActiveInstances.add(bestElement._borderGlow);

                if (bestElement.closest('#skills')) {
                    const bestData = elementData.get(bestElement);
                    intersectingElements.forEach(el => {
                        if (el !== bestElement && el.closest('#skills')) {
                            const elData = elementData.get(el);
                            if (elData && Math.abs(bestData.top - elData.top) < 10) {
                                if (el._borderGlow) newActiveInstances.add(el._borderGlow);
                            }
                        }
                    });
                }
            }

            // Garante que o certificado aberto ou itens temporários continuem brilhando
            if (currentGlowItem && currentGlowItem._borderGlow) {
                newActiveInstances.add(currentGlowItem._borderGlow);
            }
            temporaryGlowItems.forEach(inst => newActiveInstances.add(inst));

            activeInstances.forEach(inst => {
                if (!newActiveInstances.has(inst)) inst.stopAnimation();
            });

            newActiveInstances.forEach(inst => {
                if (!activeInstances.has(inst)) inst.startAnimation();
            });

            activeInstances = newActiveInstances;
        };

        const glowObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    intersectingElements.add(entry.target);
                    // Cacheia as dimensões iniciais. O IntersectionObserver já fornece isso sem forçar reflow.
                    elementData.set(entry.target, {
                        top: entry.boundingClientRect.top + window.pageYOffset,
                        height: entry.boundingClientRect.height
                    });
                } else {
                    intersectingElements.delete(entry.target);
                    elementData.delete(entry.target);
                }
            });
            updateActiveGlow();
        }, glowObserverOptions);

        // Throttle simples para o scroll
        let scrollTimeout;
        const throttledUpdate = () => {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    updateActiveGlow();
                    scrollTimeout = null;
                }, 50); // 20fps melhora a percepção de resposta
            }
        };

        window.addEventListener('scroll', throttledUpdate, { passive: true });

        setTimeout(() => {
            const interactiveElements = document.querySelectorAll('#timeline .rounded-2xl.border, .project-card, .certificate-item, #skills .grid > div, #about .rounded-3xl.border');

            interactiveElements.forEach(el => {
                glowObserver.observe(el);

                el.addEventListener('click', () => {
                    const instance = el._borderGlow;
                    if (instance && !instance.isAnimating) {
                        instance.startAnimation();

                        // Feedback de clique: 2 segundos
                        temporaryGlowItems.add(instance);
                        setTimeout(() => {
                            temporaryGlowItems.delete(instance);
                            if (!activeInstances.has(instance)) {
                                instance.stopAnimation();
                            }
                        }, 2000);
                    }
                });
            });
        }, 300);
    }

    // Função auxiliar para lidar com o brilho ao fechar o modal
    const handleModalCloseGlow = () => {
        if (currentGlowItem) {
            const inst = currentGlowItem._borderGlow;
            currentGlowItem = null;

            if (inst) {
                temporaryGlowItems.add(inst);
                // Mantém o brilho por mais 2 segundos após fechar
                setTimeout(() => {
                    temporaryGlowItems.delete(inst);
                    if (typeof updateActiveGlow === 'function') {
                        updateActiveGlow();
                    } else {
                        inst.stopAnimation();
                    }
                }, 2000);
            }
        }
    };

    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeModal();
            handleModalCloseGlow();
        });
    }

    const modal = document.getElementById('certModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
                handleModalCloseGlow();
            }
        });
    }

    // Tecla Esc também deve acionar o brilho temporário
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('flex')) {
            closeModal();
            handleModalCloseGlow();
        }
    });

    // Certificate items
    document.querySelectorAll('.certificate-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.getAttribute('data-certificate-img');
            const url = item.getAttribute('data-certificate-url');
            if (img) {
                openModal(img, url);
                if (item._borderGlow) {
                    currentGlowItem = item;
                    item._borderGlow.startAnimation();
                    activeInstances.add(item._borderGlow);
                }
            }
        });
    });

    const heroBtn = document.getElementById('hero-hire-btn');
    const navBtn = document.getElementById('nav-hire-btn');
    const navBtnMobile = document.getElementById('nav-hire-btn-mobile');

    if (heroBtn && (navBtn || navBtnMobile)) {
        const hireObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (navBtn) {
                        navBtn.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                        navBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    }
                    if (navBtnMobile) {
                        navBtnMobile.classList.remove('hidden', 'opacity-0', 'pointer-events-none', '-translate-y-2');
                        navBtnMobile.classList.add('flex', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
                    }
                } else {
                    if (navBtn) {
                        navBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                        navBtn.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                    }
                    if (navBtnMobile) {
                        navBtnMobile.classList.remove('flex', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
                        navBtnMobile.classList.add('hidden', 'opacity-0', 'pointer-events-none', '-translate-y-2');
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });

        hireObserver.observe(heroBtn);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Scroll Suave e Centralizado para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Se for o botão do menu mobile, fecha o menu antes de rolar
                if (this.closest('#mobile-menu')) {
                    toggleMobileMenu();
                }

                const headerHeight = document.querySelector('header').offsetHeight;
                const viewportHeight = window.innerHeight;
                const elementHeight = targetElement.offsetHeight;

                if (targetId === '#certificates') {
                    // Centralização manual com ajuste de 13px para esconder a seção seguinte
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const centerOffset = (viewportHeight / 2) - (elementHeight / 2);
                    window.scrollTo({
                        top: elementPosition - centerOffset - 13,
                        behavior: 'smooth'
                    });
                } else if (elementHeight > viewportHeight * 0.8) {
                    // Se for maior que 80% da tela, alinha ao topo com offset do header
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - headerHeight,
                        behavior: 'smooth'
                    });
                } else {
                    // Se for pequeno, centraliza para dar o efeito premium
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }

                // Atualiza a URL sem pular (opcional para manter a UX limpa)
                history.pushState(null, null, targetId);
            }
        });
    });
});

// Standard scroll restoration management
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    // Ensure we start at top without forcing layout during parse
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
}

// i18n Implementation with Glitch Animation
let activeSkillCategory = null;
let lastFocusedElement = null;

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
        if (newText && typeof newText === 'string') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = newText;
            } else {
                if (el.innerHTML !== newText) {
                    animateTextGlitch(el, newText, index * 3);
                }
            }
        }
    });

    if (dict.page_title) {
        document.title = dict.page_title;
    }
}

function getStoredLanguage() {
    try {
        return localStorage.getItem('preferredLanguage') || 'pt';
    } catch (storageError) {
        return 'pt';
    }
}

function setStoredLanguage(lang) {
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (storageError) {
        return;
    }
}

function setLanguage(lang) {
    setStoredLanguage(lang);
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

    if (typeof activeSkillCategory !== 'undefined' && activeSkillCategory) {
        openSkillsModal(activeSkillCategory, false);
    }
}

const savedLang = getStoredLanguage();
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

    setTimeout(() => {
        document.querySelectorAll('.scroll-animate.opacity-0').forEach(animatedEl => {
            const elBounds = animatedEl.getBoundingClientRect();
            if (elBounds.top < window.innerHeight && elBounds.bottom > 0) {
                animatedEl.classList.remove('opacity-0', 'translate-y-12');
                animatedEl.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, 150);

    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentLang = getStoredLanguage();
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

    document.querySelectorAll('[data-skill-category]').forEach(cardElement => {
        cardElement.addEventListener('click', () => {
            const categoryKey = cardElement.getAttribute('data-skill-category');
            openSkillsModal(categoryKey);
        });
    });

    document.querySelectorAll('[data-skills-tab]').forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            const categoryKey = tabBtn.getAttribute('data-skills-tab');
            switchSkillsTab(categoryKey);
        });
    });

    const SKILL_CATEGORIES_ORDER = ['backend', 'frontend', 'database', 'devops', 'integrations', 'cloud', 'apis', 'testing'];

    document.getElementById('skills-tab-prev')?.addEventListener('click', () => {
        const currentIndex = SKILL_CATEGORIES_ORDER.indexOf(activeSkillCategory || 'backend');
        const prevIndex = (currentIndex - 1 + SKILL_CATEGORIES_ORDER.length) % SKILL_CATEGORIES_ORDER.length;
        switchSkillsTab(SKILL_CATEGORIES_ORDER[prevIndex]);
    });

    document.getElementById('skills-tab-next')?.addEventListener('click', () => {
        const currentIndex = SKILL_CATEGORIES_ORDER.indexOf(activeSkillCategory || 'backend');
        const nextIndex = (currentIndex + 1) % SKILL_CATEGORIES_ORDER.length;
        switchSkillsTab(SKILL_CATEGORIES_ORDER[nextIndex]);
    });

    document.getElementById('skills-modal-close')?.addEventListener('click', closeSkillsModal);

    document.getElementById('skills-modal')?.addEventListener('click', (clickEvent) => {
        if (clickEvent.target === document.getElementById('skills-modal')) {
            closeSkillsModal();
        }
    });

    if (window.location.hash.startsWith('#skills-')) {
        const categoryFromHash = window.location.hash.replace('#skills-', '');
        setTimeout(() => openSkillsModal(categoryFromHash, false), 300);
    }
});

const LUCIDE_ICONS = {
    server: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    code2: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
    database: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    wrench: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    handshake: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8Z"/></svg>`,
    plug: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8Z"/></svg>`,
    cloud: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    key: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3"/></svg>`,
    flaskConical: `<svg style="width: 24px; height: 24px; display: block;" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 2v7.31L4.75 18.5a2 2 0 0 0 1.7 3h11.1a2 2 0 0 0 1.7-3L14 9.31V2"/><path d="M8.5 2h7"/></svg>`,
    link: `<svg style="width: 13px; height: 13px; shrink: 0; display: inline-block; vertical-align: middle;" class="text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
};

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function lockBodyScroll() {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add('overflow-hidden');
}

function unlockBodyScroll() {
    document.body.style.paddingRight = '';
    document.body.classList.remove('overflow-hidden');
}

function renderSkillItemHtml(item, projectsLabel) {
    let projectsHtml = '';
    if (item.projects && item.projects.length > 0) {
        const badges = item.projects.map(projectItem =>
            `<a href="${projectItem.url}" onclick="closeSkillsModal()" style="display: inline-flex; align-items: center; gap: 4px; text-decoration: none; color: #0dccf2; font-weight: 500; font-size: 12px;">
                ${LUCIDE_ICONS.link} <span>${projectItem.name}</span>
            </a>`
        ).join('<span style="color: #475569;">•</span>');

        projectsHtml = `
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.06); display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 12px;">
                <span style="color: #94a3b8; font-weight: 500;">${projectsLabel}</span>
                <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">${badges}</div>
            </div>
        `;
    }

    const badgeText = item.level || item.tag || '';
    const levelBadge = badgeText ? `<span style="font-size: 11px; font-weight: 600; color: #0dccf2; background: rgba(13, 204, 242, 0.1); border: 1px solid rgba(13, 204, 242, 0.2); padding: 2px 10px; border-radius: 6px; flex-shrink: 0;">${badgeText}</span>` : '';

    return `
        <div class="skill-item-card">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px;">
                <h4 style="margin: 0; font-size: 15px; font-weight: 600; color: #f8fafc; display: flex; align-items: center; gap: 8px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #0dccf2; display: inline-block;"></span>
                    ${item.name}
                </h4>
                ${levelBadge}
            </div>
            <p style="margin: 0; font-size: 13px; color: #cbd5e1; line-height: 1.6; font-weight: 400;">
                ${item.description}
            </p>
            ${projectsHtml}
        </div>
    `;
}

function updateModalTabs(activeCategoryKey) {
    const tabsWrapper = document.getElementById('skills-tabs-wrapper');
    document.querySelectorAll('[data-skills-tab]').forEach(tabBtn => {
        const tabKey = tabBtn.getAttribute('data-skills-tab');
        if (tabKey === activeCategoryKey) {
            tabBtn.classList.add('active');
            if (tabsWrapper) {
                const btnLeft = tabBtn.offsetLeft;
                const btnWidth = tabBtn.offsetWidth;
                const wrapperWidth = tabsWrapper.clientWidth;
                const targetScrollLeft = btnLeft - (wrapperWidth / 2) + (btnWidth / 2);
                tabsWrapper.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
            }
        } else {
            tabBtn.classList.remove('active');
        }
    });
}

function openSkillsModal(categoryKey, isUpdateHashNeeded = true) {
    const currentLang = getStoredLanguage();
    const categoryData = translations[currentLang]?.skills_categories?.[categoryKey];
    const modalLabels = translations[currentLang];

    if (!categoryData || !modalLabels) return;

    activeSkillCategory = categoryKey;
    lastFocusedElement = document.activeElement;

    const modalIconEl = document.getElementById('skills-modal-icon');
    if (modalIconEl) {
        modalIconEl.innerHTML = LUCIDE_ICONS[categoryData.icon] || LUCIDE_ICONS.server;
    }

    const modalTitleEl = document.getElementById('skills-modal-title');
    if (modalTitleEl) {
        modalTitleEl.textContent = categoryData.title;
    }

    const modalSubtitleEl = document.getElementById('skills-modal-subtitle');
    if (modalSubtitleEl) {
        modalSubtitleEl.textContent = categoryData.subtitle;
    }

    const bodyContainer = document.getElementById('skills-modal-body');
    if (bodyContainer) {
        bodyContainer.style.opacity = '0';
        bodyContainer.innerHTML = categoryData.items
            .map(techItem => renderSkillItemHtml(techItem, modalLabels.skills_applied_projects))
            .join('');
        setTimeout(() => {
            bodyContainer.style.opacity = '1';
        }, 50);
    }

    updateModalTabs(categoryKey);

    const modal = document.getElementById('skills-modal');

    if (modal) {
        modal.classList.add('active');
        lockBodyScroll();

        if (isUpdateHashNeeded) {
            history.replaceState(null, '', `#skills-${categoryKey}`);
        }

        const closeBtn = document.getElementById('skills-modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function switchSkillsTab(categoryKey) {
    openSkillsModal(categoryKey, true);
}

function closeSkillsModal() {
    const modal = document.getElementById('skills-modal');

    if (!modal || !modal.classList.contains('active')) return;

    modal.classList.remove('active');
    unlockBodyScroll();
    activeSkillCategory = null;

    if (window.location.hash.startsWith('#skills-')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

document.addEventListener('keydown', (keyboardEvent) => {
    const modal = document.getElementById('skills-modal');
    if (!modal || modal.classList.contains('opacity-0')) return;

    if (keyboardEvent.key === 'Escape') {
        closeSkillsModal();
        return;
    }

    if (keyboardEvent.key === 'Tab') {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (keyboardEvent.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            keyboardEvent.preventDefault();
        } else if (!keyboardEvent.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            keyboardEvent.preventDefault();
        }
    }
});

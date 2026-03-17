if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

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

function openModal(imageSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imageSrc;

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

    // Modal close events
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    const modal = document.getElementById('certModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Certificate items
    document.querySelectorAll('.certificate-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.getAttribute('data-certificate-img');
            if (img) openModal(img);
        });
    });

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

                if (elementHeight > viewportHeight * 0.8) {
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

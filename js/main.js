if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (menu.classList.contains('grid-rows-[0fr]')) {
        menu.classList.remove('grid-rows-[0fr]', 'opacity-0');
        menu.classList.add('grid-rows-[1fr]', 'opacity-100');
        menu.style.borderColor = "rgba(148, 163, 184, 0.2)";

        icon.textContent = 'close';
    } else {
        menu.classList.remove('grid-rows-[1fr]', 'opacity-100');
        menu.classList.add('grid-rows-[0fr]', 'opacity-0');
        menu.style.borderColor = "transparent";

        icon.textContent = 'menu';
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
});

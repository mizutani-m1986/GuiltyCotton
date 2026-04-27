/* ===ハンバーガーメニュー=== */
const hamburger = document.getElementById('hamburger');
const spNav = document.getElementById('sp-nav');
const spNavClose = document.getElementById('sp-nav-close');
const spNavLinks = spNav.querySelectorAll('a');
const fvLogo = document.querySelector('.fv-logo');

function openMenu() {
    spNav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    spNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (fvLogo) fvLogo.style.visibility = 'hidden';
}

function closeMenu() {
    spNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    spNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (fvLogo) fvLogo.style.visibility = 'visible';
}

hamburger.addEventListener('click', openMenu);

/* ===スクロールでハンバーガー背景・PCナビ背景を切り替え=== */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        hamburger.classList.add('scrolled');
        if (header) header.classList.add('scrolled');
    } else {
        hamburger.classList.remove('scrolled');
        if (header) header.classList.remove('scrolled');
    }
});
spNavClose.addEventListener('click', closeMenu);

// リンクをタップしたらメニューを閉じる
spNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* ===フリップカード=== */
const flipCards = document.querySelectorAll('.flip-wrap');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
flipCards.forEach(card => observer.observe(card));

/* ===スクロールフェードイン=== */
const revealItems = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
});
revealItems.forEach(item => revealObserver.observe(item));
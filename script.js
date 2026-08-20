document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for in-page anchor links (e.g. href="#projects")
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // if the target section isn't on this page, let the browser
            // follow the link normally (useful once anchors point cross-page)
        });
    });

    // 2. Scroll Reveal Animation for Sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(section);
    });

    // 3. Highlight the current page's nav link
    const currentPage = window.location.pathname.split('/').pop() || 'Home.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // 4. Dynamic Console Greeting
    console.log("%c Welcome to Harsh Kumar's Portfolio! \uD83D\uDE80 ", "background: #ccff00; color: #0a0c08; font-weight: bold; padding: 4px; border-radius: 4px;");
});

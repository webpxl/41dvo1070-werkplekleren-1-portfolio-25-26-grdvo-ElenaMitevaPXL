const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.intro-section, .designer-section, .funfact-section, .footer-contact')
    .forEach(section => observer.observe(section));






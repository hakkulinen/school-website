// Main JavaScript for [Company Name] SAT Prep Template
// Handles: Form validation/submission, fade-in animations on scroll, mobile nav toggle (Bootstrap handles most).

document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation on scroll
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Form submission handler (generic for all forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(form)) {
                // Placeholder submission: Alert success. Replace with AJAX to backend (e.g., EmailJS).
                alert('Thank you for your submission! We will contact you soon.'); // In production, send data.
                form.reset();
            }
        });
    });

    // Basic form validation function
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid'); // Bootstrap invalid class
            } else {
                field.classList.remove('is-invalid');
                // Email-specific validation
                if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    isValid = false;
                    field.classList.add('is-invalid');
                }
            }
        });
        if (!isValid) {
            alert('Please fill in all required fields correctly.'); // Accessibility: Screen reader friendly.
        }
        return isValid;
    }

    // Smooth scrolling for anchor links (if adding internal nav later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
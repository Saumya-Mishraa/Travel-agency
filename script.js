// 🌼 Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 🌼 Inquiry Form
const inquiryForm = document.getElementById('inquiry-form');
inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inquiry submitted successfully!');
    inquiryForm.reset();
});

// 🌼 Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
});

// 🌸 Scroll Animations
const animatedElements = document.querySelectorAll('.animate');

function checkAnimation() {
    const triggerBottom = window.innerHeight * 0.85; // visible area height

    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show'); // optional (for reverse animation)
        }
    });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);
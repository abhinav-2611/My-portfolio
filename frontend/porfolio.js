// Hamburger Menu Toggle
function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll Effect
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust this value to account for navbar height
            behavior: 'smooth',
        });
    });
});

// Form Validation
document.querySelector('.contact-me-two button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.querySelector('input[type="text"]').value;
    const message = document.querySelector('textarea').value;

    if (name === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message!");
        // Here you can also make an AJAX call to send the form data
    }
});

// Image Hover Effect for Projects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Scroll Animation for Section Appearance
const sections = document.querySelectorAll('.about-me, .programming-skills-body, .projects');

const options = {
    threshold: 0.5, // Section must be at least 50% visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Display Current Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Typing Animation for "About Me"
const textElement = document.querySelector('.name-profile h2');
const text = textElement.textContent;
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeText, 100); // Adjust speed here
    }
}

typeText();

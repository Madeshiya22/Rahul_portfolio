// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Here you would normally send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Animate profile section
        gsap.from('.profile-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
        });

        // Animate skills
        gsap.utils.toArray('.skill').forEach(skill => {
            gsap.from(skill, {
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 85%',
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: 'power2.out'
            });
        });

        // Animate projects
        gsap.utils.toArray('.project').forEach(project => {
            gsap.from(project, {
                scrollTrigger: {
                    trigger: project,
                    start: 'top 85%',
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power2.out'
            });
        });

        // Animate contact items
        gsap.utils.toArray('.contact-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                },
                duration: 0.8,
                x: -50,
                opacity: 0,
                ease: 'power2.out'
            });
        });

        // Animate contact form
        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 85%',
            },
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power2.out'
        });

        // Animate social links
        gsap.utils.toArray('.social-link').forEach(link => {
            gsap.from(link, {
                scrollTrigger: {
                    trigger: link,
                    start: 'top 85%',
                },
                duration: 0.5,
                scale: 0,
                opacity: 0,
                ease: 'back.out(1.7)'
            });
        });

        // Enable GSAP smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            gsap.to(window, {
                duration: 0.5, // Faster scroll
                scrollTo: {y: target, offsetY: 80}, // Offset matches header height
                ease: 'power2.inOut'
            });
        }
    });
});

// Add scroll-to-top arrow
const scrollArrow = document.createElement('div');
scrollArrow.id = 'scroll-to-top';
scrollArrow.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollArrow);

// Show/hide arrow when in footer
window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const arrow = document.getElementById('scroll-to-top');
    if (!footer || !arrow) return;
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
        arrow.style.display = 'flex';
    } else {
        arrow.style.display = 'none';
    }
});

// Scroll to top when arrow clicked
scrollArrow.addEventListener('click', () => {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: {y: 0},
        ease: 'power2.inOut'
    });
});

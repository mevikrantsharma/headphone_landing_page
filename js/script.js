// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Product Filter functionality removed as requested

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the selected slide and dot
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Next slide
nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= testimonialSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

// Previous slide
prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = testimonialSlides.length - 1;
    }
    showSlide(currentSlide);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide++;
    if (currentSlide >= testimonialSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 5000);

// Pricing Toggle
const pricingToggle = document.getElementById('pricing-toggle');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

pricingToggle.addEventListener('change', () => {
    if (pricingToggle.checked) {
        // Show yearly prices
        monthlyPrices.forEach(price => {
            price.style.display = 'none';
        });
        yearlyPrices.forEach(price => {
            price.style.display = 'inline';
        });
    } else {
        // Show monthly prices
        monthlyPrices.forEach(price => {
            price.style.display = 'inline';
        });
        yearlyPrices.forEach(price => {
            price.style.display = 'none';
        });
    }
});

// Video Modal
const videoModal = document.getElementById('video-modal');
const playVideoBtn = document.getElementById('play-video');
const closeModal = document.querySelector('.close-modal');
const videoIframe = document.querySelector('.video-container iframe');

playVideoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoIframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ'); // Demo video URL
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

closeModal.addEventListener('click', () => {
    videoModal.classList.remove('open');
    videoIframe.setAttribute('src', ''); // Stop the video when closing the modal
    document.body.style.overflow = 'auto'; // Allow scrolling again
});

// Close modal when clicking outside the content
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('open');
        videoIframe.setAttribute('src', '');
        document.body.style.overflow = 'auto';
    }
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.querySelector('#newsletter .form-message');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    // Simulate form submission (in a real project, this would be a fetch request to a server)
    setTimeout(() => {
        newsletterMessage.textContent = `Thank you for subscribing with ${email}!`;
        newsletterMessage.style.color = 'white';
        newsletterForm.reset();
        
        // Clear message after 3 seconds
        setTimeout(() => {
            newsletterMessage.textContent = '';
        }, 3000);
    }, 1000);
});

// Contact Form
const contactForm = document.getElementById('contact-form');
const contactMessage = document.querySelector('#contact .form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    // Simulate form submission
    setTimeout(() => {
        contactMessage.textContent = `Thank you for your message, ${name}! We'll get back to you soon.`;
        contactMessage.style.color = 'var(--success-color)';
        contactForm.reset();
        
        // Clear message after 3 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    }, 1000);
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Create a notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `<p>${productName} added to cart!</p>`;
        document.body.appendChild(notification);
        
        // Show the notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove the notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Add CSS for cart notification
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .cart-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .cart-notification p {
        margin: 0;
    }
`;
document.head.appendChild(style);

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .pricing-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial animation setup
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .product-card, .pricing-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on page load
    setTimeout(animateOnScroll, 500);
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

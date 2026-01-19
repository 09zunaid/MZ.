// Initialize Lenis with tuned parameters for ultra-smooth scrolling
const lenis = new Lenis({
    lerp: 0.05, // Slower lerp for smoother feel
    wheelMultiplier: 0.8, // Slightly reduced for precision
    infinite: false,
    gestureOrientation: 'vertical',
    normalizeWheel: true,
    smoothWheel: true
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Custom Cursor
function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power3.out'
        });
    });

    const links = document.querySelectorAll('a, .logo');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('active'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    initCursor();
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
        gsap.fromTo(el,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Hero Header Animation
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
    });

    // Logo hover micro-animation
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
    });
    logo.addEventListener('mouseleave', () => {
        gsap.to(logo, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });

    // Simplified Projects (No animations to prevent flickering)
    const projectItems = document.querySelectorAll('.project-item');
    // No JS animations for projects
});

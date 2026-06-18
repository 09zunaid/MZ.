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

// Case Studies Database
const caseStudies = {
    'black-whole': {
        index: '01',
        title: 'Black Whole',
        subtitle: 'Digital Experience Studio',
        role: 'Lead Creative Developer',
        timeline: '8 Weeks',
        services: 'Interactive Frontend & WebGL',
        overview: 'Black Whole is a digital experience studio pushing the boundaries of spatial web interfaces. The objective was to design and build a high-performance web experience that showcases immersive 3D graphics and complex, physics-based typography interactions in a dark, atmospheric environment.',
        challenge: 'Integrating real-time 3D animations and fluid scroll dynamics often introduces performance bottlenecks, leading to layout thrashing, drop in framerate (FPS), and poor mobile performance.',
        solution: 'We built a bespoke animation engine combining GSAP with optimized WebGL shaders. By leveraging offscreen canvas rendering and strict layout boundary constraints, we kept the experience running at a stable 60fps across standard devices. We also implemented a progressive loader that delays asset initialization until required.',
        deliverables: [
            'Interactive WebGL Landing Page',
            'Physics-based Typography Shader Engine',
            'Fluid Motion Framework Integration',
            'Cross-device Performance Diagnostics System'
        ],
        link: 'https://blackwhole.vercel.app/',
        accent: '#ffffff'
    },
    'notion': {
        index: '02',
        title: 'Notion',
        subtitle: 'Productivity Reimagined',
        role: 'UX Architect & Lead Developer',
        timeline: '6 Weeks',
        services: 'Product Design & Mobile Architecture',
        overview: 'This project reimagines Notion\'s powerful workspace tools with a mobile-first philosophy. The goal was to simplify the complex database relations and text block operations into a fast, fluid interface that feels completely native on mobile screen heights.',
        challenge: 'Notion\'s desktop layout depends heavily on drag-and-drop actions and multiple columns, which fail completely on narrower mobile viewports, making document editing tedious.',
        solution: 'We introduced gesture-based bottom sheets and context-sensitive touch bars. By monitoring cursor placement and block types, the editor dynamically offers markdown shortcuts. High-frequency operations like adding files or tags were moved to a thumb-accessible zone.',
        deliverables: [
            'Gesture-centric Mobile Web App Prototype',
            'Design System for Mobile Block Editors',
            'Context-Aware Navigation Library',
            'Fully Custom Touch Gesture Handler'
        ],
        link: 'https://notion-gilt-psi.vercel.app/',
        accent: '#e2e2e2'
    },
    'axiom-studio': {
        index: '03',
        title: 'Axiom Studio',
        subtitle: 'Architectural Design Partner',
        role: 'Digital Art Director & Developer',
        timeline: '10 Weeks',
        services: 'Aesthetic Web Design & Asset Pipeline',
        overview: 'Axiom Studio is a premium architectural design partner that wanted a digital presence mirroring their commitment to spatial precision and elegance. The website acts as an immersive digital exhibition of high-resolution CAD renders.',
        challenge: 'Displaying massive, detail-rich TIFF and PNG architectural renders caused long initial load delays, frustrating users and negatively impacting Google Lighthouse search rankings.',
        solution: 'We established an automated build-time image pipeline that generates highly optimized WebP and AVIF formats with custom blur-up SVG placeholders. Combined with a horizontal smooth-scroll gallery powered by GSAP ScrollTrigger, files load lazily and display with organic ease.',
        deliverables: [
            'Horizontal Scroll Exhibition Site',
            'Automated Responsive Image Processing Pipeline',
            'Minimalist Brand Layout System',
            'Interactive Project Maps'
        ],
        link: 'https://axiomstudio.vercel.app/',
        accent: '#c5a880'
    },
    'undo-card': {
        index: '04',
        title: 'Undo Card',
        subtitle: 'Modern Financial Tools',
        role: 'Product & Interactive Designer',
        timeline: '12 Weeks',
        services: 'Fintech UI & Data Visualization',
        overview: 'Undo Card is a modern financial platform built to offer transparent, real-time control over spending. The site features an interactive virtual card designer and dynamic charts to help users visualize and analyze monthly cashflows.',
        challenge: 'Presenting dense financial telemetry (interest rates, transaction history, categories) in a way that feels clear, secure, and visually pleasing, while avoiding traditional dull charts.',
        solution: 'We engineered interactive, fluid SVG graphs that transition smoothly based on the selected timescale. The virtual card customizer utilizes CSS 3D transforms and cursor-tracking reflections, creating a premium physical sensation.',
        deliverables: [
            'Interactive Card Configurator',
            'Fluid Spending Analytics Dashboard',
            'Custom Micro-interactions Library',
            'Web-audited Security Compliance UI'
        ],
        link: 'https://undocard.vercel.app/',
        accent: '#00ffcc'
    },
    'ever-after-planners': {
        index: '05',
        title: 'Ever After Planners',
        subtitle: 'Premiere Event Planning',
        role: 'Lead Web Designer',
        timeline: '5 Weeks',
        services: 'Editorial Web Design & Booking UX',
        overview: 'Ever After Planners designs high-end bespoke events and weddings. The project involved building a glamorous, magazine-inspired digital portfolio that highlights elegant event imagery and handles high-value consultations.',
        challenge: 'Conveying luxury and meticulous attention to detail online without cluttering the interface or overshadowing the actual event photography with heavy UI elements.',
        solution: 'We designed a generous, asymmetric layout utilizing elegant serif typography, clean whitespace, and soft fade-in triggers. A custom, multi-step booking form was designed to feel like an assistant guiding the client, maximizing conversion rates.',
        deliverables: [
            'Premium Editorial Portfolio Site',
            'Custom Multi-step Booking Form',
            'Interactive Consultation Scheduler',
            'Digital Style Guide & Media Kit'
        ],
        link: 'https://everafterplanners.vercel.app/',
        accent: '#e5989b'
    },
    'forma': {
        index: '06',
        title: 'Forma',
        subtitle: 'Digital Core Design',
        role: 'Creative Frontend Engineer',
        timeline: '7 Weeks',
        services: 'Typography Specimen Design & CSS Systems',
        overview: 'Forma is a digital showcase of custom typographic layouts and typographic specimens. Designed for type enthusiasts, it features interactive text blocks where users can play with letter spacing, weights, and alignments live.',
        challenge: 'Maintaining perfect layout alignment and visual harmony across varying custom fonts and screen sizes while avoiding Javascript-based layout resizing.',
        solution: 'We utilized CSS Grid combined with modern fluid typography algorithms using CSS `clamp()` and container queries. All font styles render natively at the GPU level, minimizing reflows and keeping the page size under 200KB.',
        deliverables: [
            'Dynamic Typography Sandbox',
            '100% Fluid Layout Grid System',
            'Custom Font Specimen Viewer',
            'Zero-JS Layout Performance Architecture'
        ],
        link: 'https://forma-silk.vercel.app/',
        accent: '#ff4d4d'
    },
    'cafe-encanto': {
        index: '07',
        title: 'Cafe Encanto',
        subtitle: 'Magical Coffee Experience',
        role: 'Full Stack Designer & Developer',
        timeline: '4 Weeks',
        services: 'Brand Identity & Web Ordering',
        overview: 'Cafe Encanto is a boutique coffee house seeking to bring their magical, warm atmosphere online. The project integrates an interactive sensory menu with a local checkout system for contactless table and pickup orders.',
        challenge: 'Translating the physical sensory elements of a coffee shop—aroma, warmth, and cozy lighting—into a flat digital layout.',
        solution: 'We utilized rich, warm color gradients (mochas, creams, ambers) and floating micro-animations of steam and sparkles. The menu was designed with floating hover highlights and intuitive tap additions to make ordering feel fast and effortless.',
        deliverables: [
            'Warm Sensory Landing Page',
            'Interactive Coffee & Pastry Menu',
            'Contactless Ordering & Checkout Flow',
            'Dynamic Content Management System (CMS)'
        ],
        link: 'https://cafeencanto-ivory.vercel.app/',
        accent: '#d4a373'
    },
    'pit-stop': {
        index: '08',
        title: 'Pit Stop',
        subtitle: 'F1 Analytics Portal',
        role: 'Data Visualisation Engineer',
        timeline: '9 Weeks',
        services: 'API Integration & Dynamic Charts',
        overview: 'Pit Stop is a dedicated dashboard tracking Formula 1 telemetry, lap times, tire strategies, and championship history. It processes live motorsport feed data to give racing fans deep analytical insights.',
        challenge: 'Rendering dense telemetry metrics (velocity charts, gear changes, tire wear degradation) in real-time without lagging the user\'s browser during live race updates.',
        solution: 'We built a high-speed data stream parser that pushes updates to a Canvas-based charting engine (using Chart.js and raw Canvas). By executing mathematical data transformations inside Web Workers, the main UI thread remains completely responsive.',
        deliverables: [
            'F1 Telemetry Dashboard Interface',
            'Web Worker Telemetry Parser',
            'High-Performance Canvas Charts',
            'Live strategy simulator interface'
        ],
        link: 'https://pitstop-inky.vercel.app/',
        accent: '#e63946'
    }
};


// Case Study Drawer Logic
function initCaseStudies() {
    const drawer = document.getElementById('case-study-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const wrapper = drawer.querySelector('.drawer-content-wrapper');
    const closeBtn = document.getElementById('drawer-close');

    // DOM fields
    const csIndex = document.getElementById('cs-index');
    const csTitle = document.getElementById('cs-title');
    const csSubtitle = document.getElementById('cs-subtitle');
    const csRole = document.getElementById('cs-role');
    const csTimeline = document.getElementById('cs-timeline');
    const csServices = document.getElementById('cs-services');
    const csOverview = document.getElementById('cs-overview');
    const csChallenge = document.getElementById('cs-challenge');
    const csSolution = document.getElementById('cs-solution');
    const csDeliverables = document.getElementById('cs-deliverables');
    const csLink = document.getElementById('cs-link');

    function openCaseStudy(projectId) {
        const data = caseStudies[projectId];
        if (!data) return;

        // Populate details
        csIndex.textContent = data.index;
        csTitle.textContent = data.title;
        csSubtitle.textContent = data.subtitle;
        csRole.textContent = data.role;
        csTimeline.textContent = data.timeline;
        csServices.textContent = data.services;
        csOverview.textContent = data.overview;
        csChallenge.textContent = data.challenge;
        csSolution.textContent = data.solution;

        // Populate deliverables
        csDeliverables.innerHTML = '';
        data.deliverables.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            csDeliverables.appendChild(li);
        });

        // Set live project link
        csLink.href = data.link;

        // Apply custom accent color to drawer properties
        drawer.style.setProperty('--cs-accent', data.accent);

        // Stop Lenis page-level smooth scrolling
        lenis.stop();

        // Enable interactions and show drawer
        drawer.classList.add('open');

        // Reset and execute GSAP transitions
        gsap.killTweensOf([backdrop, wrapper]);
        gsap.set(backdrop, { opacity: 0 });
        gsap.set(wrapper, { x: '100%' });

        gsap.to(backdrop, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        });

        gsap.to(wrapper, {
            x: '0%',
            duration: 0.7,
            ease: 'power4.out'
        });

        // Animate elements inside content sequentially
        const contentElements = drawer.querySelectorAll('.drawer-header, .drawer-meta-grid, .drawer-section, .drawer-footer');
        gsap.killTweensOf(contentElements);
        gsap.fromTo(contentElements,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
        );
    }

    function closeCaseStudy() {
        gsap.killTweensOf([backdrop, wrapper]);

        gsap.to(wrapper, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.inOut'
        });

        gsap.to(backdrop, {
            opacity: 0,
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
                drawer.classList.remove('open');
                // Resume Lenis smooth scroll
                lenis.start();
            }
        });
    }

    // Bind project item click triggers
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const projectId = item.getAttribute('data-project-id');
            if (projectId && caseStudies[projectId]) {
                e.preventDefault();
                openCaseStudy(projectId);
            }
        });
    });

    // Close actions
    closeBtn.addEventListener('click', closeCaseStudy);
    backdrop.addEventListener('click', closeCaseStudy);

    // Escape key handling
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeCaseStudy();
        }
    });
}

// GSAP Animations on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    initCaseStudies();

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
});

     gsap.registerPlugin(ScrollTrigger);

    // --- LOADER ---
    window.addEventListener('load', () => {
        gsap.to("#loader", {
            y: "-100%",
            duration: 1.5,
            ease: "expo.inOut",
            delay: 1,
            onComplete: () => document.getElementById('loader').style.display = 'none'
        });

        gsap.from(".hero-title .reveal-text", {
            y: 150,
            skewY: 10,
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power4.out"
        });
    });

    // --- CURSEUR LUXE ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX - 25, y: e.clientY - 25, duration: 0.4, ease: "power2.out" });
    });

    document.querySelectorAll('a, .exp-card, .gallery-panel, .footer-signature').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 5, backgroundColor: "transparent", border: "1px solid #c4a484" });
            gsap.to(follower, { scale: 0.5, backgroundColor: "#c4a484", opacity: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: "#c4a484", border: "none" });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", opacity: 1 });
        });
    });

    // --- PARALLAXE IMAGES HERO ---
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 30;
        const moveY = (e.clientY - window.innerHeight / 2) / 30;
        gsap.utils.toArray(".floating-img-space").forEach(img => {
            const speed = img.getAttribute('data-speed') || 1;
            gsap.to(img, {
                x: moveX * speed,
                y: moveY * speed,
                rotationY: moveX * 0.5,
                rotationX: -moveY * 0.5,
                duration: 1.5,
                ease: "power2.out"
            });
        });
    });

    // --- GALERIE HORIZONTALE AVEC EFFET DE VITESSE ---
    let sections = gsap.utils.toArray(".gallery-panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-gallery",
            pin: true,
            scrub: 1,
            end: () => "+=" + (window.innerWidth * 3)
        }
    });

    // --- REVEAL ANIMATIONS ---
    gsap.utils.toArray(".anim-fade").forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        });
    });

    gsap.from(".anim-reveal", {
        scrollTrigger: {
            trigger: ".narrative",
            start: "top 60%",
        },
        clipPath: "inset(0 100% 0 0)",
        duration: 2,
        ease: "expo.inOut"
    });

    // --- EFFET PARALLAXE FOOTER LOGO ---
    gsap.to(".footer-logo", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            scrub: true
        },
        x: -200,
        opacity: 0.2
    });

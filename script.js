 
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

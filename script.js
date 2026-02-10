 :root {
    --marron-noir: #0a0706; /* Plus profond */
    --marron-riche: #2d1e17;
    --bronze: #8d6e63;
    --beige-sable: #f5f0e1;
    --or-mat: #c4a484;
    --blanc-ivoire: #ffffff;
    --accent-ocre: #b35a2d;
    --royal-gold: #ffd700; /* Nouvelle couleur */
    --deep-red: #4a0e0e; /* Nouvelle couleur */
    --ombre-douce: rgba(0,0,0,0.6);
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none; }

body {
    background-color: var(--marron-noir);
    color: var(--beige-sable);
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    line-height: 1.6;
}

/* --- EFFET DE TEXTURE PHOTO --- */
body::after {
    content: "";
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.05; pointer-events: none; z-index: 9999;
}

/* --- CURSEUR AMÉLIORÉ --- */
#cursor {
    position: fixed; width: 12px; height: 12px; background: var(--or-mat);
    border-radius: 50%; pointer-events: none; z-index: 10001; mix-blend-mode: difference;
}
#cursor-follower {
    position: fixed; width: 50px; height: 50px; border: 1px solid var(--or-mat);
    border-radius: 50%; pointer-events: none; z-index: 10000; transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
}

/* --- LOADER --- */
#loader {
    position: fixed; inset: 0; background: var(--marron-noir);
    z-index: 10002; display: flex; align-items: center; justify-content: center;
    font-family: 'Syncopate'; font-size: 1.8vw; letter-spacing: 20px; color: var(--or-mat);
}

/* --- HERO SECTION --- */
.hero {
    height: 100vh; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #0a0706 0%, #2d1e17 50%, #0a0706 100%);
    background-size: 400% 400%;
    animation: gradientMove 15s ease infinite;
}

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-title {
    font-family: 'Playfair Display', serif; font-size: 12vw; line-height: 0.8;
    z-index: 2; text-align: center; text-transform: uppercase; font-weight: 900;
    filter: drop-shadow(0 20px 50px rgba(0,0,0,0.8));
}

.hero-title span { display: block; font-style: italic; font-weight: 400; font-size: 3.5vw; letter-spacing: 8px; color: var(--or-mat); text-shadow: none; }

.floating-img-space {
    position: absolute; width: 300px; height: 400px; background: rgba(255,255,255,0.02);
    border: 1px solid rgba(196, 164, 132, 0.2); overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 30px 60px var(--ombre-douce);
    transition: border 0.5s ease;
}
.floating-img-space:hover { border-color: var(--accent-ocre); }

/* --- SECTION NARRATIVE --- */
.narrative {
    padding: 180px 10%; display: flex; gap: 80px; background: var(--beige-sable); color: var(--marron-noir);
    align-items: center; position: relative;
}

.narrative-content { flex: 1.2; z-index: 2; }
.narrative-content h2 { font-family: 'Playfair Display'; font-size: 4rem; margin-bottom: 30px; line-height: 1; }
.narrative-content p { font-size: 1.2rem; line-height: 2; margin-bottom: 25px; font-weight: 400; }

.image-reveal-box {
    flex: 0.8; height: 750px; background: var(--marron-riche); position: relative;
    overflow: hidden; border-radius: 2px;
    box-shadow: 30px 30px 0px var(--or-mat);
}

/* --- GALERIE HORIZONTALE --- */
.horizontal-gallery {
    height: 100vh; display: flex; align-items: center; background: #050505;
    overflow: hidden; width: 400vw;
}

.gallery-strip { display: flex; padding: 0 10vw; }

.gallery-panel {
    width: 75vw; height: 80vh; margin-right: 12vw; background: #111;
    position: relative; overflow: hidden; border: 1px solid rgba(196, 164, 132, 0.1);
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.gallery-panel:hover { transform: scale(1.02); border-color: var(--or-mat); }

.panel-desc {
    position: absolute; bottom: 60px; left: 60px; z-index: 5;
    font-family: 'Syncopate'; mix-blend-mode: exclusion;
}

.panel-desc h3 { font-size: 3rem; color: var(--or-mat); letter-spacing: -2px; }

/* --- EXPERTISE --- */
.expertise {
    padding: 150px 10%; background: var(--blanc-ivoire); color: var(--marron-noir);
    background-image: radial-gradient(var(--beige-sable) 1px, transparent 1px);
    background-size: 40px 40px;
}

.grid-expertise {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-top: 100px;
}

.exp-card {
    padding: 80px 50px; border: 1px solid #eee; background: #fff;
    position: relative; overflow: hidden;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.exp-card::before {
    content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
    background: var(--accent-ocre); transition: height 0.4s ease; z-index: 0;
}

.exp-card:hover::before { height: 100%; }

.exp-card:hover {
    color: var(--blanc-ivoire);
    transform: translateY(-15px) rotateX(10deg);
    box-shadow: 0 40px 80px rgba(0,0,0,0.2);
}

.exp-card h3 { font-family: 'Playfair Display'; font-size: 2.2rem; margin-bottom: 20px; position: relative; z-index: 1; }
.exp-card p { position: relative; z-index: 1; }

/* --- FOOTER --- */
footer {
    padding: 150px 5%; background: var(--marron-noir); color: var(--or-mat);
    text-align: center; border-top: 1px solid var(--marron-riche);
    position: relative;
}

.footer-logo {
    font-family: 'Playfair Display'; font-size: 15vw; font-weight: 900;
    opacity: 0.05; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%); z-index: 0; white-space: nowrap;
}

.footer-content { position: relative; z-index: 1; }

/* Signature stylisée remplaçant le bouton */
.footer-signature {
    font-family: 'Playfair Display';
    font-style: italic;
    font-size: 4.5rem;
    color: var(--or-mat);
    margin-top: 50px;
    display: block;
    text-decoration: none;
    letter-spacing: -1px;
    transition: 0.5s;
}
.footer-signature:hover {
    color: var(--blanc-ivoire);
    transform: scale(1.05);
}

.img-slot {
    width: 100%; height: 100%; display: flex;
    align-items: center; justify-content: center;
    background: #0a0a0a; color: #222;
    font-size: 0.7rem; letter-spacing: 5px; font-family: 'Syncopate';
}

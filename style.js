:root {
    --primary: #1E90FF;    /* Bleu Ambition */
    --secondary: #5D4037;  /* Marron Entrepreneur */
    --accent: #D2B48C;     /* Tan pour la fluidité */
    --bg: #FAF9F6;         /* Blanc cassé pour le confort visuel */
    --text: #2D1B17;       /* Marron très sombre pour la lecture */
    --white: #ffffff;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.7;
}

/* --- HEADER & NAVIGATION --- */
header {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--white);
    padding: 4rem 1rem 6rem 1rem;
    text-align: center;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
}

header h1 { font-size: 3.5rem; margin-bottom: 1rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.3); }
header p { font-size: 1.4rem; font-weight: 300; max-width: 700px; margin: 0 auto; }

/* --- PHOTO DE PROFIL --- */
.profile-container {
    text-align: center;
    margin-top: -80px; /* Fait remonter la photo sur le header */
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
}

.profile-img {
    width: 180px;
    height: 180px;
    border-radius: 50%; /* Rend la photo ronde */
    object-fit: cover;
    border: 5px solid var(--white);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
   background-color: #ccc; /* Couleur de fond si l'image ne charge pas */
}

main { max-width: 1100px; margin: 0 auto; padding: 2rem; }

/* --- SECTIONS --- */
section { margin-bottom: 5rem; opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
section.visible { opacity: 1; transform: translateY(0); }

h2 {
    font-size: 2.2rem;
    color: var(--secondary);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 15px;
}
h2::after { content: ""; flex: 1; height: 2px; background: var(--accent); }

/* --- CARTES ET GRILLES --- */
.objective-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 20px;
    border-bottom: 5px solid var(--accent);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: 0.4s;
}
.card:hover { transform: translateY(-10px); border-bottom-color: var(--primary); box-shadow: 0 15px 40px rgba(30, 144, 255, 0.2); }
.card h3 { color: var(--primary); margin-bottom: 1rem; font-size: 1.5rem; }

.passion-content {
    background: var(--secondary);
    color: var(--white);
    padding: 3rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.passion-text blockquote { font-style: italic; border-left: 4px solid var(--primary); padding-left: 20px; margin: 1rem 0; font-size: 1.2rem; }

.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
}
.cert-card {
    background: var(--white);
    padding: 1.5rem;
    text-align: center;
    border-radius: 15px;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--accent);
    font-weight: bold;
    transition: 0.3s;
}
.cert-card:hover { background: var(--primary); color: white; border-color: var(--primary); }

footer {
    background: var(--secondary);
    color: var(--white);
    text-align: center;
    padding: 4rem 1rem;
    margin-top: 4rem;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
    header h1 { font-size: 2.5rem; }
    .profile-img { width: 140px; height: 140px; }
}

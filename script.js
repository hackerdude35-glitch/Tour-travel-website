* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #f9fafc;
    color: #333;
}

/* Header */
.header {
    position: fixed;
    width: 100%;
    background: rgba(255,255,255,0.95);
    box-shadow: 0 2px 20px rgba(0,0,0,0.08);
    z-index: 1000;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    font-size: 24px;
    font-weight: 700;
}

.logo span {
    color: #0b5ed7;
}

nav a {
    margin-left: 25px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

/* Hero */
.hero {
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e") center/cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
}

.hero-content {
    position: relative;
    color: white;
    text-align: center;
    max-width: 700px;
    animation: fadeUp 1.3s ease;
}

.hero-content h1 {
    font-size: 48px;
    font-weight: 700;
}

.hero-content p {
    margin: 15px 0 30px;
    font-size: 18px;
    opacity: 0.9;
}

.btn-primary {
    background: linear-gradient(135deg, #0b5ed7, #004aad);
    color: white;
    padding: 14px 32px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
}

/* Sections */
.section-title {
    font-size: 32px;
    margin-bottom: 40px;
    text-align: center;
}

/* Packages */
.packages {
    padding: 100px 20px;
}

.package-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: auto;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    text-align: center;
    transition: transform 0.4s ease;
}

.card:hover {
    transform: translateY(-10px);
}

.card span {
    font-size: 22px;
    color: #0b5ed7;
    font-weight: 600;
}

.card button {
    margin-top: 20px;
    padding: 10px 24px;
    border: none;
    border-radius: 25px;
    background: #0b5ed7;
    color: white;
    cursor: pointer;
}

/* About & Contact */
.about, .contact {
    padding: 90px 20px;
    text-align: center;
}

.contact form {
    max-width: 500px;
    margin: auto;
}

.contact input,
.contact textarea {
    width: 100%;
    padding: 14px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #ddd;
}

/* Footer */
footer {
    background: #111;
    color: #aaa;
    text-align: center;
    padding: 25px;
}

/* Animation */
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

function scrollToPackages() {
    document.getElementById("packages").scrollIntoView({
        behavior: "smooth"
    });
}

const cards = document.querySelectorAll('.package-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;

        if (position < screen) {
            card.style.animation = "fadeUp 1s ease forwards";
        }
    });
});

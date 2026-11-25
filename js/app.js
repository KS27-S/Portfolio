// Animations d'apparition : on cible tous les éléments marqués .reveal.
const revealElements = document.querySelectorAll(".reveal");

// Si le navigateur prend en charge IntersectionObserver, on révèle les éléments lorsqu'ils entrent à l'écran.
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                // Dès que l'élément est visible à 15 %, on le révèle puis on arrête de l'observer.
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    // Chaque élément est surveillé ; --reveal-delay gère le décalage CSS entre les cartes.
    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    // Fallback pour les anciens navigateurs : tout est affiché immédiatement.
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

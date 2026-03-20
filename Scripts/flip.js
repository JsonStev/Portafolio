export default function flipCards(cardSelector) {
    const d = document;
    const cards = d.querySelectorAll(cardSelector);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const inner = card.querySelector(".card-inner");
            if (inner) {
                inner.classList.toggle("is-flipped");
            }
        });
    });
}

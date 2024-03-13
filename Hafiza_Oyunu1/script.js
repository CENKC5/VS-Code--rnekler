const cards = document.getElementById("card-deck");

let cardOne, cardTwo;
let disableDeck = false;

function createCard(imageSrc) {
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
        <div class="view front-view">
            <img src="images/soruisratei1.jfif" alt="Question Mark">
        </div>
        <div class="view back-view">
            <img src="${imageSrc}" alt="Card Image">
        </div>
    `;
    card.addEventListener("click", flipCard);
    return card;
}

function flipCard() {
    if (!disableDeck && this !== cardOne) {
        this.classList.add("flip");

        if (!cardOne) {
            cardOne = this;
            return;
        }

        cardTwo = this;
        disableDeck = true;

        const cardOneImg = cardOne.querySelector(".back-view img").src;
        const cardTwoImg = cardTwo.querySelector(".back-view img").src;

        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        setTimeout(() => {
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1000);
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
}

function shuffleDeck() {
    const images = [
        "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
        "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"
    ];

    images.sort(() => Math.random() > 0.5 ? 1 : -1);

    images.forEach((image) => {
        const card = createCard(`images/${image}`);
        cards.appendChild(card);
    });
}

shuffleDeck();

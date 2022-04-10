let cardIndex = 0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
showCards(cardIndex);

prevBtn.addEventListener('click', function () {
    n = -1;
    plusCards(n);
});

nextBtn.addEventListener('click', function () {
    n = 1;
    plusCards(n);
});

function plusCards(n) {
    showCards(cardIndex += n);
}

function currentCard(n) {
    showCards(cardIndex = n);
}

function showCards(n) {
    let i;
    let cards = document.getElementsByClassName('member-card');
    if (n > cards.length) {
        cardIndex = 1;
    }
    if (n < 1) {
        cardIndex = cards.length;
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    cards[cardIndex - 1].style.display = 'block';
}
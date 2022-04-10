$(".prev").click(switchCard);
$(".next").click(switchCard);

function switchCard() {
    let currentCard = $(".active");
    let nextCard = currentCard.next();
    if (nextCard.length == 0) {
        nextCard = $(".member-card").first();
    }

    currentCard.removeClass("active");
    currentCard.addClass("hidden");
    nextCard.removeClass("hidden");
    nextCard.addClass("active");
    $(".next").click(function () {
        $(".member-card").hide().fadeIn(200, "linear");
    });
}

$(document).keydown(buttonPress);

function buttonPress(e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
        switchCard();
    }
}
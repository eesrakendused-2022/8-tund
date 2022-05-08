let personPicture = document.querySelector("#lol");

$('#prevBtn').click(function(){
    $('#nimi').html("Ülo Üloste");
    $('#sisu').html("See pala on samuti erakordne 😎😩😩");
    personPicture.src = "images/oogway_2.jpg";
});

$('#nextBtn').click(function(){
    $('#nimi').html("Sten Muinast");
    $('#sisu').html("Väga mõtlemapanev teos 🤔");
    personPicture.src = "images/oogway_1.jpg";
});
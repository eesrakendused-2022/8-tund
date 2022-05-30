$('img').css({'width':'20vw', 'height':'200px'});
$('#picContainer').css({'padding':'5px'});
$('#fullscreen').hide();

let firstPic = $('img.active').attr('src');

$('.big-img').html('<img src="' + firstPic + '">')
$('.big-img img').css({'width':'90vw'})

console.log(firstPic);

$('#picContainer img').click(function(){
    let currentPic = $('img.active');
    let selectedPic = $(this);

    currentPic.removeClass('active');
    selectedPic.addClass('active');

    $('.big-img').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(2000, "linear").slideUp(1000).slideDown(1000);

});

$('.prev').click(picBackward);
$('.next').click(picForward);
$('.enter-full-screen').click(function(){
    $('#fullscreen').fadeIn(600);
});
$('.exit-full-screen').click(function(){
    $('#fullscreen').fadeOut(600);
});

function picForward(){
    let currentPic = $('img.active');
    let selectedPic = currentPic.next();

    console.log(selectedPic);

    if(selectedPic.length == 0){
        selectedPic = $('#picContainer img').siblings().first();
    }

    currentPic.removeClass('active');
    selectedPic.addClass('active');

    $('.big-img').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(800, "linear");
}

function picBackward(){
    let currentPic = $('img.active');
    let selectedPic = currentPic.prev();

    console.log(selectedPic);

    if(selectedPic.length == 0){
        selectedPic = $('#picContainer img').siblings().last();
    }

    currentPic.removeClass('active');
    selectedPic.addClass('active');

    $('.big-img').html('<img src="' + selectedPic.attr('src') + '">').hide().fadeIn(800, "linear");
}

$(document).keydown(buttonPress);

function buttonPress(event){
    console.log(event.keyCode);

    if(event.keyCode == 39){
        picForward();
    }

    if(event.keyCode == 37){
        picBackward();
    }

    if(event.keyCode == 70){
        $('#fullscreen').fadeIn(600);
    }

    if(event.keyCode == 27){
        $('#fullscreen').fadeOut(600);
    }
}
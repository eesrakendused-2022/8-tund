$('.big-img-container').css({'display':'flex', 'justify-content':'center'});
$('#picContainer').css({'display':'none'});
$('#nameContainer').css({'display':'none'});
$('#video').css({'display':'flex', 'justify-content':'center'});
$('button').css({'border':'solid'})

let firstPic = $('img.active').attr('src');
$('.big-image').css({'width' : '18rem', 'height' : '18rem', 'border-radius' : '100%', 'border-color' : 'lightsteelblue',
'border-style' : 'solid', 'background-image' : 'url(' +firstPic+ ')', 'background-size' : 'cover', 'background-position' : 'center'});

let firstName = $('li.active').text() ;
$('.big-name').html('<p>' + firstName + '</p>');

$('.prev').click(picBackward);

function picBackward(){
    let currentPic = $('img.active');
    let selectedPic = currentPic.prev();
    let currentName = $('li.active');
    let selectedName = currentName.prev();

    if(selectedPic.length == 0){
        selectedPic = $('#picContainer img').siblings().last();
    }
    if(selectedName.length == 0){
        selectedName = $('#nameContainer li').siblings().last();
    }

    currentPic.removeClass('active');
    selectedPic.addClass('active');
    
    currentName.removeClass('active');
    selectedName.addClass('active');

    selectedPic = $('img.active').attr('src');

    $('.big-image').css({'width' : '18rem', 'height' : '18rem', 'border-radius' : '100%', 'border-color' : 'lightsteelblue',
'border-style' : 'solid', 'background-image' : 'url(' +selectedPic+ ')', 'background-size' : 'cover', 'background-position' : 'center'}).hide().fadeIn(100, "linear");
    $('.big-name').html('<p>' + selectedName.text()  + '</p>').hide().fadeIn(100, "linear");

}

$('.next').click(picForward);

function picForward(){
    let currentPic = $('img.active');
    let selectedPic = currentPic.next();

    let currentName = $('li.active');
    let selectedName = currentName.next();

    if(selectedPic.length == 0){
        selectedPic = $('#picContainer img').siblings().first();
    }

    if(selectedName.length == 0){
        selectedName = $('#nameContainer li').siblings().first();
    }

    currentPic.removeClass('active');
    selectedPic.addClass('active');

    currentName.removeClass('active');
    selectedName.addClass('active');

    selectedPic = $('img.active').attr('src');

    $('.big-image').css({'width' : '18rem', 'height' : '18rem', 'border-radius' : '100%', 'border-color' : 'lightsteelblue',
'border-style' : 'solid', 'background-image' : 'url(' +selectedPic+ ')', 'background-size' : 'cover', 'background-position' : 'center'}).hide().fadeIn(100, "linear");
    $('.big-name').html('<p>' + selectedName.text() + '</p>').hide().fadeIn(100, "linear");

}

$(document).keydown(buttonPress);

function buttonPress(event){
    if(event.keyCode == 39){
        picForward();
    }

    if(event.keyCode == 37){
        picBackward();
    }
}
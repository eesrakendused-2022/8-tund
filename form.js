window.onload = function() {
    $('.dataCheck').hide();
    $("#submit").attr("disabled", true);

};
    
// Nime kontroll

$('#firstName').blur(function(e) {
    let firstName = $('#firstName').val();
    console.log(firstName);
    if (firstName.length == '') {
        $('#nameCheck').show();
        $('#nameCheck').html("Kohustuslik väli");
    } else if((firstName.length < 2) || (firstName.length > 15)){
        $('#nameCheck').show();
        $('#nameCheck').html("Nime pikkus 2-15 tähemärki");
    } else {
        $('#nameCheck').hide();
    }
});

//Numbri kontroll

$('#phoneNumber').blur(function(e) {
    let phoneNumber = $('#phoneNumber').val();
    let phoneRegex = /(^5)(\d{6})/;
    console.log(phoneNumber);
    if (phoneNumber.length == '') {
        $('#phoneCheck').show();
        $('#phoneCheck').html("Kohustuslik väli");
    } else if(!phoneRegex.test(phoneNumber)){
        $('#phoneCheck').show();
        $('#phoneCheck').html("Palun sisesta suunakoodita Eesti number");
    } else {
        $('#phoneCheck').hide();

    }
});

//Meili kontroll

$('#email').blur(function(e) {
    let email = $('#email').val();
    let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
    console.log(email);
    if (email.length == '') {
        $('#emailCheck').show();
        $('#emailCheck').html("Kohustuslik väli");
    } else if(!emailRegex.test(email)){
        $('#emailCheck').show();
        $('#emailCheck').html("Palun jälgida formaati example@example.com");
    } else{
        $('#emailCheck').hide();
    }
});

//Info kontroll

$('#info').blur(function(e) {
    let info = $('#info').val();
    console.log(info);
    if(info.length == ''){
        $('#infoCheck').show();
        $('#infoCheck').html("Palun mõned sõnad");
    } else if(info.length < 15){
        $('infoCheck').show();
        $('#infoCheck').html("Tekst võiks olla minimaalselt 15 tähemärki")
    } else{
        $('#infoCheck').hide();
    }
});

$('#submit').click(function(e) {
    console.log('.dataCheck')

})

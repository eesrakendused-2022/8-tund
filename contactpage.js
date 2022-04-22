$('#submit').click(saatmine);

function saatmine(){
    let name = $('#name').val();
    let nameError = false;
    let mobile = $('#mobile').val();
    let mobileError = false;
    let email = $('#email').val();
    let emailError = false;
    let addInfo = $('#additionalInfo').val();
    let addInfoError = false;

    if(name.length == 0){
        $('#nameError').html("Palun sisesta oma nimi!");
    } else {
        nameError = true;
        $('#nameError').html("");
    }
    if(mobile.length == 0){
        $('#mobileError').html("Palun sisesta oma telefoninumber!");
    } else {
        mobileError = true;
        $('#mobileError').html("");
    }
    if(email.length == 0){
        $('#emailError').html("Palun sisesta oma email!");
    } else {
        emailError = true;
        $('#emailError').html("");
    }
    if(addInfo.length == 0){
        $('#addInfoError').html("Palun sisesta lisainfo!");
    } else {
        addInfoError = true;
        $('#addInfoError').html("");
    }

    if(nameError == true && mobileError == true && emailError == true && addInfoError == true){
        $('.vastus').html("Andmed on edukalt saadetud!");
    } else {
        $('.vastus').html("Midagi läks andmete saatmisel valesti..!");
    }

}
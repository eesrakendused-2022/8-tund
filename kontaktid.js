


$('#submit').click(function(){

let firstName = $('#name').val();
let surName = $('#surname').val();
let phone = $('#phone').val();
let email = $('#email').val();
let message = $('#additional-info').val();

    if(firstName.length == 0 && $('#nameError').is(':empty')){
        $('#nameError').html('<div class="error">Eesnimi on kohustuslik!</div>')
    } else if(firstName.length > 0){
        $('#nameError').empty();
    }

    if(surName.length == 0 && $('#surnameError').is(':empty')){
        $('#surnameError').html('<div class="error">Perekonnanimi on kohustuslik!</div>')
    } else if(surName.length > 0){
        $('#surnameError').empty();
    }

    if(phone.length == 0 && $('#phoneError').is(':empty')){
        $('#phoneError').html('<div class="error">Telefoninumber on kohustuslik!</div>')
    } else if(phone.length > 0){
        $('#phoneError').empty();
    }

    if(email.length == 0 && $('#emailError').is(':empty')){
        $('#emailError').html('<div class="error">E-post on kohustuslik!</div>')
    } else if(email.length > 0){
        $('#emailError').empty();
    }

    if(message.length == 0 && $('#infoError').is(':empty')){
        $('#infoError').html('<div class="error">Lisainfo on kohustuslik!</div>')
    } else if(message.length > 0){
        $('#infoError').empty();
    }
    

    if($('#nameError').is(':empty') && $('#surnameError').is(':empty') && $('#phoneError').is(':empty') &&
        $('#emailError').is(':empty') && $('#infoError').is(':empty')){
            $('#submitConfirmation').html('<div class="error">Täname tagasiside eest!</div>');
        }
    else {
        $('#submitConfirmation').html('<div class="error"></div>');
    }


});

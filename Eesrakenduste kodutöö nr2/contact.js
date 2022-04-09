
$('.error').hide();
$('.error2').hide();
$('.error3').hide();

function validate() {
    
    if(document.getElementById("Name").value == "" || document.getElementById("Email").value == ""
    || document.getElementById("Phonenr").value == "" || document.getElementById("Info").value == "") {
        $('.error').show();
        $('html, body').animate({scrollTop:0}, 'slow');
    } else {
        $('.error').hide();
        var input2 = document.getElementById("Phonenr").value
        var regex2 = new RegExp("^[0-9]*$");
        if(regex2.test(input2)) {
            $('.error2').hide();
        }else {
            $('.error2').show();
            $('html, body').animate({scrollTop:0}, 'slow');
        }

        var input = document.getElementById("Email").value;
        var regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        if(regex.test(input)) {
            $('.error3').hide();
        }else {
            $('.error3').show();
            $('html, body').animate({scrollTop:0}, 'slow');
        }
    }
}
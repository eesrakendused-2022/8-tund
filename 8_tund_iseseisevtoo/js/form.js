$('#submit').click(saada);

function saada(){
    let name = $('#name').val();
    let namecont = false;
    let mobile = $('#mobile').val();
    let mobilecont = false;
    let email = $('#email').val();
    let emailcont = false;
    let info = $('#info').val();
    let infocont = false;
	
	if(name.length == 0){
        $('#namecont').html("Sisesta nimi!");
    } else {
        namecont = true;
    }
    if(mobile.length == 0){
        $('#mobilecont').html("Sisesta number!");
    } else {
        mobilecont = true;
    }
    if(email.length == 0){
        $('#emailcont').html("Sisesta email!");
    } else {
        emailcont = true;
    }
    if(info.length == 0){
        $('#infocont').html("Sisesta lisainfo!");
    } else {
        infocont = true;
    }

    if(namecont == true && mobilecont == true && emailcont == true && infocont == true){
        $('.vastus').html("Info saadeti ära!");
    } else {
        $('.vastus').html("Andmetega on mingi jama!");
    }

}

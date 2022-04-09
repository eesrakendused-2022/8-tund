$('.saada').click(fakeSaada);

function fakeSaada(){
    let nimi = $('#nimi').val();
    let nimikontr = false;
    let telefon = $('#telefon').val();
    let telefonkontr = false;
    let email = $('#email').val();
    let emailkontr = false;
    let lisainfo = $('#lisainfo').val();
    let lisainfokontr = false;

    if(nimi.length == 0){
        $('#nimiprob').html("Nimi on puudu!");
    } else {
        nimikontr = true;
    }
    if(telefon.length == 0){
        $('#telefonprob').html("Telefoni number on puudu!");
    } else {
        telefonkontr = true;
    }
    if(email.length == 0){
        $('#emailprob').html("Email on puudu!");
    } else {
        emailkontr = true;
    }
    if(lisainfo.length == 0){
        $('#lisainfoprob').html("Lisainfo on puudu!");
    } else {
        lisainfokontr = true;
    }

    if(nimikontr == true && telefonkontr == true && emailkontr == true && lisainfokontr == true){
        $('.vastus').html("Andmed on edukalt saadetud!");
    } else {
        $('.vastus').html("Osa andmeid on puudu!");
    }

}
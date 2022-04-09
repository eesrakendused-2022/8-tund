$('.arvuta').click(arvutaPension);

function arvutaPension(){
    let vanus = $('input[name="vanus"][id="vanus"]').val();
    let sugu = $('input[name="sugu"]:checked').val();
    let pensionini = 0;

    if(!sugu){
        $('.vastus').html("Vali sugu!");
    }
    if(sugu == "mees"){
        pensionini = 65 - vanus;
        $('.vastus').html("Pensionini on veel " + pensionini + " aastat");
        if(pensionini < 0){
            pensionini = "Olete juba pensionieas!";
        }
    }
    if(sugu == "naine"){
        pensionini = 63 - vanus;
        $('.vastus').html("Pensionini on veel " + pensionini + " aastat");
        if(pensionini < 0){
            pensionini = "Olete juba pensionieas!";
        }
    }

    console.log(vanus);
    console.log(sugu);
    console.log(pensionini);

}
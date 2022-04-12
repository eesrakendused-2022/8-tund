let ageValue = $('#ageRange').val();
let showAge = $('#age');

showAge.html(ageValue);

let age = $('input[type="range"]').on('input', function(){
    $('#age').html($('#ageRange').val());
    console.log(age.val());
});


$('input[type="button"]').click(function(){
    let gender = $('input[name="gender"]:checked').val();
    if(!gender){
        $('#result').html("Vali sugu");
    }
	if(gender == "female" && age.val() <= 63){
        $('#result').html(`${63 - age.val()} aastat on jäänud pensionini.`);
    }
	if(gender == "female" && age.val() == 63){
        $('#result').html(` Pension algab 63 aastaselt.`);
    }
    if(gender == "female" && age.val() > 63){
        $('#result').html(` ${age.val() - 63} aastat tagasi algas teie pension`);
    }
    if(gender == "male" && age.val() <= 65){
        $('#result').html(`${65 - age.val()} aastat on jäänud pensionini.`);
    }
    if(gender == "male" && age.val() > 65){
        $('#result').html(` ${age.val() - 65} aastat tagasi algas teie pension`);
    }
	if(gender == "male" && age.val() == 65){
        $('#result').html(` Pension algab 65 aastaselt.`);
    }
});

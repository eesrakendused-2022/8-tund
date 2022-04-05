// Update the current slider value (each time you drag the slider handle)
$('#range').change(function (e) {
    e.preventDefault();
    $('#age').html(this.value);
});


// TO-DO slaiderile on vaja muutuvad väärtused külge panna
$('#pension-btn').click(function () {
    let sex = $('input[type=radio][name=sex]:checked').val();
    let age = $('input[type=range][name=age]').val();
    let pensionAge = 63;
    if (sex == undefined) {
        alert('Vali sugu!');
    }
    if (sex == 'male') {
        pensionAge = 65;
    }
    if (sex == 'male' || sex == 'female') {
        let timeTillPension = pensionAge - age;
        $('#result').html('Sul on pensionini jäänud veel <strong>' + timeTillPension + '</strong> aastat!');
    }
});


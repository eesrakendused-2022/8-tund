let worktimeleft;

//slider output
var slider2 = document.getElementById("range");
var output = document.getElementById("value");
output.innerHTML = slider2.value;

slider2.oninput = function() {
    output.innerHTML = this.value;
}

//kalkulaator
function getValues(){
    var slider2 = document.getElementById('range');
    var male = document.getElementById('male');
    var female = document.getElementById('female');

    if(male.checked==true){
        if(slider2.value >= 65){
            alert("Pensioni-iga on juba alanud.");
        }else{
            worktimeleft = (65 - slider2.value);
            alert("Pensionini on jäänud " + worktimeleft + " aastat.");
        }
    }else if(female.checked==true){
        if(slider2.value >= 63){
            alert("Pensioni-iga on juba alanud.");
        }else{
            worktimeleft = (63 - slider2.value);
            alert("Pensionini on jäänud " + worktimeleft + " aastat.");
        }
    }else{
        alert("Palun vali sugu!");
    }
}
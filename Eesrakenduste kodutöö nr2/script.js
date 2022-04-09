var slider = document.getElementById("ageSlider");
var output = document.getElementById("ageValue");
var ageOutput = document.getElementById("finalValue");
var calculateAge;
const age = document.querySelector("ageSubmit");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
} 

function calculate(){
    var gender = document.querySelector('input[name="sugu"]:checked').value;
    if(gender == "naine"){
        if(slider.value >63){
            ageOutput.innerHTML = "Olete juba pensionil."
        }else{
            calculateAge = 63-slider.value;
            ageOutput.innerHTML = "Pensionini on veel " + calculateAge + " aastat."
        }

    }else{
        if( slider.value > 65){
            ageOutput.innerHTML = "Olete juba pensionil."
        }else{
            calculateAge = 65-slider.value
            ageOutput.innerHTML = "Pensionini on veel " + calculateAge + " aastat."
        }

    }
}
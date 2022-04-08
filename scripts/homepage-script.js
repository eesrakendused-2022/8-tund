var slider = document.getElementById("ageSlider");
var output = document.getElementById("ageValue");
var ageOutput = document.getElementById("finalValue");
var calcAge;
const age = document.querySelector("ageSubmit");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
} 

function calculate(){
    var gender = document.querySelector('input[name="sugu"]:checked').value;
    if(gender == "naine"){
        if(slider.value >62){
            ageOutput.innerHTML = "Olete juba pensionil."
        }else{
            calcAge = 63-slider.value;
            ageOutput.innerHTML = "Pensionini on aega " + calcAge + " aastat."
        }

    }else{
        if(slider.value > 64){
            ageOutput.innerHTML = "Olete juba pensionil."
        }else{
            calcAge = 65-slider.value
            ageOutput.innerHTML = "Pensionini on aega " + calcAge + " aastat."
        }

    }
}
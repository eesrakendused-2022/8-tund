let sliderValue = document.querySelector('#ageRange');
let currentValue = document.querySelector('#age');
currentValue.innerHTML = sliderValue.value;

sliderValue.oninput = function(){
    currentValue.innerHTML = this.value;
}

let gender;
let malePension = 65;
let femalePension = 63;
let pensionBtnValue = document.querySelector('#pensionBtn');
let resultValue = document.querySelector('#result');

pensionBtnValue.addEventListener('click', function(){
    gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender == "male" && sliderValue.value < malePension){
        resultValue.innerHTML =malePension - sliderValue.value + " aastat Teie pensioni alguseni.";
    }
    if (gender == "male" && sliderValue.value == malePension){
        resultValue.innerHTML = "Jääte sel aastal pensionile, õnnitlused!";
    }
    if (gender == "male" && sliderValue.value > malePension){
        resultValue.innerHTML =sliderValue.value - malePension + " aastat Teie pensioni algusest.";
    }
    if (gender == "female" && sliderValue.value < femalePension){
        resultValue.innerHTML =femalePension - sliderValue.value + " aastat Teie pensionini.";
    }
    if (gender == "female" && sliderValue.value == femalePension){
        resultValue.innerHTML = "Jääte sel aastal pensionile, õnnitlused!";
    }
    if (gender == "female" && sliderValue.value > femalePension){
        resultValue.innerHTML =sliderValue.value - femalePension + " aastat Teie pensioni algusest.";
    }

});



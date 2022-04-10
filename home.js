const radioButtons = document.querySelectorAll("[name='Gender']");
const AgeValue = document.querySelector("#AgeValue");
const AgeSlider = document.querySelector("#Slider");
const btn = document.querySelector("#btn");
const pensionResult = document.querySelector("#pensionResult");
let Age = 50;
let Gender = null;

Slider.addEventListener("input", function() {
    AgeValue.textContent = Slider.value;
});

btn.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        if(radioButton.checked) {
            Gender = radioButton.value;
            break;
        }
    }
    if(Gender==null) {
        pensionResult.textContent="Valige sugu!";
        return;
    }
    Age = parseInt(AgeValue.textContent);
    if(Gender=="Mees") {
        if(Age < 65) {
            pensionResult.textContent=`Teil on jäänud ${65-Age} aastat pensionini!`;        
        } else {
            pensionResult.textContent="Saad juba pensionit!";
        }
    } else if(Gender=="Naine") {
        if(Age < 63) {
            pensionResult.textContent=`Teil on jäänud ${63-Age} aastat pensionini!`;        
        } else {
            pensionResult.textContent="Saad juba pensionit!";
        }
    }
})

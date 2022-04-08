const ageValue = document.querySelector("#ageValue");
const ageSlider = document.querySelector("#ageSlider");
const radioButtons = document.querySelectorAll("[name='gender']")
const submitButton = document.querySelector("#submit");
const pensionResult = document.querySelector("#pensionResult");
let gender = null;
let age = 50;

ageSlider.addEventListener("input", function() {
    ageValue.textContent = ageSlider.value;
});

submitButton.addEventListener("click", function() {
    for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons[i];
        if(radioButton.checked) {
            gender = radioButton.value;
            break;
        }
    }
    if(gender==null) {
        pensionResult.textContent="Sugu pole valitud!";
        return;
    }

    age = parseInt(ageValue.textContent);
    if(gender=="male") {
        if(age < 65) {
            pensionResult.textContent=`Pensionini on jäänud ${65-age} aastat!`;        
        } else {
            pensionResult.textContent="Saad juba pensionit!";
        }
        return;
    }
    if(age < 63) {
        pensionResult.textContent=`Pensionini on jäänud ${63-age} aastat!`;        
    } else {
        pensionResult.textContent="Saad juba pensionit!";
    }
})

ageValue.textContent = ageSlider.value;
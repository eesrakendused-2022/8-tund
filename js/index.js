// *  --------------------- Avaleht (kalkulaator)---------------------
const ageSelector = document.getElementById("age-slider");
let genderSelector = document.getElementById("gender-select");
const calculate = document.getElementById("calculate");
let ageOutput = document.getElementById("show-age");
let age = 20;
let result;
let calculationResult = document.getElementById("calculation-result");

ageSelector.addEventListener("change", function () {
    age = ageSelector.value;
    ageOutput.innerHTML = "Vanus: " + age;
});

function calculateAge() {
    if (genderSelector.value == "male") {
        if (age >= 65) {
            calculationResult.innerHTML = "Inimene on juba pensionil !";
        } else {
            result = 65 - age;
            calculationResult.innerHTML = "Pensionini on " + result + " aastat";
        }
    }
    if (genderSelector.value == "female") {
        if (age >= 63) {
            calculationResult.innerHTML = "Inimene on juba pensionil !";
        } else {
            result = 63 - age;
            calculationResult.innerHTML = "Pensionini on " + result + " aastat";
        }
    }
}

calculate.addEventListener("click", calculateAge);
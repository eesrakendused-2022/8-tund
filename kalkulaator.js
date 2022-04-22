let malepension = 65;
let femalepension = 63;




function calculate(){
    var genders = document.getElementsByName('gender');
    var age = document.getElementById("age_range").value;
    var gender_value;
    for(var i = 0; i < genders.length; i++){
        if(genders[i].checked){
            gender_value = genders[i].value;
            break;
        }
    }

    if(gender_value == "male"){
        if(age < malepension){
            var age_calc = malepension - age;
            document.getElementById("result").innerHTML = "Sul on jäänud pensionini " + age_calc.toString() + " aastat !";
        } else if (age >= malepension){
            document.getElementById("result").innerHTML = "Olete pensioni jaoks sobival vanusel !";
        }
    }

    if(gender_value == "female"){
        if(age < femalepension){
            age_calc = femalepension - age;
            document.getElementById("result").innerHTML = "Sul on jäänud pensionini " + age_calc.toString() + " aastat !";
        } else if (age >= femalepension){
            document.getElementById("result").innerHTML = "Olete pensioni jaoks sobival vanusel !";
        }
    }
}
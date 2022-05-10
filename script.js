let radioButtons,radioButton,selectedGender;
let date=new Date;
//let month=date.getMonth()+1
//month+"."+date.getDate()+"."+
let date_now=date.getFullYear();
console.log(date_now);
let birthday=document.querySelector('#birthYear');
console.log(birthday.value);

document.querySelector('#save').addEventListener("click",calculatepension);

function calculatepension(){
    //let birthday_date=new Date(birthday);    
    radioButtons=document.querySelectorAll('input[name="gender"]');
    for(radioButton of radioButtons){
        if(radioButton.checked){
            selectedGender=radioButton.id;
            break;
        }
    }
    let age=date_now-birthday.value;
    console.log(age);
    console.log(typeof age);
    console.log(selectedGender);
    let male_count_pens=65-age;
    let female_count_pens=63-age;
    if(selectedGender=="male"){
        if(age<65){
            document.querySelector('#pensionres').innerHTML="Pensioninini on jäänud: "+male_count_pens+" aastat";
            
        } else if (age<=0){
            document.querySelector('#pensionres').innerHTML="Palun sisesta korrektne vanus";
        } else if (age>65){
            document.querySelector('#pensionres').innerHTML="Oled juba pensionil";
        }
    }
    else{
        if(age<63){
            document.querySelector('#pensionres').innerHTML="Pensioninini on jäänud: "+female_count_pens+" aastat";
            
        } else if (age<=0){
            document.querySelector('#pensionres').innerHTML="Palun sisesta korrektne vanus";
        }
        else if (age>63){
            document.querySelector('#pensionres').innerHTML="Oled juba pensionil";
        }
    }
    }
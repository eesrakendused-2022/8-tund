let pensioniVastus = document.getElementById("pensioniVastus");

function pensioniKalkulaator() {
    let sugu = document.getElementById("gender");
    sugu = sugu.options[sugu.selectedIndex].value;
    let vanus = document.getElementById("age").value;

    if (sugu==="m") {
        if(vanus < 65){
            pensioniVastus.style.color = "red";
            pensioniVastus.innerHTML = "Teiel on jäänud " + (65-vanus) + " aastat pensionini";
        } else {
            pensioniVastus.style.color = "green";
            pensioniVastus.innerHTML = "Teie vanus on: "+ (vanus) + " ja teie juba olete pensionäär";
        }
    } else if(sugu === "n"){
        if(vanus < 63){
            pensioniVastus.style.color = "red";
            pensioniVastus.innerHTML = "Teil on jäänud " + (63-vanus) + " aastat pensionini"
        } else {
            pensioniVastus.style.color = "green";
            pensioniVastus.innerHTML = "Teie vanus on: "+ (vanus) + " ja teie juba olete pensionäär";
        }
    }    
}

function videoPlacement(){
    let urlAndres = "https://www.youtube.com/watch?v=1ugivNRYfjc";
    let idAndres = urlAndres.split("?v=")[1];

    let embedLinkAndres = "http://www.youtube.com/embed/" + idAndres;
    document.getElementById("andresVid").src = embedLinkAndres;
    
    //------------------------------------------------------------------

    let urlNikita = "https://www.youtube.com/watch?v=cdk4hVPN_F0  ";
    let idNikita= urlNikita.split("?v=")[1];

    let embedLinkNikita = "http://www.youtube.com/embed/" + idNikita;
    document.getElementById("nikitaVid").src = embedLinkNikita;



}
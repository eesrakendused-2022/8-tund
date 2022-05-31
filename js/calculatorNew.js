let enteredYear = 0;

$("#age").html('<p>'+enteredYear+' a.</p>');
$("#years").change(function (){
    enteredYear = $("#years").val();
    $("#age").html('<p>'+enteredYear+' a.</p>');
});

$("#radioContainer input").click(function (){
    let currentGender = $("input.active");
    let selectedGender = $(this);
    currentGender.removeClass("active");
    selectedGender.addClass("active");
});

$("#btnInput").click(function (){
    let gender = $("#radioContainer input.active").attr("id");
    let aastad;
    if (gender == "woman") {
        aastad = -enteredYear + 63;
        console.log(aastad);
        if (aastad > 0 && aastad != 1) {
            $("#pensionResult").html("Pensioonini aega jäänud: ");
            $("#pensionResult").append(document.createTextNode(aastad));
            $("#pensionResult").append(" aastad.");
        }else if(aastad === 1){
            $("#pensionResult").html("Pensioonini aega jäänud: ");
            $("#pensionResult").append(document.createTextNode(aastad));
            $("#pensionResult").append(" aasta.");
        }else if (aastad<=0){
            $("#pensionResult").html("Teie olete juba pensionäär! :)");
        }
    }if (gender == "man"){
        aastad = -enteredYear+65;
        console.log(aastad);
        if (aastad > 0 && aastad != 1) {
            $("#pensionResult").html("Pensioonini aega jäänud: ");
            $("#pensionResult").append(document.createTextNode(aastad));
            $("#pensionResult").append(" aastad.");
        }else if(aastad === 1){
            $("#pensionResult").html("Pensioonini aega jäänud: ");
            $("#pensionResult").append(document.createTextNode(aastad));
            $("#pensionResult").append(" aasta.");
        }else if (aastad<=0){
            $("#pensionResult").html("Teie olete juba pensionäär! :)");
        }
    }
});
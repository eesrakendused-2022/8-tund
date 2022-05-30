let enteredYear = 0;

$("#age").html('<p>'+enteredYear+' a.</p>');

$("#years").click(function (){
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
    if (gender == "woman"){
        $("#pensionResult").html("Pensioonini aega jäänud: ");
        $("#pensionResult").append(document.createTextNode(-enteredYear+63));
    }if (gender == "man"){
        $("#pensionResult").html("Pensioonini aega jäänud: ");
        $("#pensionResult").append(document.createTextNode(-enteredYear+65));
    }
});


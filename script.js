// Update the current slider value (each time you drag the slider handle)
$('#range').change(function (e) {
    e.preventDefault();
    $('#age').html(this.value);
});


// TO-DO slaiderile on vaja muutuvad väärtused külge panna
$('#pension-btn').click(function () {
    let sex = $('input[type=radio][name=sex]:checked').val();
    let age = $('input[type=range][name=age]').val();
    let pensionAge = 63;
    if (sex == undefined) {
        alert('Vali sugu!');
    }
    if (sex === 'male') {
        pensionAge = 65;
    }
    if (sex === 'male' || sex === 'female') {
        let timeTillPension = pensionAge - age;
        $('#result').html('Sul on pensionini jäänud veel <strong>' + timeTillPension + '</strong> aastat!');
    }
});

// ülesannete kirjelduse toggle, https://www.w3schools.com/howto/howto_js_accordion.asp 
let task = document.getElementsByClassName("task");
let i;

for (i = 0; i < task.length; i++) {
    task[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let taskDesc = this.nextElementSibling;
        if (taskDesc.style.display === "block") {
            taskDesc.style.display = "none";
        } else {
            taskDesc.style.display = "block";
        }
    });
}

// tiimiliikmete kaartide slaider

$('#previous').click(toggleCard);
$('#forward').click(toggleCard);

// TO-DO: TEE KORDA!!!
function toggleCard() {
    let currentPic = $('.displayed');
    currentPic.removeClass('.displayed').hide();
    currentPic.nextElementSibling.addClass('.displayed').show();
    
    /* if ($('#bruno').css('display', 'none')) {
        // $('#Bruno').css('display', 'block');
        $('#bruno').css('display', 'flex');
        $('#paula').css('display', 'none');
    } else if ($('#paula').css('display', 'none')) {
        $('#bruno').css('display', 'none');
        $('#paula').css('display', 'flex'); 
    }*/
}


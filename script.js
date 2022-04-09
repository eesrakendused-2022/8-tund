// kalkulaatori tulemuse arvutamine ja näitamine
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

// slaideri hetkeväärtuse näitaja selle liigutamise ajal
window.onload = function () {
    let rangeDisplay = document.getElementById('age-display');
    let ageDisplay = document.getElementById('age');
    let slider = document.getElementById('range');
    rangeDisplay.innerHTML = slider.value;
    slider.oninput = function () {
        rangeDisplay.innerHTML = this.value;
        ageDisplay.innerHTML = this.value;
    };
};

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
window.onload = function () {
    $('.slider-btn').click(toggleCard);
    let sliderButton = document.getElementById('forward');
    sliderButton.addEventListener('click', function () {
        console.log('Klikiti');
    });
};


function toggleCard() {
    if ($('#bruno').css('display', 'none')) {
        $('#paula').css('display', 'none');
        $('#bruno').css('display', 'flex');
    } else {
        $('#bruno').css('display', 'none');
        $('#paula').css('display', 'flex');
    }
}

// FORM VALIDATIONS
let isValid = false;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// arvestatud, et telefoninumbris on max 12 numbrimärki
let phoneRegex = /^\+(\d{2,3})\)?(\d{8,9})$/;

window.onload = function () {
    $('#submit-btn').click(function (e) {
        e.preventDefault();
        let email = $.trim($('#email').val());
        let phoneNumber = $.trim($('#phone').val());
        let name = $.trim($('#name').val());
        let message = $.trim($('#message').val());
        // kontroll, et väljad oleksid täidetud ning epost ja telefon Regexiga sobivad
        if (email === '' || phoneNumber === '' || name === '' || message === '') {
            alert('Täida kõik väljad');
        } else if (!emailRegex.test(email)) {
            alert('E-posti aadressis on viga, paranda see palun ära!');
        } else if (!phoneRegex.test(phoneNumber)) {
            alert('Telefoninumbris on viga, paranda vead ja jälgi, et oleksid ainult numbrid ilma tühikuteta!');
        } else {
            isValid = true;
        }
        if (isValid) { $('#contact-form').trigger('reset'); }
        $('#success-message').text('Teade on saadetud!').fadeOut('30000', 'linear');
    });
};

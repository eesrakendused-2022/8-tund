$().ready(function() {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            info: {
                required: true,
                minlength: 10
        },
        messages: {
            name: {
                required: "Palun sisesta enda nimi",
                minlength: "Minimaalselt 2 tähemärki"
            },
            phone: {
                required: "Palun sisesta enda number",
                minlength: "Minimaalselt 6 tähemärki"
            },
            email: {
                required: "Palun sisesta enda meiliaadress",
                email: "Meiliaadress peab olema korrektne nt. example@example.com" 
            },
            info: {
                required: "Info väli peab olema täidetud!",
                minlength: "Minimaalne pikkus peab oloema 10 tähemärki ;)"
            },
        }
        }
    });
})
function kinnitus() {
    window.confirm("Info on kuhugi saadetud, vastus ei ole garanteeritud");
}
const phoneRegEx = new RegExp("[0-9]{4} [0-9]{4}");
const emailRegEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");

$("#submit").click(
    function() {
        const name = $("#name").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const extra = $("#extra").val();
        if(!name || !phone || !email || !extra) {
            $("#feedback").text("Puudub info.");
            return;
        }
        if(phoneRegEx.test(phone) && emailRegEx.test(email)) {
            $("#feedback").text("Sobiv sisend!");
            return;
        }
        $("#feedback").text("Vales formaadis telefoninumber või/ja email.");
    }
);
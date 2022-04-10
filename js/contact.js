const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexValidationResult = false;
$("#btn-submit").prop("disabled", true);

$("#contact-form").keyup(function () {
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let additionalText = $("#additional-text").val();

    if (
        name.length > 0 &&
        phone.length > 0 &&
        email.length > 0 &&
        additionalText.length > 0) {
        if (phoneRegex.test(phone)) {
            $("#phone").removeClass("error");
            regexValidationResult = true;
            $("#phone-alert").addClass("hidden");
        } else {
            regexValidationResult = false;
            $("#phone").addClass("error");
            $("#phone-alert").removeClass("hidden");
        }
        if (emailRegex.test(email)) {
            $("#email").removeClass("error");
            regexValidationResult = true;
            $("#email-alert").addClass("hidden");
        } else {
            regexValidationResult = false;
            $("#email").addClass("error");
            $("#email-alert").removeClass("hidden");
        }
        if (regexValidationResult) {
            $("#btn-submit").prop("disabled", false);
            $(".form-alert").addClass("hidden");
        } else {
            $("#btn-submit").prop("disabled", true);
            $(".form-alert").removeClass("hidden");
        }
    }
    else {
        $("#btn-submit").prop("disabled", true);
    }
});
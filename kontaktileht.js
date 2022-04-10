$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var lisainfo = $('#lisainfo').val();

    $(".error").remove();

    if (name.length < 1) {
      $('#name').after('<span class="error">!</span>');
    }
    if (phone.length < 1) {
      $('#phone').after('<span class="error">!</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">!</span>');
    } 
    if (lisainfo.length < 1) {
      $('#lisainfo').after('<span class="error">!</span>');
    }
  });

});
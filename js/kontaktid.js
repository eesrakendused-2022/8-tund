$('#phoneNum').on('input', function() {
	var input=$(this);
	var re = /\+3725\d{6,7};
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
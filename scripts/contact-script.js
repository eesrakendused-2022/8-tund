/* kohalikku mällu salvestamine */

let fullName, phone, email, comment, submitBtn;
fullName = document.querySelector('#fullName');
phone = document.querySelector('#phone');
email = document.querySelector('#email');
comment = document.querySelector('#comment');
submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', saveLocal);

function saveLocal(){
/*     localStorage.setItem('name', fullName.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('comment', comment.value); */
    let data = {
        fullName: fullName.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value
    }
    localStorage.setItem('commentData', JSON.stringify(data));
}

/* valideerimine */

$(function(){
  $("#commentForm").validate({  
    rules: {
		fullName: {
			required: true,
			minlength: 2
		},
		phone: {
			required: true,
			phoneET: true
		},
		email: {
			required: true,
			emailCheck: true
		},
		comment: {
			required: true,	
		}
    },
    messages: {
		fullName: {
			required: "Palun sisesta nimi",
			minlength: "Nimes peab olema vähemalt 2 tähte"
		},
		phone: {
			required: "Palun sisesta telefoninumber",
		},
		email: {
			required: "Palun sisesta e-posti aadress",
		},
		comment: {
			required: "Palun sisesta märkus"
		}
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

jQuery.validator.addMethod('phoneET', function(phone, element) {
	phone = phone.replace(/\s+/g,'');
	var regexp = /^(\+372)?([0-9]{7})([0-9])?$/;	
	/* var regexp = /^(\+([1-9]{3}))?([0-9]{7})([0-9])?$/; */	
	return this.optional( element ) || regexp.test( phone )
}, "Palun sisesta Eesti telefoninumber");

jQuery.validator.addMethod('emailCheck', function(email, element) {
	var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;		
	return this.optional( element ) || regexp.test( email )
}, "Palun sisesta e-posti aadress kujul nimi@domeen.ee");

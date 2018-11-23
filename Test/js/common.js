$(document).ready(function() {
	jQuery(function($){
		$("#date").mask("99/99/9999");
		$("#phone").mask("+380 (999) 999-99-99");
		$("#tin").mask("99-9999999");
		$("#ssn").mask("999-99-9999");
	});

	//form 
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

});


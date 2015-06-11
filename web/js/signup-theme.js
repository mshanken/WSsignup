$(function () {
	$("#CI_subscribeForm").validate({
		rules: {
				CI_email:{email:true}
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function() { form.submit(); },
		success: function(label, element){
			// console.log( "test2: ", label, element );
			var _this = $(element).parent();
			if( $(_this).hasClass("has-error") ){
				$(_this).removeClass("has-error").addClass("has-success");
				$(_this).find("span.glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
				$(_this).find("span.sr-only").attr("id", "inputSuccess2Status").text("(success)");
			}	
		},
		invalidHandler: function(event, validator){
			// console.log("test:", validator, event, validator.invalid);
			$.each( validator.invalid, function( key, value ) {
				// console.log( key + ": " + value );
				var _this = $("#"+key).parent();
				$(_this).addClass("has-success");
				$(_this).addClass("has-error has-feedback");
				$(_this).find(".form-control-feedback").css("display","block");
			});
		}
	});

});

function pickwineregion( el ){
  // console.log('test:', el.checked);
  var checked = el.checked
  var checkboxes = document.getElementsByName('CI_custom3');
  var marked = 0;
  if ( checked ){

    for (var i = 0, iLen = checkboxes.length; i < iLen; i++) {
      if (checkboxes[i].checked) {
          marked++
      }
    }
    // console.log(marked)
    if (!marked) {
      alert("Please select your wine interests for the Ratings Flash newsletter.\n\nSee list at top of page.");
      el.checked = false;
    }
  }
}

/* function populate() {
  var checkboxes = document.getElementsByName('ci-custom3');
  var ip1 = document.getElementById('ci-custom3');
  
  ip1.value = '';
  
  for (var i = 0, iLen = checkboxes.length; i < iLen; i++) {
    if (checkboxes[i].checked) {

      if (ip1.value.length === 0) {
         ip1.value = checkboxes[i].value;
      } else {
         ip1.value = ip1.value + ',' + checkboxes[i].value;
      }
    }

  }
} */
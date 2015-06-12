$(function () {
	$("#CI_subscribeForm").validate({
		rules: {
			CI_email:{ email:true },
			CI_LID: { required: true }
		},
		messages: {
			CI_LID: "Please pick at least one from the list below",
			CI_custom3: "Please select your wine interests for the Ratings Flash newsletter."
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function() { alert("form.submit();") },
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
	
	$(".row-four input#2562328995").change(function(){
		//console.log(this);
		var checked = this.checked,
				checkboxes = document.getElementsByName('CI_custom3'),
				marked = 0;
		if ( checked ){

	    for (var i = 0, iLen = checkboxes.length; i < iLen; i++) {
	      if (checkboxes[i].checked) {
	          marked++
	      }
	    }
	    // console.log(marked)
	    if (!marked) {
	      // alert("Please select your wine interests for the Ratings Flash newsletter.\n\nSee list at top of page.");
	      $('#myModal').modal();
	      this.checked = false;
	    }
	  }
	})/*  */
});
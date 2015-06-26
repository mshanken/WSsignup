function countUnchecked() {
  var n = $( ".row-two input[type=checkbox]:checked" ).length; // true if 0 checked
  var t = $( "input[type=checkbox]#2562328995:checked" ).length; // true if 0 checked
  console.log(n + (n == 1 ? " is" : " are") + " checked!");
  console.log(t + (t == 1 ? " " : " un") + "checked!");
  if( n ){
	  if( !t ){
	  	console.log(n,t);
	  	$("#2562328995").attr("checked",true);
	  }
	} else {
		if( t ){
			console.log(n,t);
			$('#myModal').modal();
		} else {
			console.log(n,t);
			$("#2562328995").attr("checked",true);
		}
	}
}
function populate() { 
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
} 
$(function () {
	$("#CI_subscribeForm").validate({
		rules: {
			CI_email:{ email:true },
			CI_LID: { required: true }, 
			/* ,CI_custom3: { required: countUnchecked }
			"#2562328995": { required: true } */
		},
		messages: {
			CI_LID: "Please pick at least one from the list below",
			CI_custom3: "Please select your wine interests for the Ratings Flash newsletter."
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function(form) { form.submit(); },
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
	//$( ".row-two input[type=checkbox]" ).click( countUnchecked );
	$(".row-four input#2562328995").change(function(){
		//console.log(this);
		var checked = this.checked,
				checkboxes = document.getElementsByName('ci-custom3'),
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

	var workWithThisFormIfExist2 = $("form[method='post']").length;

	// Tracking link source
	if(workWithThisFormIfExist2){
		var url = window.location.search,
			tmp = url.substring(url.indexOf('source=')+7, url.length);
		// console.log(url.indexOf('email='));
		if ( url.indexOf('source=') !== -1 ){
			// console.log(1);
			$("#CI_custom5").val(tmp);
		}
	}
});
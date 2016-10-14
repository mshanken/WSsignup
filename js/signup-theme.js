'use strict';

function countUnchecked() {
  var n = $( '.row-two input[type=checkbox]:checked' ).length; // true if 0 checked
  var t = $( 'input[type=checkbox]#2562328995:checked' ).length; // true if 0 checked
  // console.log(n + (n == 1 ? ' is' : ' are') + ' checked!');
  // console.log(t + (t == 1 ? ' ' : ' un') + 'checked!');
  if( n ){
	  if( !t ){
	  	console.log(n,t);
	  	$('#2562328995').attr('checked',true);
	  }
	} else {
		if( t ){
			console.log(n,t);
			$('#myModal').modal();
		} else {
			console.log(n,t);
			$('#2562328995').attr('checked',true);
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
	$('#CI_subscribeForm').validate({
		ignore: '.ignore',
		rules: {
			CI_email:{ email:true },
			CI_LID: { required: true },
			hiddenRecaptcha: {
                required: function () {
                    $('.g-recaptcha').removeClass('hidden');
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
			/* ,CI_custom3: { required: countUnchecked }
			"#2562328995": { required: true } */
		},
		messages: {
			CI_LID: 'Please pick at least one from the list below',
			CI_custom3: 'Please select your wine interests for the Ratings Flash newsletter.'
		},
		validClass: 'success',
		errorClass: 'error',
		errorElement:'em',
		submitHandler: function(form) { /*alert('send!');*/form.submit(); },
		success: function(label, element){
			// console.log( 'test2: ', label, element );
			var _this = $(element).parent();
			if( $(_this).hasClass('has-error') ){
				$(_this).removeClass('has-error').addClass('has-success');
				$(_this).find('span.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
				$(_this).find('span.sr-only').attr('id', 'inputSuccess2Status').text('(success)');
			}
		},
		invalidHandler: function(event, validator){
			// console.log("test:", validator, event, validator.invalid);
			$.each( validator.invalid, function( key, value ) {
				// console.log( key + ": " + value );
				var _this = $('#'+key).parent();
				$(_this).addClass('has-success');
				$(_this).addClass('has-error has-feedback');
				$(_this).find('.form-control-feedback').css('display','block');
			});
		}
	});
	//$( ".row-two input[type=checkbox]" ).click( countUnchecked );
	$('.row-four input#2562328995').change(function(){
		//console.log(this);
		var checked = this.checked,
			checkboxes = document.getElementsByName('ci-custom3'),
			marked = 0;
		if ( checked ){
    	    for (var i = 0, iLen = checkboxes.length; i < iLen; i++) {
                if (checkboxes[i].checked) {
                    marked++;
                }
            }
	       // console.log(marked)
    	    if (!marked) {
    	      // alert('Please select your wine interests for the Ratings Flash newsletter.\n\nSee list at top of page.');
    	      $('#myModal').modal();
    	      this.checked = false;
    	    }
        }
	});
    $( "input[type=checkbox]" ).change(function() {
        if( $(this).prop('checked') ){
            $(this).prev().removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        } else {
            $(this).prev().removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });
    /* For Private Guide o Dining */
    $('#CI_subscribeForm_pg2d').validate({
        ignore: '.ignore',
        rules: {
            CI_email:{ email:true },
            hiddenRecaptcha: {
                required: function () {
                    $('.g-recaptcha').removeClass('hidden');
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        validClass: 'success',
        errorClass: 'error',
        errorElement:'em',
        submitHandler: function(form) { /* alert('send!'); */form.submit(); },
        success: function(label, element){
            var _this = $(element).parent();
            if( $(_this).hasClass('has-error') ){
                $(_this).removeClass('has-error').addClass('has-success');
                $(_this).find('span.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
                $(_this).find('span.sr-only').attr('id', 'inputSuccess2Status').text('(success)');
            }
        },
        invalidHandler: function(event, validator){
            $.each( validator.invalid, function( key, value ) {
                // console.log( key + ": " + value );
                var _this = $('#'+key).parent();
                $(_this).addClass('has-success');
                $(_this).addClass('has-error has-feedback');
                $(_this).find('.form-control-feedback').css('display','block');
            });
        }
    });
    /* To prepopulate selected newsletter for promotinal purpose */
    var workWithThisFormIfExist = $('#CI_subscribeForm.forfillingout').length;

    // Pre-populates input fields via link
    if(workWithThisFormIfExist){
        var url = window.location.search.split('&'),
            tmp;

        for(var i = 0; i < url.length; i++){
            tmp = url[i].split('=');
            if ( tmp[0] === 'CI_LID' || tmp[0] === '?CI_LID'){
                $('#'+tmp[1]).attr('checked','checked');
                // console.log($('#'+tmp[1]).attr('checked','checked'));
            }
        }
    }

});

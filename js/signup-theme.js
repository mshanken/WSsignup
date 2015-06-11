$(function () {
	$("#CI_subscribeForm").validate({
		submitHandler: function() { alert("Submitted!") },
		errorClass: "invalid"
	});

});

function pickwineregion( el ){
  // console.log('test:', el.checked);
  var checked = el.checked
  var checkboxes = document.getElementsByName('ci-custom3');
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
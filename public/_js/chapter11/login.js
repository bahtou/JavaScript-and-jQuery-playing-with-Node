( function($, undefined) {

  $(document).ready(init);

  function init() {
    registerEventListeners();
  }

  function registerEventListeners() {
    $('#login').submit(handleSubmit);
  }

  function handleSubmit() {
    var formData = $(this).serialize();
    console.log(formData);
    $.postJSON('/login', formData, processData)
      .error(function(jqXHR, textStatus, errorThrown) {
        var errorMsg = 'Something went wrong';
        errorMsg += 'Please try again later.';
        alert(errorMsg);
        alert(jqXHR.status);
        alert(jqXHR.responseText);
        alert('error: ' + textStatus + ' ' + errorThrown);
      });

    function processData(data, status, jqXHR) {
      console.log('in here: ' + status);
      console.log('data: ' + data);
      if (data.pass === true) {
        $('.content').html('<p>You have successfully logged on!</p>');
      } else {
        if ($('#fail').length === 0) {
          $('#formFrame').prepend('<p id="fail">Incorrect login information. Please try again</p>');
        }
      }
    } //end processData

    return false;
   } //end handleSubmit

})(jQuery);

/*
  $.ajax{
    url: '/login',
    data: formData,
    success: processData,
    error: errorResponse
  }

  function errorResponse(jqXHR, textStatus, errorThrown) {
    var errorMsg = 'Something went wrong';
    errorMsg += 'Please try again later.';
    alert('error: ' + textStatus + ' ' + errorThrown);
  }
*/
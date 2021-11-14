$(function(){
  /********************** RSVP **********************/
  $('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    $.post('https://script.google.com/macros/s/AKfycbxyPv20oN3sl8XeBH8hu4OUSawDvyHxluVUC3hJyjnqsW9FN5cv/exec', data)  
      .done(function (data) {
        console.log(data);
        if (data.result === "error") {
          $('#alert-wrapper').html(alert_markup('danger', data.message)); 
        } else {
          $('#alert-wrapper').html('');
          $('#rsvp-modal').modal('show');
        }
      })
      .fail(function (data) {
        console.log(data);
        $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong>  Oh no! There is some issue with the server. '));
      });
  });
});

// alert_markup
function alert_markup(alert_type, msg) {
  return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// Add an onclick function to the button
// If the text area is invalid, when the button is clicked, throw an error message

$(document).ready( function() {
  var textField = $('form input[type=\'text\']');
  console.log(textField);
  $('form button[type=\'submit\']').bind('click', function () {
    if(textField) {
      console.log('I\'m here');
    } else {
      console.log('Now, I\'m here');
    }
  }); // end onclick
}); // end ready
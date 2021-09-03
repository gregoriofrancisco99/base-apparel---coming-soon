
function emailValidator() {
  
  var email = document.querySelector('input[type="email"]').value;
  var atPos = email.indexOf('@');
  var dotPos = email.lastIndexOf('.');

  console.log(email);

  if(atPos < 1 || (dotPos - atPos) < 2) {
    document.querySelector('#emailArea .alert').innerHTML = 'Please, provid a valid email';

    return false;
  }
  return true;
}
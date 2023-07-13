// Şifre oluşturma
function generate_password(length = 8) {
  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  

  var password = '';

  var hasUppercase = false;
  var hasLowercase = false;
  var hasNumber = false;
  var hasSpecialCharacter = false;

  while (password.length < length || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialCharacter) {
    var randomIndex;
    var randomCharacter;

    randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
    randomCharacter = uppercaseLetters[randomIndex];
    password += randomCharacter;
    hasUppercase = true;

    randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
    randomCharacter = lowercaseLetters[randomIndex];
    password += randomCharacter;
    hasLowercase = true;

    randomIndex = Math.floor(Math.random() * numbers.length);
    randomCharacter = numbers[randomIndex];
    password += randomCharacter;
    hasNumber = true;

    randomIndex = Math.floor(Math.random() * specialCharacters.length);
    randomCharacter = specialCharacters[randomIndex];
    password += randomCharacter;
    hasSpecialCharacter = true;
  }

  password = shuffleString(password);

  return password;
}

// Karakterleri karıştırma
function shuffleString(string) {
  var array = string.split('');
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join('');
}

// Şifre oluşturma butonu
var generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function() {
  var passwordInput = document.getElementById('passwordInput');
  passwordInput.value = generate_password();
});

// Kopyala butonu
var copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', function() {
  var passwordInput = document.getElementById('passwordInput');
  passwordInput.select();
  document.execCommand('copy');
  alert('Şifre kopyalandı!');
});

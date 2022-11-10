// Assignment code here

function generatePassword() {
var pwdLength = prompt("How many characters would you like your password to be?")

  if (pwdLength < 8 || pwdLength > 128){
      alert("Length must be 8-128 characters")
  }

  if (pwdLength >= 8 && pwdLength <= 128){
  var uppercase = confirm ("Would you like to use uppercase letters?")
  var lowercase = confirm("Would you like to use lowercase letters?")
  var numbers = confirm("would you like to use numbers?")
  var symbols = confirm("would you like to use special characters?")
  }    

  if (uppercase != true && lowercase != true && numbers != true && symbols != true){
      alert("You must select at least one character type!")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

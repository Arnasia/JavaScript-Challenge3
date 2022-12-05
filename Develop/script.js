// Assignment code here
let numbers = [0,1,2,3,4,5,6,7,8,9]
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = ["a","b","c","d","e","f"]
let specialChars = ["!","#","?","*","%","&"]
let userChoice = []
function generatePassword () {
  
let passwordLength = prompt ("Enter Length of password between 8-128 Characters")
let numberBoolean = confirm ("Should password consist of numbers?")
let upperCaseBoolean = confirm ("Should password consist of uppercase characters?")
let lowerCaseBoolean = confirm ("Should password consist of lowercase characters?")
let specialCharsBoolean = confirm ("Should password consist of special characters?")
console.log(numberBoolean)

if (numberBoolean) {
userChoice = userChoice.concat(numbers)
}
if (upperCaseBoolean) {
  userChoice = userChoice.concat(upperCase)
}
if (lowerCaseBoolean) {
  userChoice = userChoice.concat(lowerCase)
}
if (specialCharsBoolean) {
  userChoice = userChoice.concat(specialChars)
}
console.log(userChoice)

let passwordString=""
for (i=0;i < passwordLength; i++) {
  let index=Math.floor(Math.random()*userChoice.length)
  let randomChars=userChoice[index]
  passwordString=passwordString+randomChars
}
return passwordString
}



//make password appear in display box
// document.getElementById("display").value = password;

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

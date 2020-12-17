// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn0123456789+/*-@%";
var passwordlength = prompt("Please enter the length of the password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Input password length and assign this length to the password textarea
function inputLength() {

do { 

 if (passwordlength < 8 || passwordlength > 128 ) {

  alert("Please enter a length of at least 8 characters and no more than 128 characters");
  passwordlength = prompt("Please reenter the length of the password")};

} while (passwordlength < 8 || passwordlength > 128 );

document.getElementById("password").maxLength = passwordlength;
 
};

inputLength()

var choiceLowercase = confirm("Do you want to include lowercase letters ?");
var choiceUppercase = confirm("Do you want to include uppercase letters ?");
var choiceNumbers = confirm("Do you want to include numbers ?");
var choiceSpecialCharacters = confirm("Do you want to include special characters (+ / * - @ %) ?");


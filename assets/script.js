// Assignment Code
// This variable targets the button element in the html due to the fact it includes #generate. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // The function generatePassword is being called, and the value that gets generated will be saved into the password variable.
  var password = generatePassword("password");
  var passwordText = document.querySelector("#password");

  // This line handles displaying the password that gets generated into the 'Your Secure Password' text box.
  passwordText.value = password;

}

function generatePassword() {
  var password = "";

  var passwordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.")
    if (passwordLength < 8) {
      alert("Password must be between 8-128 characters!")
      console.log("Password must be between 8-128 characters!")
    }
    
    if (passwordLength > 128) {
      alert("Password must be between 8-128 characters!")
      console.log("Password must be between 8-128 characters!")
    }

  var lowerCase = "abcdefghijklmnopqrstuvwkyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacters = "!@#$%^&*'()";

    // if (confirm("Would you like to include lowercase letters in your password?"))
    //   chosenCharacters.confirm(lowerCase);

    // if (confirm("Would you like to include uppercase letters in your password?"))
    //   chosenCharacters.push(upperCase);

    // if (confirm("Would you like to include numbers in your password?"))
    //   chosenCharacters.push(numeric);

    // if (confirm("Would you like to include special characters in your password?"))
    //   chosenCharacters.push(specialCharacters);

    // if (chosenCharacters.length === 0) {
    //   alert("Must choose at least one type of character!");
    //   generatePassword();
    // }

}



// Add event listener to generate button
// When the user "clicks" the #generate button, it will call to the function 'writePassword.
generateBtn.addEventListener("click", writePassword);

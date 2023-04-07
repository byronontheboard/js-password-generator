// Assignment Code
// This variable targets the button element in the html due to the fact it includes #generate. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // The function generatePassword is being called, and the value that gets generated will be saved into the password variable.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // This line handles displaying the password that gets generated into the 'Your Secure Password' text box.
  passwordText.value = password;

}

function generatePassword() {
  // I'm logging this so that I can confirm that the correct button is being pressed and that it is connected correctly.
  console.log("The button is working when I press it.")

  // When prompted for length of password the user can choose between 8-123 characters.


  // The user can choose whether to include lowercase characters.
  var lowerCase = "abcdefghijklmnopqrstuvwkyz";

  if (confirm("Would you like to include lowercase characters in your password?")) 
  console.log("Yay! The user has chosen whether or not to inlcude lowercase characters.")
  
  // The user can choose whether to include uppercase charaters.
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (confirm("Would you like to include uppercase characters in your password?"))
  console.log("Whoopee! The user has chosen whether or not to inlcude uppercase characters.")
  
  // The user can choose whether to include numeric charaters.
  var numeric = "0123456789";
  
  if (confirm("Would you like to include numeric characters in your password?"))
  console.log("Hurray! The user has chosen whether or not to inlcude numeeric characters.")
  
  // The user can choose whether to include special charaters.
  var specialCharacters = "!@#$%^&*'()";

  if (confirm("Would you like to include special characters in your password?"))
  console.log("Congrats! The user has chosen whether or not to inlcude special characters.")

  // Once the password is generated, it will be displayed in an alert or written into the text box.
  return "Generated password will go here!"

  // var passwordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.")
  //   if (passwordLength < 8) {
  //     alert("Password must be between 8-128 characters!")
  //     console.log("Password must be between 8-128 characters!")
  //   }
    
  //   if (passwordLength > 128) {
  //     alert("Password must be between 8-128 characters!")
  //     console.log("Password must be between 8-128 characters!")
  //   }

  // var lowerCase = "abcdefghijklmnopqrstuvwkyz";
  // var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var numeric = "0123456789";
  // var specialCharacters = "!@#$%^&*'()";

    // if (confirm("Would you like to include lowercase letters in your password?"))
    //   chosenCharacters.confirm(lowerCase);

    // if (confirm("Would you like to include uppercase letters in your password?"))
    //   chosenCharacters.push(upperCase);

    // if (confirm("Would you like to include numbers in your password?"))
    //   chosenCharacters.push(numeric);

    // if (confirm("Would you like to include special characters in your password?"))
      chosenCharacters.push(specialCharacters);

    // if (chosenCharacters.length === 0) {
    //   alert("Must choose at least one type of character!");
    //   generatePassword();
    // }
    
}



// Add event listener to generate button
// When the user "clicks" the #generate button, it will call to the function 'writePassword.
generateBtn.addEventListener("click", writePassword);

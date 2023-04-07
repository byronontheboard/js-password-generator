// Assignment Code
// This variable targets the button element in the html due to the fact it includes #generate. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // The function generatePassword is being called, and the value that gets generated will be saved into the password variable.
  var password = generatePassword();

  // This variable is what brings the 'passwordText' to the text box because of the #password that is attached to it.
  var passwordText = document.querySelector("#password");
  
  // This line handles displaying the password that gets generated into the 'Your Secure Password' text box.
  passwordText.value = password;
}

// Add event listener to generate button
// When the user "clicks" the #generate button, it will call to the function 'writePassword.
generateBtn.addEventListener("click", writePassword);

// This function is in charge of generating the randomized, 8-128 character, password.
function generatePassword() {
  // I'm logging this so that I can confirm that the correct button is being pressed(Generate Password) and that it is connected correctly.
  console.log("The button is working when I press it.");

  // These are the variables that will be prompted for the password criteria.
  var passwordLength = 0
  var lowerCase = "abcdefghijklmnopqrstuvwkyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacters = "!@#$%^&*'()";
  
  // This is the result after all the criteria has been selected for the password.
  var passwordResult = "";

  // When prompted for length of password the user can choose between 8-123 characters.
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters");

    // This is checking if anything was typed into the entry at all or if the prompt was cancelled.
    if (passwordLength === null) {
      return "";
    }
    else {
      // This is checking to make sure that numbers are only being typed into the entry.
      if (!isFinite(passwordLength)) {
        alert("Come on man that is not a number. Just make my life easier and do the right thing for me. Please enter a number!")
        return "";
      }
      else {
        if (passwordLength < 8 || passwordLength > 128)
        alert("Password must be between 8-128 characters!")
        console.log("Password must be between 8-128 characters!")

      }
    }
    
    generatePassword()
  };
  console.log("Cheers! A password length between 8-128 characters was selected!");

  // The user can choose whether to include lowercase characters.

  if (confirm("Would you like to include lowercase characters in your password?")); 
  console.log("Yay! The user has chosen whether or not to inlcude lowercase characters.");
  
  // The user can choose whether to include uppercase charaters.

  if (confirm("Would you like to include uppercase characters in your password?"));
  console.log("Whoopee! The user has chosen whether or not to inlcude uppercase characters.");
  
  // The user can choose whether to include numeric charaters.
  
  if (confirm("Would you like to include numeric characters in your password?"));
  console.log("Hurray! The user has chosen whether or not to inlcude numeeric characters.");
  
  // The user can choose whether to include special charaters.

  if (confirm("Would you like to include special characters in your password?"));
  console.log("Congrats! The user has chosen whether or not to inlcude special characters.");

  // This is the variable for all the chosen characters to use in the password.
  var passwordCharacters = [];

  // Once the password is generated, it will be displayed in an alert or written into the text box.
  return "Generated password will go here!"
   
}




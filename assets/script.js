// Assignment Code
var generateBtn = document.querySelector("#generate");

// Types of characters that can be used to generate a password(if selected under criteria).
var types = {
  lowChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numChar: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  speChar: ["!","@","#","$","%","^","&","*","(",")","-","=","_","+"],
};

// This will prompt the user with questions for them to decide which types of characters to use(so as long as they choose a password length between 8-128 first).
function generatePassword() {
  var chooseLower
  var chooseUpper
  var chooseNumbers
  var chooseSpecial
  
  var passwordLength;
  var passwordCharacters = [];
  var password = "";
  
  // These are the variables for the character types that will be used if selected by the user(that will be added to the passwordCharacters array, and later used to generate the random password).
  var lowercase;
  var uppercase;
  var numbers;
  var special;
  
  // This is the criteria for the password to be generated.
  passwordLength = parseInt (prompt ("Please choose a password length of at least 8 characters and no more than 128 characters")); 
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    console.log ("Darn it! The password length wasn't a number between 8-128...")
    alert ("The password must be a number between 8-128 characters...come on now.");
    return ("Error!");
  }

  else (passwordLength >= 8 || passwordLength <= 128 || isFinite(passwordLength) === true); {
    console.log ("Woohoo! You have successfuly chosen a password length of " + (passwordLength) + ".") 
    
    chooseLower = confirm ("Would you like to include lowerCase characters in your password?")
    if (chooseLower === true) {
      for (var i = 0; i < passwordLength; i++) {
        lowercase = types.lowChar[Math.floor(Math.random() * types.lowChar.length)];
        passwordCharacters += lowercase;
      }
      console.log ("Yay! You have chose to include lowercase characters in your password!")
    };
    
    chooseUpper = confirm ("Would you like to include uppercase characters in your password?")
    if (chooseUpper === true) {
      for (var i = 0; i < passwordLength; i++) {
        uppercase = types.uppChar[Math.floor(Math.random() * types.uppChar.length)];
        passwordCharacters += uppercase;
      }
      console.log ("Cheers! You have chose to include uppercase characters in your password!")
    };
    
    chooseNumbers = confirm ("Would you like to include numeric characters in your password?")
    if (chooseNumbers === true) {
      for (var i = 0; i < passwordLength; i++) {
        numbers = types.numChar[Math.floor(Math.random() * types.numChar.length)];
        passwordCharacters += numbers;
      }
      console.log ("Whoopee! You have chose to include numbers in your password!")
    };
  
    
    chooseSpecial = confirm ("Would you like to include special characters in your password?")
    if (chooseSpecial === true) {
      for (var i = 0; i < passwordLength; i++) {
        special = types.speChar[Math.floor(Math.random() * types.speChar.length)];
        passwordCharacters += special;
      }
      console.log ("Hurray! You have chose to include special characters in your password!")
    };

    console.log (passwordCharacters)
    return passwordCharacters
  }

  // } else if{
  //   (lowercase === false && uppercase === false && numbers === false && special === false);
  //   console.log("Boohoo! The criteria was not met... :(")
  //   alert ("The password must be a number between 8-128 characters...come on now."); {
  //   return "Error!"
  //   }

}
    
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}

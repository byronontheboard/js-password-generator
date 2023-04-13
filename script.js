// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the types of characters that can be used to generate a password(if selected under criteria their array will later be added to passwordCharacters).
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
  var lowercase
  var uppercase
  var numbers
  var special
  
  // This is the criteria for the password to be generated.
  passwordLength = parseInt (prompt ("Please choose a password length of at least 8 characters and no more than 128 characters")); 
  
  // This is making sure that the entered password length is meeting the criteria of 8-128 characters and is also a number, otherwise the prompt will not continue.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    console.log ("Darn it! :( The password length wasn't a number between 8-128...")
    alert ("The password must be a number between 8-128 characters...come on now.");
      return ("(ㆆ_ㆆ)\n\nDarn it! The password length wasn't a number between 8-128...");
  }

    // Once this criteria is met(a 8-128 character length password was selected by the user) they will then be prompted with questions to select the character types.
    else if (passwordLength >= 8 || passwordLength <= 128 || isFinite(passwordLength) === true); {
      console.log ("Woohoo! :D You have successfuly chosen a password length of " + (passwordLength) + ".") 
      
      // This criteria is for lowercase characters. If 'confirm', the array for lowercase(lowChar) will be added to the variable passwordCharacters.
      chooseLower = confirm ("Would you like to include lowerCase characters in your password?")
      if (chooseLower === true) {
        for (var i = 0; i < passwordLength; i++) {
          lowercase = types.lowChar[Math.floor(Math.random() * types.lowChar.length)];
          passwordCharacters += lowercase;
        }
        console.log ("Yay! :D You have chose to include lowercase characters in your password!")
      };
      
      // This criteria is for uppercase characters. If 'confirm', the array for uppercase(uppChar) will be added to the variable passwordCharacters.
      chooseUpper = confirm ("Would you like to include uppercase characters in your password?")
      if (chooseUpper === true) {
        for (var i = 0; i < passwordLength; i++) {
          uppercase = types.uppChar[Math.floor(Math.random() * types.uppChar.length)];
          passwordCharacters += uppercase;
        }
        console.log ("Cheers! :D You have chose to include uppercase characters in your password!")
      };
      
      // This criteria is for numeric characters. If 'confirm', the array for numbers(numChar) will be added to the variable passwordCharacters.
      chooseNumbers = confirm ("Would you like to include numeric characters in your password?")
      if (chooseNumbers === true) {
        for (var i = 0; i < passwordLength; i++) {
          numbers = types.numChar[Math.floor(Math.random() * types.numChar.length)];
          passwordCharacters += numbers;
        }
        console.log ("Whoopee! :D You have chose to include numbers in your password!")
      };
      
      // This criteria is for special characters. If 'confirm', the array for special(speChar) will be added to the variable passwordCharacters.
      chooseSpecial = confirm ("Would you like to include special characters in your password?")
      if (chooseSpecial === true) {
        for (var i = 0; i < passwordLength; i++) {
          special = types.speChar[Math.floor(Math.random() * types.speChar.length)];
          passwordCharacters += special;
        }
        console.log ("Hurray! :D You have chose to include special characters in your password!")
      };
    
        // This statement is to validate that at least one character type was selected to generate the password. If not, then the prompt for the password generator will terminate.
        if (!chooseLower && !chooseUpper && !chooseNumbers && !chooseSpecial) {
          console.log("Boohoo! :( The criteria was not met...")
          alert ("At least one character type must be selected in order to generate your password.");
          return ("(╥﹏╥)\n\nBoohoo! The criteria was not met...");
        }

          // This formula will keep pulling a random character from the passwordCharacters string until it is the length of the string(which was specified prior to choosing the character types for the password), thus generating a random password.
          for (let i = 1; i <= passwordLength; i++) {
            var char = Math.floor(Math.random() * passwordCharacters.length);
            password += passwordCharacters.charAt(char)
          }

            // This will return the randomized password into the entry box for the user to copy.
            console.log ("Success! :D Here is your generated password: \n" + (password))
            alert ("Your Password: " + (password))
            return ("(っ◕‿◕)っ\n\n" + "Success! Here is your generated password: \n\n" + (password))
  }
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
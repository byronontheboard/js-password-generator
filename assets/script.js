// Assignment Code

// This variable targets the button element in the html due to the fact it includes #generate. 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("The button is working when I press it.");
  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChar = "0123456789";
  var specChar = "!@#$%^&*()-_=+,<.>/?";
  
  var result = "";
  var length = window.prompt("Please choose a password length of at least 8 characters and no more than 128 characters"); 
  
  var passwordLength = parseInt(length);
  
  while (passwordLength >= 8 && passwordLength <= 128 && isFinite) {
    confirm("Would you like to include lowerCase characters in your password?"); {
      lowerCase += result
    }
    confirm("Would you like to use upperCase characters?"); {
      upperCase += result
    }
    confirm("Would you like to include numeric characters in your password?"); {
      numChar += result
    }
    confirm("Would you like to include special characters in your password?"); {
      specChar += result
    }
    if (lowerCase || upperCase || numChar || specChar) {
      for (var i = 0; i < passwordLength; i++) {
        password += result.charAt(Math.floor(Math.random() * result.length))
      }
      return password 
    } 
  break; 
  }  
  alert("The password must be a number between 8-128 characters...come on now."); {
    return "Error!"
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//   var lowerCase = confirm("Would you like to include lowerCase characters in your password?")
//   if(confirm) {
//     result += lowerCase
//   }
//   var upperCase = confirm("Would you like to use upperCase characters?")
//   if(confirm) {
//     result += upperCase
//   }
//   var numbers = confirm("Would you like to include numeric characters in your password?")
//   if(confirm) {
//     result += numbers
//   }
//   var specChar = confirm("Would you like to include special characters in your password?")
//   if(confirm) {
//     result += specChar
//   }
//   if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false) {
//     alert("The criteria requires a character type, please choose at least one!");
//     console.log(result);
//   }
// }
// generatePassword();

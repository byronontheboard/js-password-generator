// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("The button is working when I press it.");
  
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numChar = ['0','1','2','3','4','5','6','7','8','9'];
  var specChar = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+',',','<','.','>','/','?'];
  var selectChar = [];

  var length = window.prompt("Please choose a password length of at least 8 characters and no more than 128 characters"); 

  var passwordLength = parseInt(length);

  while (passwordLength >= 8 && passwordLength <= 128 && isFinite) {
    console.log("Woohoo! The written password length has met the criteria!")
    confirm("Would you like to include lowerCase characters in your password?"); {
      console.log("Hurray! Lowercase letters have been added to the password criteria!")
      if (lowerCase) {
        selectChar += lowerCase;
      }
    }
    confirm("Would you like to use upperCase characters?"); {
      console.log("Yay! Uppercase letters have been added to the password criteria!")
      if (upperCase) {
        selectChar += upperCase;
      }
    }
    confirm("Would you like to include numeric characters in your password?"); {
      console.log("Cheers! Numerics have been added to the password criteria!")
      if (numChar) {
        selectChar += numChar;
      }
    }
    confirm("Would you like to include special characters in your password?"); {
      console.log("Whoopee! Special characters have been added to the password criteria!")
      if (selectChar) {
        selectChar += specChar;
      }
    }
    if (lowerCase == true || upperCase == true || numChar == true || specChar == true); {
    }
    console.log(selectChar);
    // This break was made to end the while loop if the criteria for the prompt was determined false.
    break; 
    } 
    console.log("Boohoo! The criteria was not met... :(")
      alert("The password must be a number between 8-128 characters...come on now."); {
      return "Error!"; {
    }
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

# js-password-generator (づ｡◕‿‿◕｡)づ 

### Originally, I began coding this project as an assignment from UC Davis’s Coding Bootcamp, but soon turned more so into a personal goal of mine: solely to practice the mechanics and concepts that I have learned so far regarding Javascript. 

![1 password-generator-js(main-page)](https://user-images.githubusercontent.com/127366720/231915851-9098cebb-a5ef-41b0-ab58-a1c635eec019.png)

## With this web application, the user will be able to generate their own randomized password under the following criteria: 
- Selecting  a password length between 8-128 characters.
- Selecting which of the following character types to use in their password:
    - Lowercase Characters
    - Uppercase Characters
    - Numeric Characters
    - Special Characters

## Let’s Generate Your Password

### In order to use this application, please find your way to my password generator by clicking this link first:
 [Deployed GitHub IO: JavaScript Password Generator](https://byronontheboard.github.io/js-password-generator/)

Once you have opened the web application, we can now get started. 

### First, please click on the ‘Generate Password’ button, from there you will be prompted to select a length for your password(but be sure to enter a length between 8-128 characters in order for the function to continue).

<img width="1792" alt="2 password-generator-js(character-length-prompt)" src="https://user-images.githubusercontent.com/127366720/231919404-26863b58-4f38-4ecf-ae62-10430b83d967.png">

### If you select a password length that is not less than 8, more than 128, or not a number; the application will then return an error message to the user and terminate the function.

<img width="1792" alt="4 password-generator-js(validation-character-length-return)" src="https://user-images.githubusercontent.com/127366720/231919731-033dc0f1-1ff6-45ea-8acc-778f6d2b6f05.png">

### If done correctly, and a password length between 8-128 characters was entered, you will then begin to be prompted with a series of questions regarding which character types that you would like to use in your password:
- Would you like to include lowercase characters in your password?
- Would you like to include uppercase characters in your password?
- Would you like to include numeric characters in your password?
- Would you like to include special characters in your password?

<img width="1792" alt="5 password-generator-js(character-type-questions)" src="https://user-images.githubusercontent.com/127366720/231927277-731189e1-dc4b-43cf-adaf-509804b6b9f9.png">

### While completing the prompt of questions, be careful while selecting your character types. If you don't select any character types for your password criteria, you will be returned an error message and the password generating will cease.

<img width="1792" alt="8 password-generator-js(validation-no-characters-selected)" src="https://user-images.githubusercontent.com/127366720/231931815-f5b6c28c-c421-478d-b5bf-adbef8f79507.png">

### After selecting your password length and confirming at least one character type that you would like to utilize for your password, you will then be returned your newly generated password! 

<img width="1792" alt="7 password-generator-js(password-successfully-generated-console)" src="https://user-images.githubusercontent.com/127366720/231933132-eb147e8e-ab00-4a17-8886-7b3e47cdb32e.png">

### Congratulations on successfully generating your password! From here, you can copy your new password from the text area to use however you would like! Enjoy! (づ｡◕‿‿◕｡)づ

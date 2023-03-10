// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


var generateBtn = document.querySelector("#generate");


function pswdprompts() {
  var pswdlength = prompt("Enter a length for password, must be between 8-128 characters"); 
  var pswdlengthnumber = Number(pswdlength)
  if (pswdlengthnumber <= 7 || pswdlengthnumber >= 128) {
    alert("Invalid Length");
 } else {
   console.log(pswdlengthnumber);
   return pswdlengthnumber;
 }
}

function pswdchar() {
  var pswdcharup = confirm("Do you want uppercase letters in your password? Ok for yes, Cancel for no");
  var pswdchardown = confirm("Do you want lowercase letters in your password? Ok for yes, Cancel for no");
  var pswdcharnum = confirm("Do you want numbers in your password? Ok for yes, Cancel for no")
  if (pswdcharup == True) {
    pswd
  }
}




function writePassword() {

  var password = pswdprompts();
  var asdfadsf = pswdchar();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




generateBtn.addEventListener("click", writePassword);
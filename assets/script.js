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

var pswdcharup = false;
var pswdchardown = false;
var pswdcharnum = false;
var pswdcharspec = false;

function pswdprompts() {
  var pswdlength = prompt("Enter a length for password, must be between 8-128 characters"); 
  var pswdlengthnumber = Number(pswdlength)
  if (pswdlengthnumber <= 7 || pswdlengthnumber >= 128) {
    return false;
 } else {
   console.log(pswdlengthnumber);
   return pswdlengthnumber;
 }
}

function pswdchar() {
  pswdcharup = confirm("Do you want uppercase letters in your password? Ok for yes, Cancel for no");
  pswdchardown = confirm("Do you want lowercase letters in your password? Ok for yes, Cancel for no");
  pswdcharnum = confirm("Do you want numbers in your password? Ok for yes, Cancel for no");
  pswdcharspec = confirm("Do you want special characters in your password? Ok for yes, Cancel for no");
  if (pswdcharup == false && pswdchardown == false && pswdcharnum == false && pswdcharspec == false) {
    alert("No character types were picked");
  } 
 
}




function writePassword() {

  var passwordlength = pswdprompts(); 
  if (passwordlength === false) {
    alert("Invalid Length");
  } 
  pswdchar (); 
  console.log(pswdchar(pswdchardown));


  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




generateBtn.addEventListener("click", writePassword);
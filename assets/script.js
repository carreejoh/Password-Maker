

var generateBtn = document.querySelector("#generate");

var pswdcharup = false;
var pswdchardown = false;
var pswdcharnum = false;
var pswdcharspec = false;

var uppercasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var intergerchar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "/", "=", "+"];

var finalpassword = [];

function pswdprompts() {
  var pswdlength = prompt("Enter a length for password, must be between 8-128 characters"); 
  var pswdlengthnumber = Number(pswdlength)
  if (pswdlengthnumber <= 7 || pswdlengthnumber >= 129) {
    alert("Invalid Length");
    return false;
 } else {
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
    passwordMaker();
  } else {
    
  }
}

function passwordMaker() {
  for (var i = 0; i < finalpassword.length;) {
    finalpassword.shift();
  }
  pswdlength = pswdprompts()
  if (pswdlength !== false) {
    pswdchar();
    for (var i = 0; i < pswdlength; i++) {
      var randomtype = Math.floor(Math.random() * 4);
      if (pswdcharup === true && randomtype === 0) {
        var randomchar = Math.floor(Math.random() * uppercasechar.length);
        finalpassword.push(uppercasechar[randomchar]);
       } else if (pswdchardown === true && randomtype === 1) {
        var randomchar1 = Math.floor(Math.random() * lowercasechar.length);
        finalpassword.push(lowercasechar[randomchar1]);
       } else if (pswdcharnum === true && randomtype === 2) {
        var randomchar2 = Math.floor(Math.random() * intergerchar.length);
        finalpassword.push(intergerchar[randomchar2]);
       } else if (pswdcharspec === true && randomtype === 3) {
        var randomchar3 = Math.floor(Math.random() * specialchar.length);
        finalpassword.push(specialchar[randomchar3]);
       } else {
        i--
       }
       var passwordText = document.querySelector("#password");
       let passwordstring = finalpassword.toString();
       let password = passwordstring.replace(/,/g,'');
       passwordText.value = password;
  }
  console.log(finalpassword);
 }
}

generateBtn.addEventListener("click", passwordMaker);
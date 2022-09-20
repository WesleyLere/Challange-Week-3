// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(window)
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spcharacterList = ["#", "@", "!", "$", "%", "^", "&", "*", "-", "_", "+", "="]
var letterListUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordList = [];
var length;
var mergeList = []; 
// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = passwordList.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordList)
  console.log(password)
}

function generatePassword() {
  length = prompt("how long do you want your password to be?", "");



  if (confirm("Do you want uppercase letters?") == true) {
    mergeList = mergeList.concat(letterListUppercase);
  }


  if (confirm("Do you want symbols?") == true) {
    mergeList = mergeList.concat(spcharacterList);
  };


  
  if (confirm("Do you want numbers?") == true) {
    mergeList = mergeList.concat(numberList);
  };

  mergeList = mergeList.concat(letterList)
  for (let i = 0; i < length; i++) {
    passwordList.push(mergeList[Math.floor(Math.random() * mergeList.length)]);

  }
  console.log(length);
console.log(mergeList)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

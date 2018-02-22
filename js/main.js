// var codeContainer = document.getElementById('name-container')
//
// function getName(button){
// console.log(button.value);
//
// codeContainer.innerHTML += button.value
// }
var code = document.getElementById('code')
var ButtonDisabler = document.getElementsByClassName('button')
var CorrectCode = "213"

function getNumber(button)
{
  code.innerHTML += button.value;
  var CodeLengthChecker = code.innerHTML.length;
  var DisableCounter = 0;

  for (DisableCounter = 0; DisableCounter < ButtonDisabler.length; DisableCounter++)
  {
  //  console.log(codeLengthChecker);
    if (CodeLengthChecker === 3) {
      ButtonDisabler[DisableCounter].disabled = true;
    }
    else {
      ButtonDisabler[DisableCounter].disabled = false;
    }
  }
  if (code.innerHTML === CorrectCode)
      {
        outcome.classList.add("fade-in");
        outcome.innerHTML = "THE CODE IS CORRECT"
        CorrectTimes++;
        greenLight.innerHTML = "CORRECT: " + CorrectTimes.toString() + " TIMES"
      }
  else if ((code.innerHTML != CorrectCode) && (CodeLengthChecker === 3) )
      {
        outcome.classList.add("fade-in");
        outcome.innerHTML = "THE CODE IS INCORRECT"
        IncorrectTimes++;
        redLight.innerHTML = "INCORRECT: " + IncorrectTimes.toString() + " TIMES"
      }
}

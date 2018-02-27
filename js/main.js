var code = document.getElementById('code')
var ButtonDisabler = document.getElementsByClassName('button')
var CorrectCode = "312"
var CorrectTimes =  0;
var IncorrectTimes = 0;
var timer = 0;
var greenBlock = getElementById('rightCode');
var redBlock = getElementById('wrongCode');

function getNumber(button)
{
  code.innerHTML += button.value;
  var CodeLengthChecker = code.innerHTML.length;
  var DisableCounter = 0;

  for (DisableCounter = 0; DisableCounter < ButtonDisabler.length; DisableCounter++)
  {
    if (CodeLengthChecker === 3) {
      ButtonDisabler[DisableCounter].disabled = true;
    }
    else {
      ButtonDisabler[DisableCounter].disabled = false;
    }
  }
  if (code.innerHTML === CorrectCode)
      {
        outcome.innerHTML = "THE CODE IS CORRECT"
        CorrectTimes++;
        rightCode.innerHTML =  "CORRECT: " + CorrectTimes.toString() + " TIMES"
      }
      else {
        reset();
      }
  else if ((code.innerHTML != CorrectCode) && (CodeLengthChecker === 3) )
      {
        outcome.innerHTML = "THE CODE IS INCORRECT"
        IncorrectTimes++;
        wrongCode.innerHTML =  "CORRECT: " + IncorrectTimes.toString() + " TIMES"
      }
      else {
        reset();
      }
}

function reset() {
  DisableCounter = 0;
  ButtonDisabler[DisableCounter].disabled = false;
}

var code = document.getElementById('code')
var ButtonDisabler = document.getElementsByClassName('button')
var CorrectCode = "312"
var CorrectTimes =  0;
var IncorrectTimes = 0;
var timer = 0;
var greenBlock = document.getElementById('rightCode');
var redBlock = document.getElementById('wrongCode');
//var outcome = document.getElementById();

function getNumber(button)
{
  code.innerHTML += button.value;
  var CodeLengthChecker = code.innerHTML.length;
  var DisableCounter = 0;

  for (DisableCounter = 0; DisableCounter < ButtonDisabler.length; DisableCounter++)
  {
    if (CodeLengthChecker === 3) {
      ButtonDisabler[DisableCounter].disabled = true;
      setTimeout(resetButton,5000);
    }
    else {
      ButtonDisabler[DisableCounter].disabled = false;
    }
  }
  if (code.innerHTML === CorrectCode)
      {
      //  outcome.innerHTML = "THE CODE IS CORRECT"
      greenBlock.classList.add("blinkG");
        CorrectTimes++;
        greenBlock.innerHTML =  "CORRECT: " + CorrectTimes.toString() + " TIMES"
        setTimeout(reset,5000);
      }
  else if ((code.innerHTML != CorrectCode) && (CodeLengthChecker === 3) )
      {
      //  outcome.innerHTML = "THE CODE IS INCORRECT"
      redBlock.classList.add("blinkR");
        IncorrectTimes++;
        redBlock.innerHTML =  "CORRECT: " + IncorrectTimes.toString() + " TIMES"
        setTimeout(reset,5000);
      }
}

function reset() {
  DisableCounter = 0;
  greenBlock.classList.remove("blinkG");
  redBlock.classList.remove("blinkR");
  code.innerHTML = "";
}

function resetButton(){
DisableCounter = 0;
    for(counterEnable=0; counterEnable < ButtonDisabler.length; counterEnable++) {

        ButtonDisabler[counterEnable].disabled = false;
    }
  }

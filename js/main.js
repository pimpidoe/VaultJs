var code = document.getElementById('code')
var ButtonDisabler = document.getElementsByClassName('button')
var CorrectCode = "312"
var CorrectTimes =  0;
var IncorrectTimes = 0;
var timer = 0;
var greenBlock = document.getElementById('rightCode');
var redBlock = document.getElementById('wrongCode');
var outcome = document.getElementById('outcome')
var audioLose = new Audio('snd/lose.mp3');
var audioWin = new Audio('snd/win.mp3');




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
        outcome.innerHTML = "THE CODE IS CORRECT"
        outcome.style.color = "green";
        outcome.classList.add("animated");
        outcome.classList.add("zoomIn");
        greenBlock.classList.add("blinkG");
        audioWin.play();
        CorrectTimes++;
        greenBlock.innerHTML =  "CORRECT: " + CorrectTimes.toString() + " TIMES"
        setTimeout(reset,5000);
      }
  else if ((code.innerHTML != CorrectCode) && (CodeLengthChecker === 3) )
      {
        outcome.innerHTML = "THE CODE IS INCORRECT"
        redBlock.classList.add("blinkR");
        outcome.classList.add("animated");
        outcome.classList.add("zoomIn");
        audioLose.play();
        IncorrectTimes++;
        redBlock.innerHTML =  "INCORRECT: " + IncorrectTimes.toString() + " TIMES"
        setTimeout(reset,5000);
      }
}

function reset() {
  DisableCounter = 0;
  greenBlock.classList.remove("blinkG");
  redBlock.classList.remove("blinkR");
  code.innerHTML = "";
  outcome.innerHTML = "";
  outcome.style.color = "";
  outcome.classList.remove("zoomIn")
  outcome.classList.remove("animated");
  audioWin.stop();
  audioLose.stop();
}

function resetButton(){
DisableCounter = 0;
    for(counterEnable=0; counterEnable < ButtonDisabler.length; counterEnable++) {

        ButtonDisabler[counterEnable].disabled = false;
    }
  }

// var codeContainer = document.getElementById('name-container')
//
// function getName(button){
// console.log(button.value);
//
// codeContainer.innerHTML += button.value
// }
var code = document.getElementById('code')
var ButtonDisabler = document.getElementsByClassName('button')
var button = document.getElementByClass('button')

function getNumber(button)
{
  code.innerHTML += button.value;
  var CodeLengthChecker = code.innerHTML.lenght;
  var DisableCounter = 0;

  for (DisableCounter = 0; DisableCounter < ButtonDisabler.length; DisableCounter++)
  {
    if (CodeLengthChecker == 3) {
      ButtonDisabler[DisableCounter].disabled = true;
    }
    else {
      ButtonDisabler[DisableCounter].disabled = false;
    }
  }
  if (codeContainer.innerHTML == CorrectCode)
      {
        outcome.classList.add("fade-in");
        outcome.innerHTML = "THE CODE IS CORRECT"
        CorrectTimes++;
        greenLight.innerHTML = "CORRECT: " + CorrectTimes.toString() + " TIMES"
        var audio = new Audio('snd/Open.mp3');
        audio.play();
        setTimeout(reset, 6000)
      }
  else if ((codeContainer.innerHTML != CorrectCode) && (codeLengthChecker == 3) )
      {
        outcome.classList.add("fade-in");
        outcome.innerHTML = "THE CODE IS INCORRECT"
        IncorrectTimes++;
        redLight.innerHTML = "INCORRECT: " + IncorrectTimes.toString() + " TIMES"
        var audio = new Audio('snd/Close.mp3');
        audio.play();
        setTimeout(reset, 6000)
      }
}

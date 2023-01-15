let plusButtonOfDuration = document.getElementById('plusButtonOfDuration');
let pomodoroDuration = document.getElementById('pomodoroDuration');
let minusButtonOfDuration = document.getElementById('minusButtonOfDuration');

let plusButtonOfBreak = document.getElementById('plusButtonOfBreak');
let breakTimeDuration = document.getElementById('breakTimeDuration');
let minusButtonOfBreak = document.getElementById('minusButtonOfBreak');

let minuteDiv = document.getElementById('minute');
let secondDiv = document.getElementById('second');

minuteDiv.innerHTML = pomodoroDuration.innerHTML;

plusButtonOfDuration.addEventListener('click', plusOfDuration);
minusButtonOfDuration.addEventListener('click', minusOfDuration);

plusButtonOfBreak.addEventListener('click', plusOfBreak);
minusButtonOfBreak.addEventListener('click', minusOfBreak);

function plusOfDuration(){
    if(parseInt(pomodoroDuration.innerHTML) < 25){
      if(parseInt(pomodoroDuration.innerHTML) > 0 && parseInt(pomodoroDuration.innerHTML) < 9){
        minuteDiv.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) + 1}`;
        pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) + 1}`;
       
      }
      else{
        minuteDiv.innerHTML = parseInt(pomodoroDuration.innerHTML) + 1;
        pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) + 1 ;
        
      };
    
    }
};


function minusOfDuration(){
    if(parseInt(pomodoroDuration.innerHTML) > 1){
          if(parseInt(pomodoroDuration.innerHTML) < 11){
            minuteDiv.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) - 1}`
            pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) - 1}`
          }
          else{
            minuteDiv.innerHTML = parseInt(pomodoroDuration.innerHTML) - 1 ;
            pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) - 1 ;
          };
    }
  };

function plusOfBreak(){
    if(parseInt(breakTimeDuration.innerHTML) < 10){
      if(parseInt(breakTimeDuration.innerHTML) > 0 && parseInt(breakTimeDuration.innerHTML) < 9){
        breakTimeDuration.innerHTML = `0${parseInt(breakTimeDuration.innerHTML) + 1}`
      }
      else{
        breakTimeDuration.innerHTML = parseInt(breakTimeDuration.innerHTML) + 1 ;
      };
    
    }
}


function minusOfBreak(){
    if(parseInt(breakTimeDuration.innerHTML) > 1){
      if(parseInt(breakTimeDuration.innerHTML) < 11){
        breakTimeDuration.innerHTML = `0${parseInt(breakTimeDuration.innerHTML) - 1}`
      }
      else{
        breakTimeDuration.innerHTML = parseInt(breakTimeDuration.innerHTML) - 1 ;
      };
  }
}
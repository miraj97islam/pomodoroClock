let minuteDiv = document.getElementById('minute');
let secondDiv = document.getElementById('second');

let plusButtonOfDuration = document.getElementById('plusButtonOfDuration');
let pomodoroDuration = document.getElementById('pomodoroDuration');
let minusButtonOfDuration = document.getElementById('minusButtonOfDuration');

let plusButtonOfBreak = document.getElementById('plusButtonOfBreak');
let breakTimeDuration = document.getElementById('breakTimeDuration');
let minusButtonOfBreak = document.getElementById('minusButtonOfBreak');

let plusButtonOfLongBreak = document.getElementById('plusButtonOfLongBreak');
let LongBreakTimeDuration = document.getElementById('LongBreakTimeDuration');
let minusButtonOfLongBreak = document.getElementById('minusButtonOfLongBreak');


let intervalPlusOfDuration;
let intervalMinusOfDuration;
let intervalPlusButtonOfBreak ;
let intervalMinusButtonOfBreak;
let intervalPlusButtonOfLongBreak;
let intervalMinusButtonOfLongBreak;

minuteDiv.innerHTML = pomodoroDuration.innerHTML;


plusButtonOfDuration.addEventListener('click', plusOfDuration);
minusButtonOfDuration.addEventListener('click', minusOfDuration);
plusButtonOfDuration.addEventListener('mousedown', function(){
                                                      intervalPlusOfDuration = setInterval(function(){
                                                                    plusOfDuration();
                                                      }, 500);
                                                     });
plusButtonOfDuration.addEventListener('mouseup', function(){
                                                    clearInterval(intervalPlusOfDuration);
});
minusButtonOfDuration.addEventListener('mousedown', function(){
                                                      intervalMinusOfDuration = setInterval(function(){
                                                                    minusOfDuration();
                                                      }, 500);
                                                    });
 minusButtonOfDuration.addEventListener('mouseup', function(){
                                                      clearInterval(intervalMinusOfDuration);
});



plusButtonOfBreak.addEventListener('click', plusOfBreak);
minusButtonOfBreak.addEventListener('click', minusOfBreak);
plusButtonOfBreak.addEventListener('mousedown', function(){
                                                  intervalPlusButtonOfBreak = setInterval(function(){
                                                                plusOfBreak();
                                                  }, 500);
                                                });
plusButtonOfBreak.addEventListener('mouseup', function(){
                                                  clearInterval(intervalPlusButtonOfBreak);
                                                });
 minusButtonOfBreak.addEventListener('mousedown', function(){
                                                  intervalMinusButtonOfBreak = setInterval(function(){
                                                                minusOfBreak();
                                                  }, 500);
});
minusButtonOfBreak.addEventListener('mouseup', function(){
                                                  clearInterval(intervalMinusButtonOfBreak);
});




plusButtonOfLongBreak.addEventListener('click', plusOfLongBreak);
minusButtonOfLongBreak.addEventListener('click', minusOfLongBreak);
plusButtonOfLongBreak.addEventListener('mousedown', function(){
                                                      intervalPlusButtonOfLongBreak = setInterval(function(){
                                                        plusOfLongBreak();
                                                      }, 500);
                                                    });
plusButtonOfLongBreak.addEventListener('mouseup', function(){
                                                      clearInterval(intervalPlusButtonOfLongBreak);
});
minusButtonOfLongBreak.addEventListener('mousedown', function(){
                                                    intervalMinusButtonOfLongBreak = setInterval(function(){
                                                      minusOfLongBreak();
                                                    }, 500);
                                                  });
minusButtonOfLongBreak.addEventListener('mouseup', function(){
                                                     clearInterval(intervalMinusButtonOfLongBreak);
});




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
    
      secondDiv.innerHTML = '00';
    };
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

          secondDiv.innerHTML = '00';
    };
  };



  

function plusOfBreak(){
    if(parseInt(breakTimeDuration.innerHTML) < 10){
        if(parseInt(breakTimeDuration.innerHTML) > 0 && parseInt(breakTimeDuration.innerHTML) < 9){
          breakTimeDuration.innerHTML = `0${parseInt(breakTimeDuration.innerHTML) + 1}`
        }
        else{
          breakTimeDuration.innerHTML = parseInt(breakTimeDuration.innerHTML) + 1 ;
        };
    
    };
};

function minusOfBreak(){
    if(parseInt(breakTimeDuration.innerHTML) > 1){
        if(parseInt(breakTimeDuration.innerHTML) < 11){
          breakTimeDuration.innerHTML = `0${parseInt(breakTimeDuration.innerHTML) - 1}`
        }
        else{
          breakTimeDuration.innerHTML = parseInt(breakTimeDuration.innerHTML) - 1 ;
        };
   };
};




function plusOfLongBreak(){
  if(parseInt(LongBreakTimeDuration.innerHTML) < 15){
      if(parseInt(LongBreakTimeDuration.innerHTML) > 0 && parseInt(LongBreakTimeDuration.innerHTML) < 9){
        LongBreakTimeDuration.innerHTML = `0${parseInt(LongBreakTimeDuration.innerHTML) + 1}`
      }
      else{
        LongBreakTimeDuration.innerHTML = parseInt(LongBreakTimeDuration.innerHTML) + 1 ;
      };
  
   };
};

function minusOfLongBreak(){
  if(parseInt(LongBreakTimeDuration.innerHTML) > 1){
      if(parseInt(LongBreakTimeDuration.innerHTML) < 11){
        LongBreakTimeDuration.innerHTML = `0${parseInt(LongBreakTimeDuration.innerHTML) - 1}`
      }
      else{
        LongBreakTimeDuration.innerHTML = parseInt(LongBreakTimeDuration.innerHTML) - 1 ;
      };
};
};
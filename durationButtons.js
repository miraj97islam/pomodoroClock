//this file works with the duration buttons and their events

//get durationButton elements
let plusButtonOfDuration = document.getElementById('plusButtonOfDuration');
let pomodoroDuration = document.getElementById('pomodoroDuration');
let minusButtonOfDuration = document.getElementById('minusButtonOfDuration');

let plusButtonOfBreak = document.getElementById('plusButtonOfBreak');
let breakTimeDuration = document.getElementById('breakTimeDuration');
let minusButtonOfBreak = document.getElementById('minusButtonOfBreak');

let plusButtonOfLongBreak = document.getElementById('plusButtonOfLongBreak');
let longBreakTimeDuration = document.getElementById('LongBreakTimeDuration');
let minusButtonOfLongBreak = document.getElementById('minusButtonOfLongBreak');

//interval names
let intervalPlusOfDuration;
let intervalMinusOfDuration;
let intervalPlusButtonOfBreak ;
let intervalMinusButtonOfBreak;
let intervalPlusButtonOfLongBreak;
let intervalMinusButtonOfLongBreak;


//SET Events for Pomodoro Duration Buttons
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



//SET Events for Break Duration Buttons
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



//SET Events for Long Break Duration Buttons
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




//increase pomodoro duration on click and mouseDown events
function plusOfDuration(){

    if(parseInt(pomodoroDuration.innerHTML) < 25){
        if(parseInt(pomodoroDuration.innerHTML) > 0 && parseInt(pomodoroDuration.innerHTML) < 9){
          elementMinute.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) + 1}`;
          pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) + 1}`;
        }
        else{
          elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML) + 1;
          pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) + 1 ;
        };
    
        minute = pomodoroDuration.innerHTML;
    };

};

//decrease pomodoro duration on click and mouseDown events
function minusOfDuration(){
    if(parseInt(pomodoroDuration.innerHTML) > 1){
        if(parseInt(pomodoroDuration.innerHTML) < 11){
          elementMinute.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) - 1}`
          pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) - 1}`
        }
        else{
          elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML) - 1 ;
          pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) - 1 ;
        };
        
        minute = pomodoroDuration.innerHTML;
    };
  };



//increase break duration on click and mouseDown events
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

//decrease break duration on click and mouseDown events
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




//increase long break duration on click and mouseDown events
function plusOfLongBreak(){
  if(parseInt(longBreakTimeDuration.innerHTML) < 15){
      if(parseInt(longBreakTimeDuration.innerHTML) > 0 && parseInt(longBreakTimeDuration.innerHTML) < 9){
        longBreakTimeDuration.innerHTML = `0${parseInt(longBreakTimeDuration.innerHTML) + 1}`
      }
      else{
        longBreakTimeDuration.innerHTML = parseInt(longBreakTimeDuration.innerHTML) + 1 ;
      };
  
   };
};

//decrease long break duration on click and mouseDown events
function minusOfLongBreak(){
  if(parseInt(longBreakTimeDuration.innerHTML) > 1){
      if(parseInt(longBreakTimeDuration.innerHTML) < 11){
        longBreakTimeDuration.innerHTML = `0${parseInt(longBreakTimeDuration.innerHTML) - 1}`
      }
      else{
        longBreakTimeDuration.innerHTML = parseInt(longBreakTimeDuration.innerHTML) - 1 ;
      };
};
};
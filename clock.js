//this file is to set clock and related buttons


let elementMinute = document.getElementById('minute');
let elementSecond = document.getElementById('second');
let WorkTitle = document.getElementById('WorkTitle');;

let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('resetButton');

elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML);
let minute = parseInt(pomodoroDuration.innerHTML);
let second = 60;
let runable = true;
let cycle = 0;

let intervalPomodoro;
let intervalBreak;
let intervalLongBreak;

startStopButton.addEventListener('click', startAndStopClock);
resetButton.addEventListener('click', resetClock);



function setIntervalOfPomodoro(){

   startStopButton.disabled = false;
   WorkTitle.innerText = 'Work Time';
   WorkTitle.style.color = 'black';
  
  intervalPomodoro = setInterval(function(){
        
    if(runable === true){
       second -= 1;
            
          if( second>0 && second <10){
            elementSecond.innerHTML = `0${second}`;
          }else if(second === 0 ){
                    elementSecond.innerHTML = '00';
                    
                    if(minute === 0){
                      cycle+=1;
                      clearInterval(intervalPomodoro);

                      if(cycle === 4){
                      elementMinute.innerHTML = parseInt(longBreakTimeDuration.innerHTML);
                      setIntervalOfLongBreak();
                      }
                      else{
                        elementMinute.innerHTML = parseInt(breakTimeDuration.innerHTML);
                      setIntervalOfBreak();
                      };
                    };
                    
                    second = 60;    
          } 
        else if(second  === 59){

          minute -= 1;
          elementMinute.innerHTML = minute;
          elementSecond.innerHTML = second;
            }
            else{
            elementSecond.innerHTML = second;
           } ;       
      };
}, 1000) ;
};



function setIntervalOfBreak(){

  startStopButton.disabled = true;
  WorkTitle.innerText = 'Break Time';
  WorkTitle.style.color = 'red';
  minute = breakTimeDuration.innerHTML;
  
   intervalBreak = setInterval(function(){
        
    if(runable === true){
       second -= 1;
            
            if( second>0 && second <10){
             elementSecond.innerHTML = `0${second}`;
            }else if(second === 0 ){
                      
                elementSecond.innerHTML = '00';
                      
                  if(minute === 0 ){
                    minute =  parseInt(pomodoroDuration.innerHTML);
                    elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML);
                    clearInterval(intervalBreak);
                    setIntervalOfPomodoro();
                  }else{
                    elementMinute.innerHTML = `${minute}`;
                  }

                second = 60;    
            } 
        else if(second  === 59){

          minute -= 1;
          elementMinute.innerHTML = minute;
          elementSecond.innerHTML = second;
            }
            else{
            elementSecond.innerHTML = second;
           } ;       
      };
}, 1000) ;
};


function setIntervalOfLongBreak(){
      
  startStopButton.disabled = true;
  WorkTitle.innerText = 'Relaxing Time';
  WorkTitle.style.color = 'red';
  minute = longBreakTimeDuration.innerHTML;
  
  intervalLongBreak = setInterval(function(){
        
    if(runable === true){
       second -= 1;
            
            if( second>0 && second <10){
             elementSecond.innerHTML = `0${second}`;
            }else if(second === 0 ){
                      
                elementSecond.innerHTML = '00';
                      
                      if(minute === 0 ){
                        minute =  parseInt(pomodoroDuration.innerHTML);
                        elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML);
                        cycle = 0;
                        clearInterval(intervalLongBreak);
                        setIntervalOfPomodoro();
                      }else{
                        elementMinute.innerHTML = minute;
                      }

                second = 60;    
            } 
        else if(second  === 59){

          minute -= 1;
          elementMinute.innerHTML = minute;
          elementSecond.innerHTML = second;
        }
            else{
              elementSecond.innerHTML = second;
             };       
     };
}, 1000) ;
}
   


function startAndStopClock(){
  
  if(startStopButton.innerHTML === 'Start'){
    startStopButton.innerHTML = 'Stop';
    runable = true;
    setIntervalOfPomodoro();
    clockStop = false;
    plusButtonOfDuration.style.visibility = 'hidden';
    minusButtonOfDuration.style.visibility = 'hidden';
    plusButtonOfBreak.style.visibility = 'hidden';
    minusButtonOfBreak.style.visibility = 'hidden';
    plusButtonOfLongBreak.style.visibility = 'hidden';
    minusButtonOfLongBreak.style.visibility = 'hidden';
  }
  else if(startStopButton.innerHTML === 'Stop') {
    startStopButton.innerHTML = 'Start';
    runable = false;
    plusButtonOfDuration.style.visibility = 'visible' ;
    minusButtonOfDuration.style.visibility = 'visible';
    plusButtonOfBreak.style.visibility = 'visible';
    minusButtonOfBreak.style.visibility = 'visible';
    plusButtonOfLongBreak.style.visibility = 'visible';
    minusButtonOfLongBreak.style.visibility = 'visible';
    clearInterval(intervalPomodoro);
  };
};


function resetClock(){

    elementSecond.innerHTML = '00';
    second = 60;
    elementMinute.innerHTML = parseInt(pomodoroDuration.innerHTML);
    minute = parseInt(pomodoroDuration.innerHTML);
    cycle =0;
  
    clearInterval(intervalPomodoro);
    clearInterval(intervalBreak);
    clearInterval(intervalLongBreak);
  
    startStopButton.innerHTML = 'Start';
    startStopButton.disabled  = false;
    runable = false;

    plusButtonOfDuration.style.visibility = 'visible' ;
    minusButtonOfDuration.style.visibility = 'visible';
    plusButtonOfBreak.style.visibility = 'visible';
    minusButtonOfBreak.style.visibility = 'visible';
    plusButtonOfLongBreak.style.visibility = 'visible';
    minusButtonOfLongBreak.style.visibility = 'visible';
    WorkTitle.innerHTML = 'Work Time';
    WorkTitle.style.color = 'black';
}















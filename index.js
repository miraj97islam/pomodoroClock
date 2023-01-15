let plusButton = document.getElementById('plusButton');
let pomodoroDuration = document.getElementById('pomodoroDuration');
let minusButton = document.getElementById('minusButton');



plusButton.addEventListener('click', plus)

function plus(){
  if(parseInt(pomodoroDuration.innerHTML) < 25){
    if(parseInt(pomodoroDuration.innerHTML) > 0 && parseInt(pomodoroDuration.innerHTML) < 9){
      pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) + 1}`
    }
    else{
      pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) + 1 ;
    };
  
  }
};

minusButton.addEventListener('click', minus);

function minus(){

if(parseInt(pomodoroDuration.innerHTML) > 1){
      if(parseInt(pomodoroDuration.innerHTML) < 11){
        pomodoroDuration.innerHTML = `0${parseInt(pomodoroDuration.innerHTML) - 1}`
      }
      else{
        pomodoroDuration.innerHTML = parseInt(pomodoroDuration.innerHTML) - 1 ;
      };
}
};
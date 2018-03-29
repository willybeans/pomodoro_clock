var a = 6, b = 10, c = true;
var userTimer = 2, userBreak = 3;
var clock = document.querySelector('.clock');
var breakTime = document.querySelector('.break_time');
var clockTime = document.querySelector('.clock_time');

window.onload = () => {
  clock.textContent = a;
  clock.addEventListener("click", countDown);
}

const countDown = function(){
  var rest = true;
  if (c){
    c = false;
  } else {
    c = true;
  }
  var myTimer = setInterval(counter, 1000);
  function counter() {
    if(c){
      clearInterval(myTimer);
    } else if(a === 0 && rest){ //User is in break mode
      a = userBreak;
      clock.textContent = a--;
      rest = false;
    }
    else if (a < 0 || c){ //user is on Timer mode
      a = userTimer;
      clock.textContent = a--;
      rest = true;
      //clearInterval(myTimer);
    } else {
      clock.textContent = a--;
    }
  }
}

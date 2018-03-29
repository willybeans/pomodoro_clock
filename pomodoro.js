var a = 6, b = 10, c = true;
var userTimer = 10, userBreak = 11;
var clock = document.querySelector('.clock');

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
    if(a === 0 && rest){ //User is in break mode
      a = userBreak;
      rest = false;
    }
    else if (a < 0 || c){ //user is on Timer mode
      a = userTimer;
      rest = true;
      //clearInterval(myTimer);
    } else {
      clock.textContent = a--;
    }
  }
}

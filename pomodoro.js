var a = 2, b = 10, c = true, rest = true, onOff = 0, userTimer = 25, seconds = 0,
    clock = document.querySelector('.clock');
    breakTime = document.querySelector('.break_time');
    clockTime = document.querySelector('.clock_time');

window.onload = () => {
  clock.textContent = userTimer;
  document.querySelector('.container').addEventListener('click', function(e){
    if (e.target !== e.currentTarget){
      var clickedItem = e.target.className;
      var itemParent = e.target.parentNode.className;
      if (clickedItem === 'clock'){
        countDown();
      } else {
        changeLength(clickedItem, itemParent);
      }
    }
    e.stopPropagation();
  }, false );
}
const changeLength = function(clickedItem, itemParent){ //allows user to edit time
  var numberArea = document.querySelector('.' + itemParent).childNodes[1];
    if(clickedItem === "minus"){
      numberArea.textContent = numberArea.textContent - 1;
      } else {
        numberArea.textContent = Number(numberArea.textContent) + 1;
      }
    if((itemParent === "clock_time" && c !== false) && (onOff === 0)){
      userTimer = Number(numberArea.textContent);
      a = userTimer;
      clock.textContent = numberArea.textContent;
    }
}
const countDown = function(){ //runs timer
  if(onOff === 0){ //to limit user edit ability after starting timer
    onOff++;
  }
  if (c){ //this turns the timer on and off.
    c = false;
  } else {
    c = true;
  }
  var myTimer = setInterval( () => {
    if(c){
      clearInterval(myTimer);
    } else if (userTimer === 1) {
      userTimer = 0;
    } else if((userTimer <= 0 && seconds <= 0) && rest){ //User is in break mode
      console.log("break");
      userTimer = document.querySelector('.break_time').childNodes[1].textContent;
      userTimer--;
      seconds = 59;
      rest = false;
    } else if ((userTimer <= 0 && seconds <= 0) && !rest){ //user is on Timer mode
      console.log("timer");
      userTimer = document.querySelector('.clock_time').childNodes[1].textContent;
      userTimer--;
      rest = true;
      seconds = 59;
    } else if (seconds <= 0 && userTimer > 0) {
      userTimer--;
      seconds = 59;
    } else {
      seconds--;
    }
    clock.textContent = (seconds < 10) ? userTimer+":0"+seconds : userTimer+":"+seconds;
  }, 1000);
}

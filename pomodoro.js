var onOff = true, rest = true,
    canEdit = 0, userTimer = 25, seconds = 0,
    clock = document.querySelector('.clock');
    breakTime = document.querySelector('.break_time');
    clockTime = document.querySelector('.clock_time');
/*still need to allow user to hit a "reset" button*/
window.onload = () => {
  setTime();
  document.querySelector('.container').addEventListener('click', function(e){
    if (e.target !== e.currentTarget){
      var clickedItem = e.target.className;
      var itemParent = e.target.parentNode.className;

      if(clickedItem === 'resetButt'){
        resetButt();
      } else if (clickedItem === 'clock'){
        countDown();
      } else {
        changeLength(clickedItem, itemParent);
      }
    }
    e.stopPropagation();
  }, false );
}
const resetButt = function (){
    onOff = true;
    canEdit = 0;
    userTimer = 25;
    seconds = 0;
    breakTime.childNodes[1].textContent = 5;
    clockTime.childNodes[1].textContent = 25;
    setTime();
}
const changeLength = function(clickedItem, itemParent){ //allows user to edit time
  var numberArea = document.querySelector('.' + itemParent).childNodes[1];
  if(clickedItem === "minus"){
      numberArea.textContent = numberArea.textContent - 1;
      } else {
        numberArea.textContent = Number(numberArea.textContent) + 1;
      }
    if((itemParent === "clock_time" && onOff !== false) && (canEdit === 0)){
      userTimer = Number(numberArea.textContent);
      clock.textContent = numberArea.textContent;
    }
    setTime();
}
const countDown = function(){ //runs timer
  if(canEdit === 0){ //to limit user edit ability after starting timer
    canEdit++;
  }
  if (onOff){ //this turns the timer on and off.
    onOff = false;
  } else {
    onOff = true;
  }
  var myTimer = setInterval( () => {
    if(onOff){
      clearInterval(myTimer);
    } else if (userTimer === 1) {
      userTimer = 0;
    } else if((userTimer <= 0 && seconds <= 0) && rest){ //User is in break mode
      userTimer = breakTime.childNodes[1].textContent;
      userTimer--;
      seconds = 59;
      rest = false;
    } else if ((userTimer <= 0 && seconds <= 0) && !rest){ //user is on Timer mode
      userTimer = clockTime.childNodes[1].textContent;
      userTimer--;
      rest = true;
      seconds = 59;
    } else if (seconds <= 0 && userTimer > 0) {
      userTimer--;
      seconds = 59;
    } else {
      seconds--;
    }
    setTime();
  }, 1000);
}
const setTime = function(){
  clock.textContent = (seconds < 10) ? userTimer+":0"+seconds : userTimer+":"+seconds;
}

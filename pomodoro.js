var a = 25, b = 10, c = true, rest = true, onOff = 0;
var userTimer = 2, userBreak = 3;
var clock = document.querySelector('.clock');
var breakTime = document.querySelector('.break_time');
var clockTime = document.querySelector('.clock_time');

///when you change the timer length, it reverts to 25 after starting the countdown

window.onload = () => {
console.log(290/60);

  clock.textContent = a;
  //clock.addEventListener("click", countDown);
  document.querySelector('.container').addEventListener('click', function(e){
    // if(counter === 0){
    //   console.log("hi");
    //   counter++;
    // }
  //  console.log(counter);
    if (e.target !== e.currentTarget){
      //console.log(e.target.id);
      var clickedItem = e.target.className;
      var itemParent = e.target.parentNode.className;
    //  console.log(e.target.childNodes);
      if (clickedItem === 'clock'){
        countDown();
      } else {
        changeLength(clickedItem, itemParent);
      }
    }
    e.stopPropagation();
  }, false );
}

const changeLength = function(clickedItem, itemParent){
  var numberArea = document.querySelector('.' + itemParent).childNodes[1];
    if(clickedItem === "minus"){
      numberArea.textContent = numberArea.textContent - 1;
      } else {
        numberArea.textContent = Number(numberArea.textContent) + 1;
      }

    if((itemParent === "clock_time" && c !== false) && (onOff === 0)){
      userTimer = Number(numberArea.textContent);
      clock.textContent = numberArea.textContent;
    }
  //document.querySelector('.' + itemParent).childNodes[1].textContent = "hi";
/* i think we need to get a function to split the id apart
  and then we can do for example -> first find minus, then take the second
  half of the id that will specify which div to subtract from?
*/

}

const countDown = function(){
  console.log(onOff + "hi");
  if(onOff === 0){
    console.log("hi");
    onOff++;
  }

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
      a = document.querySelector('.break_time').childNodes[1].textContent;
      clock.textContent = a--;
      rest = false;
    }
    else if (a < 0 || c){ //user is on Timer mode
      a = userTimer;
      clock.textContent = a--;
      rest = true;
      //clearInterval(myTimer);
    } else {
      /* so for example if you change a to userTimer it fixes it but now it can go negative
      and the function of switchging break and such is gliching so be more delicate
      in switching the variables

      i think A is perhaps a helpful neccesity */
      clock.textContent = a--;
    }
  }
}

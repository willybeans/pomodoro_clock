var a = 6, b = 10, c = true;
var userTimer = 2, userBreak = 3;
var clock = document.querySelector('.clock');
var breakTime = document.querySelector('.break_time');
var clockTime = document.querySelector('.clock_time');

window.onload = () => {
  clock.textContent = a;
  //clock.addEventListener("click", countDown);
  document.querySelector('.container').addEventListener('click', function(e){
    //console.log(e.target);
    if (e.target !== e.currentTarget){
      console.log(e.target.id);
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
  console.log(clickedItem);
  console.log(itemParent);
//  var test = document.querySelector('.' + itemParent).childNodes[1].className;
if(clickedItem === "minus"){
  numberArea.textContent = numberArea.textContent - 1;
} else {
numberArea.textContent = Number(numberArea.textContent) + 1;
}

if(itemParent === "clock_time"){
  clock.textContent = numberArea.textContent;
}
  //document.querySelector('.' + itemParent).childNodes[1].textContent = "hi";
/* i think we need to get a function to split the id apart
  and then we can do for example -> first find minus, then take the second
  half of the id that will specify which div to subtract from?
*/

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

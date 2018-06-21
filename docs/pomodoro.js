//clicking on "clock-container" still glitchy
//wont let me click on text anymore
/*you need to add a pause/go button unfortunately i guess... or maybe you can get away with mostly not changing much*/
var onOff = true, rest = true,
    canEdit = 0, userTimer = 25, seconds = 0;
const clock = document.querySelector('.clock'),
      breakTime = document.querySelector('.break_time'),
      clockTime = document.querySelector('.session_time'),
      audio = document.getElementById('myAudio');
/*still need to allow user to hit a "reset" button*/
window.onload = () => {
  setTime(); //dont forget this event was for .clock-container
  document.querySelector('.wrapper').addEventListener('click', function(e){
    if (e.target !== e.currentTarget){
      var clickedItem = e.target.className;
      var itemParent = e.target.parentNode.className;
      if(clickedItem === 'resetButt'){
        resetButt();
      } else if (clickedItem === 'clock-test'){
        countDown(clickedItem);
      } else {
        changeLength(clickedItem, itemParent);
      }
    }
    e.stopPropagation();
  }, false );
}
const resetButt = function (){
  audio.play();
    onOff = true;
    canEdit = 0;
    userTimer = 25;
    seconds = 0;
    breakTime.childNodes[3].textContent = 5;
    clockTime.childNodes[3].textContent = 25;
    setTime();
}
const changeLength = function(clickedItem, itemParent){ //allows user to edit time
  var numberArea = document.querySelector('.'+itemParent).childNodes[3];
  if(clickedItem === "minus"){
    if (numberArea.textContent > 1){
      numberArea.textContent = Number(numberArea.textContent) - 1;
    } else { alert("thats too short!")}
      } else if (clickedItem === "plus"){
           if (numberArea.textContent < 60){
              numberArea.textContent = Number(numberArea.textContent) + 1;
          } else { alert("thats too long!")}
      }
    if((itemParent === "session_time" && onOff !== false) && (canEdit === 0)){
      userTimer = Number(numberArea.textContent);
      clock.textContent = numberArea.textContent;
    }
    setTime();
}
const countDown = function(clickedItem){ //runs timer
  var clockColor =  document.querySelector('.' + clickedItem);
  if(canEdit === 0){ //to limit user edit ability after starting timer
    canEdit++;
  }
  if (onOff){ //this turns the timer on and off.
    onOff = false;//this is on
    clockColor.style.backgroundColor = "#ccff99";
  } else {
    onOff = true; //this is off
    clockColor.style.backgroundColor = "#ffcccc";
  }
  var myTimer = setInterval( () => {
    if(onOff){
      clearInterval(myTimer);
    } else if (userTimer == 1 && seconds == 0) {
      userTimer = 0;
      seconds = 59;
    } else if((userTimer <= 0 && seconds <= 0) && rest){ //User is in break mode
      userTimer = breakTime.childNodes[3].textContent;
      userTimer--;
      seconds = 59;
      rest = false;
    } else if ((userTimer <= 0 && seconds <= 0) && !rest){ //user is on Timer mode
      userTimer = clockTime.childNodes[3].textContent;
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
const setTime = function(){ //give 00:00 format to session clock
  let time = userTimer.toString();
  if( userTimer < 10 ){
    time = '0'+userTimer.toString()
  }
  clock.textContent = (seconds < 10) ? time+":0"+seconds : time+":"+seconds;
}



// var onOff = true, rest = true,
//     canEdit = 0, userTimer = 25, seconds = 0,
//     clock = document.querySelector('.clock');
//     breakTime = document.querySelector('.break_time');
//     clockTime = document.querySelector('.clock_time');
// /*still need to allow user to hit a "reset" button*/
// window.onload = () => {
//   setTime();
//   document.querySelector('.container').addEventListener('click', function(e){
//     if (e.target !== e.currentTarget){
//       var clickedItem = e.target.className;
//       var itemParent = e.target.parentNode.className;
//
//       if(clickedItem === 'resetButt'){
//         resetButt();
//       } else if (clickedItem === 'clock'){
//         countDown();
//       } else {
//         changeLength(clickedItem, itemParent);
//       }
//     }
//     e.stopPropagation();
//   }, false );
// }
// const resetButt = function (){
//     onOff = true;
//     canEdit = 0;
//     userTimer = 25;
//     seconds = 0;
//     breakTime.childNodes[1].textContent = 5;
//     clockTime.childNodes[1].textContent = 25;
//     setTime();
// }
// const changeLength = function(clickedItem, itemParent){ //allows user to edit time
//   var numberArea = document.querySelector('.' + itemParent).childNodes[1];
//   if(clickedItem === "minus"){
//       numberArea.textContent = numberArea.textContent - 1;
//       } else {
//         numberArea.textContent = Number(numberArea.textContent) + 1;
//       }
//     if((itemParent === "clock_time" && onOff !== false) && (canEdit === 0)){
//       userTimer = Number(numberArea.textContent);
//       clock.textContent = numberArea.textContent;
//     }
//     setTime();
// }
// const countDown = function(){ //runs timer
//   if(canEdit === 0){ //to limit user edit ability after starting timer
//     canEdit++;
//   }
//   if (onOff){ //this turns the timer on and off.
//     onOff = false;
//   } else {
//     onOff = true;
//   }
//   var myTimer = setInterval( () => {
//     if(onOff){
//       clearInterval(myTimer);
//     } else if (userTimer === 1) {
//       userTimer = 0;
//     } else if((userTimer <= 0 && seconds <= 0) && rest){ //User is in break mode
//       userTimer = breakTime.childNodes[1].textContent;
//       userTimer--;
//       seconds = 59;
//       rest = false;
//     } else if ((userTimer <= 0 && seconds <= 0) && !rest){ //user is on Timer mode
//       userTimer = clockTime.childNodes[1].textContent;
//       userTimer--;
//       rest = true;
//       seconds = 59;
//     } else if (seconds <= 0 && userTimer > 0) {
//       userTimer--;
//       seconds = 59;
//     } else {
//       seconds--;
//     }
//     setTime();
//   }, 1000);
// }
// const setTime = function(){
//   clock.textContent = (seconds < 10) ? userTimer+":0"+seconds : userTimer+":"+seconds;
// }
//
// /*
// var onOff = true, rest = true,
//     canEdit = 0, userTimer = 25, seconds = 0;
// const clock = document.querySelector('.clock'),
//       breakTime = document.querySelector('.break_time'),
//       clockTime = document.querySelector('.clock_time');
// still need to allow user to hit a "reset" button
//
//
// window.onload = () => {
//   setTime(); //dont forget this event was for .clock-container
//   document.querySelector('.wrapper').addEventListener('click', function(e){
//     if (e.target !== e.currentTarget){
//       var clickedItem = e.target.className;
//       var itemParent = e.target.parentNode.className;
//       if(clickedItem === 'resetButt'){
//         resetButt();
//       } else if (clickedItem === 'clock'){
//         countDown();
//       } else {
//         changeLength(clickedItem, itemParent);
//       }
//     }
//     e.stopPropagation();
//   }, false );
// }
// const resetButt = function (){
//   console.log("hi");
//     onOff = true;
//     canEdit = 0;
//     userTimer = 25;
//     seconds = 0;
//     breakTime.childNodes[3].textContent = 5;
//     clockTime.childNodes[3].textContent = 25;
//     setTime();
// }
// const changeLength = function(clickedItem, itemParent){ //allows user to edit time
//   var numberArea = document.querySelector('.'+itemParent).childNodes[3];
//   if(clickedItem === "minus"){
//       numberArea.textContent = numberArea.textContent - 1;
//       } else if (clickedItem === "plus") {
//         numberArea.textContent = Number(numberArea.textContent) + 1;
//       }
//     if((itemParent === "clock_time" && onOff !== false) && (canEdit === 0)){
//       userTimer = Number(numberArea.textContent);
//       clock.textContent = numberArea.textContent;
//     }
//     setTime();
// }
// const countDown = function(){ //runs timer
//   if(canEdit === 0){ //to limit user edit ability after starting timer
//     canEdit++;
//   }
//   if (onOff){ //this turns the timer on and off.
//     onOff = false;
//   } else {
//     onOff = true;
//   }
//   var myTimer = setInterval( () => {
//     if(onOff){
//       clearInterval(myTimer);
//     } else if (userTimer === 1) {
//       userTimer = 0;
//     } else if((userTimer <= 0 && seconds <= 0) && rest){ //User is in break mode
//       userTimer = breakTime.childNodes[1].textContent;
//       userTimer--;
//       seconds = 59;
//       rest = false;
//     } else if ((userTimer <= 0 && seconds <= 0) && !rest){ //user is on Timer mode
//       userTimer = clockTime.childNodes[1].textContent;
//       userTimer--;
//       rest = true;
//       seconds = 59;
//     } else if (seconds <= 0 && userTimer > 0) {
//       userTimer--;
//       seconds = 59;
//     } else {
//       seconds--;
//     }
//     setTime();
//   }, 1000);
// }
// const setTime = function(){
//   clock.textContent = (seconds < 10) ? userTimer+":0"+seconds : userTimer+":"+seconds;
// }
//
// */
//
// /*
// =placement($w, $h, $l, $t, $z)
//   position: absolute
//   width: $w
//   height: $h
//   left: $l
//   top: $t
//   z-index: $z
// %borders-solid
//   border: 2px solid black
// %borders-toast
//   border: 1.5px solid #554011
// %toast-curve
//   border-radius: 50%
// %toast-color
//   background: #FFFEDF
// %crust-color
//   background: #C78F55
// %jelly-border
//   border: 3px solid #88C8EE
// %jelly-color
//   background: #A4D0ED
// %shine
//   background: #E1E7EB
// body
//   font-family: 'Reenie Beanie', cursive
//   font-size: 4em
//   text-align: center
//   background: black
// .wrapper
//   position: relative
//   margin: auto
//   display: block
//   margin-top: 1%
//   height: 600px
//   width: 800px
//   background: #476776
// .wall-outer
//   background: #7A8D9C
//   @extend %borders-solid
//   +placement(100%, 100%, 0, 0, 1)
//   margin: 1px
// .wall-inner-top
//   background: #476776
//   @extend %borders-solid
//   +placement(85%,60%,5%,5%,2)
// .wall-inner-bottom
//   background: #476776
//   border-left: 1px solid black
//   +placement(65%,25%,13%,70%,2)
//   transform: skewX(40deg)
// .wall-inner-bottom-copy
//   background: #476776
//   border-left: 1px solid black
//   +placement(95%,30%,5%,70%,1)
// .container
//   +placement(60%,60%,5%,6%,3)
// .toast-body-copy, .toast-curve-right-copy, .toast-curve-right, .toast-curve-left-copy, .toast-curve-left
//   @extend %toast-color
// .toast-curve-left, .toast-curve-left-copy, .toast-curve-right
//   @extend %toast-curve
// .toast-curve-left
//   @extend %borders-toast
//   +placement(50%,60%,5%,0%,4)
// .toast-curve-left-copy
//   +placement(48%,58%,8%,3%,4)
// .toast-curve-right
//   @extend %borders-toast
//   +placement(40%,70%,50%,0%,4)
//   transform: rotate(60deg)
// .toast-curve-right-copy
//   border-radius: 39%
//   +placement(38%,50%,40%,20%,4)
// .toast-body-copy
//   @extend %borders-toast
//   +placement(50%,55%,25%,40%,3)
//   border-radius: 5%
// .toast-crust-right
//   @extend %crust-color
//   border-left: solid 3px #6B5426
//   +placement(30%,45%,48%,8%,2)
//   transform: rotate(75deg)
//   border-radius: 20%
// .toast-crust-left
//   @extend %crust-color
//   border: solid 3px #6B5426
//   +placement(50%,60%,1%,2%,2)
//   border-radius: 50%
// .toast-crust-left-copy
//   @extend %crust-color
//   +placement(48%,58%,3%,5%,3)
//   border-radius: 50%
// .toast-crust-body
//   @extend %crust-color
//   border: solid 3px #6B5426
//   +placement(53%,55%,21%,41%,2)
//   border-radius: 5%
// .dots
//   background: #EBE6AF
//   border: 1px solid #EBE6AF
//   @extend %toast-curve
// #dot1
//   +placement(9%,9%,1%,30%,4)
// #dot2
//   +placement(6%,6%,12%,35%,4)
// #dot3
//   +placement(3%,3%,10%,45%,4)
// .jelly-kid-container
//   +placement(50%,60%,40%,30%,2)
// .jelly-bonnet
//   @extend %jelly-color
//   @extend %jelly-border
//   +placement(25%,15%,50%,-5%,2)
//   border-radius: 50%
// .jelly-bonnet-copy
//   @extend %jelly-color
//   +placement(24%,14%,51%,-3%,5)
//   border-radius: 50%
// #bonnet-shine-one
//   +placement(15%,60%,70%,-10%,2)
//   transform: rotate(-65deg)
// .jelly-head
//   @extend %jelly-color
//   @extend %jelly-border
//   +placement(65%,55%,28%,5%,4)
//   border-radius: 50%
// .jelly-face
//   +placement(80%,60%,10%,10%,2)
//   background: #CAE0ED
//   border-radius: 50%
// .jelly-face-left
//   +placement(60%,60%,5%,12%,2)
//   background: #CAE0ED
//   border-radius: 50%
// .jelly-face-right
//   +placement(60%,60%,35%,12%,2)
//   background: #CAE0ED
//   border-radius: 50%
// .eye-right
//   +placement(40%,70%,60%,15%,2)
//   background: #48C8FF
//   border-radius: 50%
// #eye-left-shine-one
//   +placement(30%,60%,50%,-5%,2)
//   transform: rotate(-60deg)
// #eye-left-shine-two
//   +placement(25%,25%,15%,60%,2)
// .eye-left
//   +placement(40%,70%,0%,15%,2)
//   background: #48C8FF
//   border-radius: 50%
// #eye-right-shine-one
//   +placement(30%,50%,50%,0%,2)
//   transform: rotate(-65deg)
// #eye-right-shine-two
//   +placement(25%,25%,15%,60%,2)
// .shine
//   background: #FBF6ED
//   border-radius: 50%
//   opacity: .7
// .mouth
//   +placement(5%,25%,35%,55%,4)
//   transform: rotate(-75deg)
// .lips
//   background: #CAE0ED
//   border: 2px solid #A4D0ED
//   +placement(100%,100%,0%,0%,2)
// .mouth-opening-lips
//   background: #CAE0ED
//   border: 2px solid #A4D0ED
//   +placement(100%,40%,0%,-25%,2)
//   border-radius: 50%
// .mouth-opening-lips-copy
//   background: #CAE0ED
//   +placement(90%,40%,15%,10%,3)
// .mouth-opening-bottom
//   background: #CAE0ED
//   +placement(105%,30%,0%,100%,2)
// .mouth-opening
//   background: #65C6FC
//   +placement(80%,30%,20%,-15%,4)
//   border-radius: 50%
// .jelly-body
//   @extend %jelly-border
//   @extend %jelly-color
//   +placement(40%,45%,40%,45%,2)
//   border-radius: 30%
// .jelly-body-copy-inner
//   @extend %jelly-color
//   +placement(35%,45%,45%,45%,6)
//   border-radius: 20%
// .jelly-body-right
//   @extend %jelly-color
//   @extend %jelly-border
//   +placement(37%,37%,50%,52%,3)
//   border-radius: 50%
// .jelly-body-left
//   @extend %jelly-color
//   @extend %jelly-border
//   +placement(37%,37%,31%,52%,3)
//   border-radius: 50%
// .arm-left
//   @extend %jelly-color
//   @extend %jelly-border
//   +placement(30%,5%,15%,52%,2)
//   border-radius: 30%
//   transform: rotate(45deg)
// .arm-left-copy
//   @extend %jelly-color
//   +placement(30%,5%,15%,52%,3)
//   border-radius: 30%
//   transform: rotate(45deg)
// .clock-container
//   +placement(80%,85%,10%,10%,5)
// .clock-test
//   +placement(50%,45%,25%,50%,3)
//   box-shadow: 10px 10px 5px grey
//   border-radius: 50%
// .clock
//   +placement(25%,25%,30%,25%,3)
//
// .break_time
//   +placement(50%,50%,0%,0%,3)
//   .title
//     +placement(100%,50%,0%,0%,3)
//   .title-name
//     +placement(100%,25%,0%,0%,3)
//   .title-length
//     +placement(100%,25%,0%,51%,3)
//   .numberArea
//     +placement(30%,45%,35%,60%,3)
//   .minus
//     +placement(30%,45%,10%,60%,3)
//   .plus
//     +placement(30%,45%,60%,60%,3)
// .clock_time
//   +placement(60%,50%,50%,0%,3)
//   .title
//     +placement(100%,50%,0%,0%,3)
//   .title-name
//     +placement(100%,25%,0%,0%,3)
//   .title-length
//     +placement(100%,25%,0%,51%,3)
//   .numberArea
//     +placement(30%,45%,35%,60%,3)
//   .minus
//     +placement(30%,45%,10%,60%,3)
//   .plus
//     +placement(30%,45%,60%,60%,3)
// .resetButt
//   +placement(150%,100%,-35%,0%,6)
//   .text
//     +placement(45%,45%,30%,25%,3)
//       &:hover
//       color: red
//
// */
//
// /*
// <div class="wrapper">
//   <div class="wall-outer">
//     <div class="wall-inner-top"></div>
//     <div class="wall-inner-bottom"></div>
//     <div class="wall-inner-bottom-copy"></div>
//   </div>
//   <div class="floor"></div>
//
//   <div class="jelly-kid-container">
//     <div class="jelly-bonnet"></div>
//     <div class="jelly-bonnet-copy">
//       <div class="shine" id="bonnet-shine-one"></div>
//     </div>
//     <div class="jelly-head-copy"></div>
//     <div class="jelly-head">
//       <div class="shine" id="head-one"></div>
//       <div class="shine" id="head-two"></div>
//       <div class="jelly-face-left"></div>
//       <div class="jelly-face-right"></div>
//       <div class="jelly-face">
//         <div class="eye-left">
//           <div class="shine" id="eye-left-shine-one"></div>
//           <div class="shine" id="eye-left-shine-two"></div>
//         </div>
//         <div class="eye-right">
//           <div class="shine" id="eye-right-shine-one"></div>
//           <div class="shine" id="eye-right-shine-two"></div>
//         </div>
//         <div class="mouth">
//           <div class="lips"></div>
//           <div class="mouth-opening"></div>
//           <div class="mouth-opening-lips"></div>
//           <div class="mouth-opening-lips-copy"></div>
//           <div class="mouth-opening-bottom"></div>
//         </div>
//       </div>
//     </div>
//
//     <div class="jelly-body-copy-inner">
//       <div class="resetButt">
//       <div class="text">reset</div>
//     </div>
//     </div>
//     <div class="jelly-body-left"></div>
//     <div class="jelly-body-right"></div>
//     <div class="arm-left"></div>
//     <div class="arm-left-copy"></div>
//     <div class="jelly-body">
//       <div class="shine" id="body-one"></div>
//       <div class="shine" id="body-two"></div>
//       <div class="arm-right"></div>
//       <div class="arm-right-copy"></div>
//       <div class="leg-left"></div>
//       <div class="leg-left-copy"></div>
//       <div class="leg-right"></div>
//       <div class="leg-right-copy"></div>
//     </div>
//   </div>
//
//   <div class="container" id="container">
//     <div class="toast-curve-left"></div>
//     <div class="toast-curve-left-copy">
//       <div class="dots" id=dot1></div>
//       <div class="dots" id=dot2></div>
//       <div class="dots" id=dot3></div>
//     </div>
//     <div class="toast-curve-right"></div>
//     <div class="toast-curve-right-copy"></div>
//     <div class="toast-crust-right"></div>
//     <div class="toast-crust-left"></div>
//     <div class="toast-crust-left-copy"></div>
//     <div class="toast-crust-body"></div>
//     <div class="toast-body-copy"></div>
//     <div class="clock-container">
//       <div class="clock-test">
//         <div class="clock" id="clock"></div>
//       </div>
//       <div id="test">
//         <div class="break_time">
//           <div class="title">
//             <div class="title-name">BREAK</div>
//             <div class="title-length">length</div>
//           </div>
//           <div class="numberArea">5</div>
//           <div class="minus" id="minus break breakMinus">-</div>
//           <div class="plus" id="plus break breakPlus">+</div>
//         </div>
//         <div class="clock_time">
//           <div class="title">
//             <div class="title-name">TIMER</div>
//             <div class="title-length">length</div>
//           </div>
//           <div class="numberArea">25</div>
//           <div class="minus" id="minus clock clockMinus">-</div>
//           <div class="plus" id="plus clock clockPlus">+</div>
//         </div>
//       </div>
//     </div>
//   </div>
//
// </div>
// */

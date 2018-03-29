var a = 6, b = 5, c = true;
var clock = document.querySelector('.clock');

window.onload = () => {
  clock.textContent = a;
  clock.addEventListener("click", countDown);
}

const countDown = function(){
  if (c){
    console.log("false");
    c = false;
  } else {
    console.log("true");
    c = true;
  }
  var myTimer = setInterval(counter, 1000);
  function counter() {
    if (a < 0 || c){
      clearInterval(myTimer);
    } else {
      clock.textContent = a--;
    }
  }
}

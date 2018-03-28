var a = 6, b = 5, c = true;
var clock = document.querySelector('.clock');

window.onload = () => {
  clock.textContent = a;
  countDown();
}

const countDown = function(){
  clock.onclick = () => {
    if (c) {
      console.log("if");
      var counter = setInterval(function(){
        console.log("none");
        clock.textContent = a--;
        c = false;
          if(a < 0) {
            clearInterval(counter);
            c = true;
          }
      }, 1000);
    } else {
      console.log("else");
      clearInterval(counter);
    }
  }
}

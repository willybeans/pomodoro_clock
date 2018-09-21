require("./style.scss");
//clicking on "clock-container" still glitchy
//wont let me click on text anymore
/*you need to add a pause/go button unfortunately i guess... or maybe you can get away with mostly not changing much*/
var onOff = true,
    rest = true,
    canEdit = 0,
    userTimer = 25,
    seconds = 0;
const clock = document.querySelector('.clock'),
    breakTime = document.querySelector('.break_time'),
    clockTime = document.querySelector('.session_time'),
    /*still need to allow user to hit a "reset" button*/
    window.onload = () => {
        setTime(); //dont forget this event was for .clock-container
        document.querySelector('.wrapper').addEventListener('click', function(e) {
            if (e.target !== e.currentTarget) {
                var clickedItem = e.target.className;
                var itemParent = e.target.parentNode.className;
                if (clickedItem === 'resetButt') {
                    resetButt();
                } else if (clickedItem === 'clock-test') {
                    countDown(clickedItem);
                } else {
                    changeLength(clickedItem, itemParent);
                }
            }
            e.stopPropagation();
        }, false);
    }
const resetButt = function() {
    onOff = true;
    canEdit = 0;
    userTimer = 25;
    seconds = 0;
    breakTime.childNodes[3].textContent = 5;
    clockTime.childNodes[3].textContent = 25;
    setTime();
}
const changeLength = function(clickedItem, itemParent) { //allows user to edit time
    var numberArea = document.querySelector('.' + itemParent).childNodes[3];
    if (clickedItem === "minus") {
        if (numberArea.textContent > 1) {
            numberArea.textContent = Number(numberArea.textContent) - 1;
        } else {
            alert("thats too short!")
        }
    } else if (clickedItem === "plus") {
        if (numberArea.textContent < 60) {
            numberArea.textContent = Number(numberArea.textContent) + 1;
        } else {
            alert("thats too long!")
        }
    }
    if ((itemParent === "session_time" && onOff !== false) && (canEdit === 0)) {
        userTimer = Number(numberArea.textContent);
        clock.textContent = numberArea.textContent;
    }
    setTime();
}
const countDown = function(clickedItem) { //runs timer
    var clockColor = document.querySelector('.' + clickedItem);
    if (canEdit === 0) { //to limit user edit ability after starting timer
        canEdit++;
    }
    if (onOff) { //this turns the timer on and off.
        onOff = false; //this is on
        clockColor.style.backgroundColor = "#ccff99";
    } else {
        onOff = true; //this is off
        clockColor.style.backgroundColor = "#ffcccc";
    }
    var myTimer = setInterval(() => {
        if (onOff) {
            clearInterval(myTimer);
        } else if (userTimer == 1 && seconds == 0) {
            userTimer = 0;
            seconds = 59;
        } else if ((userTimer <= 0 && seconds <= 0) && rest) { //User is in break mode
            userTimer = breakTime.childNodes[3].textContent;
            userTimer--;
            seconds = 59;
            rest = false;
        } else if ((userTimer <= 0 && seconds <= 0) && !rest) { //user is on Timer mode
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
const setTime = function() { //give 00:00 format to session clock
    let time = userTimer.toString();
    if (userTimer < 10) {
        time = '0' + userTimer.toString()
    }
    clock.textContent = (seconds < 10) ? time + ":0" + seconds : time + ":" + seconds;
}

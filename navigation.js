document.getElementById('android').style.top = '250px';
document.getElementById('android').style.left = '350px';
var el;
document.body.onkeydown = function (e) {
    el = document.getElementById('android');
    
    var KEYCODE_LEFT = 65;
    var KEYCODE_RIGHT = 68;
    var KEYCODE_UP = 87;
    var KEYCODE_DOWN = 83;    
    var KEYCODE_FIRE = 32;
    
    var screenHeight = window.screen.availHeight - 130;
    if (e.keyCode == KEYCODE_LEFT) {
        el.style.left = (parseInt(el.style.left) === 0)? parseInt(el.style.left) : (parseInt(el.style.left) - 10) + 'px' ;
        el.style.transform = "rotate(-90deg)";
    }
    else if (e.keyCode == KEYCODE_RIGHT) {
        el.style.left = (parseInt(el.style.left) === window.screen.availWidth -60)? parseInt(el.style.left) : (parseInt(el.style.left) + 10) + 'px';
        el.style.transform = "rotate(90deg)";
    }
    else if (e.keyCode == KEYCODE_UP) {
        el.style.top = (parseInt(el.style.top) === 0)? parseInt(el.style.top) : (parseInt(el.style.top) - 10) + 'px' ;
        el.style.transform = "rotate(0deg)";
    }
    else if (e.keyCode == KEYCODE_DOWN) {
        el.style.top = (parseInt(el.style.top) > screenHeight)? parseInt(el.style.top) : (parseInt(el.style.top) + 10) + 'px';
        el.style.transform = "rotate(180deg)";
    }
    else if (e.keyCode == KEYCODE_FIRE) {
        fire();
    }
}

function fire() {
    var fire = document.createElement("div");
    fire.id = "fire";
    if (el.style.transform == "rotate(0deg)" || el.style.transform == '') {
        fire.style.top = parseInt(el.style.top) + 'px';
        fire.style.left = (parseInt(el.style.left) + 20) + 'px';
    } else if (el.style.transform == "rotate(-90deg)") {
        fire.style.top = (parseInt(el.style.top) + 27) + 'px';
        fire.style.left = (parseInt(el.style.left) - 6) + 'px';
    } else if (el.style.transform == "rotate(180deg)") {
        fire.style.top = (parseInt(el.style.top) + 55) + 'px';
        fire.style.left = (parseInt(el.style.left) + 19) + 'px';
    } else if (el.style.transform == "rotate(90deg)") {
        fire.style.top = (parseInt(el.style.top) + 26) + 'px';
        fire.style.left = (parseInt(el.style.left) + 46) + 'px';
    }
    document.body.appendChild(fire);
    var direction = el.style.transform;
    var set = setInterval(fireFly, 20);

    function fireFly(){
        if (parseInt(fire.style.left) < 0 || parseInt(fire.style.left) > window.screen.availWidth || parseInt(fire.style.top) < 0 || parseInt(fire.style.top) > window.screen.availHeight) {
            fire.remove();
            clearInterval(set);
        } else if (direction == "rotate(0deg)" || el.style.transform == '') {
            fire.style.top = (parseInt(fire.style.top) - 5) + 'px';
        } else if (direction == "rotate(180deg)") {
            fire.style.top = (parseInt(fire.style.top) + 5) + 'px';
        } else if (direction == "rotate(-90deg)") {
            fire.style.left = (parseInt(fire.style.left) - 5) + 'px';
        } else if (direction == "rotate(90deg)") {
            fire.style.left = (parseInt(fire.style.left) + 5) + 'px';
        }
    }
}

// var setApple = setInterval(apple,5000);
// function apple () {
//     var leftApplePosition = Math.floor(Math.random() * (window.screen.availWidth)) + 'px';
//     var apple = document.createElement("div");
//     apple.id = 'apple';
//     apple.style.top = '0px';
//     apple.style.left = leftApplePosition;
//     document.body.appendChild(apple);

//     var setAppleMove = setInterval(appleFly, 500);

//     function appleFly() {
//         if (parseInt(apple.style.top) < 0 || parseInt(apple.style.top) > window.screen.availHeight-110) {
//             apple.remove();
//             clearInterval(setApple);
//         }else {
//             apple.style.top = (parseInt(apple.style.top) + 10) + 'px';
//         }
//     }
// }



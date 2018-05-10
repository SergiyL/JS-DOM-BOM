
var defaultLanguage = '';
if (localStorage.getItem("language") === null) {
    defaultLanguage = 'ua';
    document.querySelector('input[value='+defaultLanguage+']').checked = true;
} else {
    defaultLanguage = localStorage.getItem("language");
    document.querySelector('input[value='+defaultLanguage+']').checked = true;    
}


var langEls = document.getElementsByClassName('lang-' + defaultLanguage)[0];

langEls.style.display = "block";

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
    return defaultLanguage;
}

var radios = document.querySelector('form');
radios.addEventListener('change', toLocalStorage);

function toLocalStorage () {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            localStorage.setItem("language",radios[i].value);
        }
    }
}

function reloadLanguage() {
    alert('поточна мова сторінки ' + localStorage.getItem("language"));
    location.reload();
}

var $save = document.querySelector('.btn');
console.log($save);
$save.addEventListener('click', reloadLanguage);

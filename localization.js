// var applyLanguage = function (lang) {
// 	alert('now language is: ' + lang);
// }

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
    return defaultLanguage;
}
var radios = document.getElementsByName('lang');
for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        localStorage.setItem("language", radios[0].value);
    }
}

// var currentLang = location.hash;
// var langEls = document.getElementsByClassName('lang-' + currentLang);

// //////////////////////////////////////////////////

// var currentLang = getCurrentLanguage();
// var langEls = document.getElementsByClassName('lang-' + currentLang);

// for (var i=0; i<langEls.length; i++) {
// 	var langEl = langEls[i];
	
// //  langEl.style.display = 'inline';
//     langEl.classList.add('visible');
// }

// // $<prefix> == DOMElement
// var $save = document.querySelector('html body button#save')

// $save.addEventListener('click', function(){
// 	alert(1);
// });
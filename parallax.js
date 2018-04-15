

$(window).bind('scroll',function (e) {
    parallax();
}) 

function parallax() {
    console.log(document.body.scrollTop);
    var $parallax = document.getElementById('parallax');
    var posY =  window.pageYOffset;
    $parallax.style.backgroundPosition = '0px '+ posY * 0.5 +'px';
}

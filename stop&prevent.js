var onClick = function (e) {
    var $el = e.target;
    e.stopPropagation();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el.style.backgroundColor = '';
	
}

document.body.onclick = onClick;
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;
function createForm() {
    let form = document.createElement('form');
        form.setAttribute("name", "login");
        form.setAttribute("action", "google.com");

    let first = '<input type="text" name="age" placeholder="age">';
    let second = '<input type="text" name="username" placeholder="username">';
    let third = '<input type="text" name="date" placeholder="date">';
    let submit = '<input type="submit" value="Validate Me" onclick="validation()">';

    document.body.appendChild(form);
    form.insertAdjacentHTML('afterbegin', first);
    form.insertAdjacentHTML('beforeend', second);
    form.insertAdjacentHTML('beforeend', third);
    form.insertAdjacentHTML('beforeend', submit);

    submit.addEventListener("onclick", validation);

}
createForm();

function validation() {
    let age = document.getElementsByName("age")[0].value;
    if (age < 0 || age.includes(' ') || !Number.isInteger(parseInt(age))) {
        alert("input age is not valid");
    }

    let username = document.getElementsByName("username")[0].value;
    if (username.substring(0,4) != "user") {
        alert("input username is not valid");
    }
    let date = document.getElementsByName("date")[0].value;
    let today = new Date(); 
    let mm = ((today.getMonth()+1) < 10)? '0' + (today.getMonth()+1) : (today.getMonth()+1);
    let current = today.getDate() + '/' + mm + '/' + today.getFullYear();
    if (date !== current) {
        alert("input date is not valid")
    }
}

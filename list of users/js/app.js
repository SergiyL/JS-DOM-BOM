// let ul = document.createElement("ul");
// ul.setAttribute("class", "employeeList");

// let li = "<li></li>";
// let firstName = '<span class="employeeFirstName">John</span>';
// //let firstName = '<input type="text" name="age" placeholder="age">';
// let lastName = '<span class="employeeLastName">Doe</span>';
// let salary = '<span class="employeeSalary">$ 1000</span>';
// let position = '<span class="employeePosition">Manager</span>';
// let button = '<button class="addEmployee">Add New emplyee</button>';

// document.body.appendChild(ul);
// ul.insertAdjacentHTML("afterbegin", li);
// li.insertAdjacentHTML("afterbegin", firstName);

function createForm() {
    let form = document.createElement('form');
        form.setAttribute("name", "login");
        form.setAttribute("action", "google.com");

    let first = '<input type="text" name="age" placeholder="first name">';
    let second = '<input type="text" name="username" placeholder="last name">';
    let third = '<input type="text" name="date" placeholder="salary">';
    let fourth = '<input type="text" name="date" placeholder="position">';
    let submit = '<input type="submit" value="Add New employee">';

    document.body.appendChild(form);
    form.insertAdjacentHTML('afterbegin', first);
    form.insertAdjacentHTML('beforeend', second);
    form.insertAdjacentHTML('beforeend', third);
    form.insertAdjacentHTML('beforeend', fourth);
    form.insertAdjacentHTML('beforeend', submit);

    submit.addEventListener("click", addingEmployee);
}
createForm();

function addingEmployee () {

}
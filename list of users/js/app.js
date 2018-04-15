let ul = document.createElement("ul");
ul.setAttribute("class", "employeeList");

let li = "<li></li>";
let firstName = '<span class="employeeFirstName">John</span>';
//let firstName = '<input type="text" name="age" placeholder="age">';
let lastName = '<span class="employeeLastName">Doe</span>';
let salary = '<span class="employeeSalary">$ 1000</span>';
let position = '<span class="employeePosition">Manager</span>';
let button = '<button class="addEmployee">Add New emplyee</button>';

document.body.appendChild(ul);
ul.insertAdjacentHTML("afterbegin", li);
li.insertAdjacentHTML("afterbegin", firstName);

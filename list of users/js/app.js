function createForm() {
    var form = '<form></form>';
    let first = '<input type="text" name="firstName" placeholder="first name">';
    let firstAlert = '<p id="firstAlert"></p>';
    let second = '<input type="text" name="lastName" placeholder="last name">';
    let secondAlert = '<p id="secondAlert"></p>';    
    let third = '<input type="text" name="salary" placeholder="salary">';
    let thirdAlert = '<p id="thirdAlert"></p>';    
    let fourth = '<input type="text" name="position" placeholder="position">';
    let fourthAlert = '<p id="fourthAlert"></p>';    
    let submit = '<button type="button" class=" btn btn-success addEmployee">Add New employee</button><br>';
    let fifth = '<input type="number" name="limit" placeholder="employees limit"><br>';
    let submitLimit = '<button type="button" class="btn btn-primary addLimit">Set the limit</button><br>';
    

    $('body').append(form);
    $('form').append(first);
    $('form').append(firstAlert);
    $('form').append(second);
    $('form').append(secondAlert);
    $('form').append(third);
    $('form').append(thirdAlert);
    $('form').append(fourth);
    $('form').append(fourthAlert);
    $('form').append(submit);  
    $('form').append(fifth);
    $('form').append(submitLimit);
    
    

    $('.addEmployee').click(addingEmployee); 
    $('.addLimit').click(settingLimit);
}
createForm();

function settingLimit () {
    localStorage.setItem("limit", $('input[name="limit"]').val());
}

///////////////////////////////////////////////////////////////////

var listOfEmployees = ['0'];
var limit = 0;
var salarySum = 0;
if (localStorage.getItem('limit') === '') {
    limit = 10;
} else {
    limit = localStorage.getItem('limit');
}


function addingEmployee () {
    var ul = '<ul class="employeeList"></ul>';
    var li = '<li></li>';
    let firstName = '<span class="employeeFirstName"></span>';
    let lastName = '<span class="employeeLastName"></span>';
    let salary = '<span class="employeeSalary"></span>';
    let position = '<span class="employeePosition"></span>';

    if($('input[name="firstName"]').val() == ''){
        $('#firstAlert').html('поле не повинне бути порожнім');
    } else if (listOfEmployees.length >= limit){
        alert("ліміт працівників перевищено");
    } else if($('input[name="lastName"]').val() == '') {
        $('#secondAlert').html('поле не повинне бути порожнім');        
    } else if(listOfEmployees.includes($('input[name="firstName"]').val() + ' ' + $('input[name="lastName"]').val())){
        alert("працівник з таким іменем вже присутній");
    } else if($('input[name="salary"]').val() == '') {
        $('#thirdAlert').html('поле не повинне бути порожнім');        
    } else if(isNaN(parseInt($('input[name="salary"]').val()))) {
        $('#thirdAlert').html('вказуйте зарплату цифрами');
    } else if (Math.floor(salarySum/listOfEmployees.length-1) >= 2000) {
        alert ("додавання нових працівників заблоковано. середня зарплата досягла максимуму в $2000")
    } else if($('input[name="position"]').val() == '') {
        $('#fourthAlert').html('поле не повинне бути порожнім');        
    } else {
        listOfEmployees.push($('input[name="firstName"]').val() + ' ' + $('input[name="lastName"]').val());
        salarySum += parseInt($('input[name="salary"]').val());
        $('body').append(ul);
        $('ul').append(li);

        $('li').append(firstName);
        $('span[class="employeeFirstName"]').html($('input[name="firstName"]').val() + ' ');
        
        $('li').append(lastName);
        $('span[class="employeeLastName"]').html($('input[name="lastName"]').val() + ' ');

        $('li').append(salary);
        $('span[class="employeeSalary"]').html('$ ' + $('input[name="salary"]').val() + ' ');
        
        $('li').append(position);
        $('span[class="employeePosition"]').html($('input[name="position"]').val());
        
    }
}


// Write the function That adds a new employee to the list (using Prompt or html input elements on your own)
// Create the field that will indicate number of employees, and average salary after each entry of new row
// Disallow adding new employees when avg. salary reaches $ 2000
// When Adding Employee, check existing employees first name/last name, disallow duplicates


    //     
    //     quantityOfEmployees.push($('input[name="firstName"]').val());
    //     
    //     
    //     
    
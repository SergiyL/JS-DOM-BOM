
var listOfEmployees = [];
console.log(typeof listOfEmployees.length);
var limit = 10;
var salarySum = 0;
console.log(typeof salarySum);
if (localStorage.getItem('limit') == null) {
    limit = 10;
} else {
    limit = localStorage.getItem('limit');
}

function createForm() {
    var form = $('<form>');
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
    var ul = '<ul class="employeeList"></ul>';
    var employeesNumber = '<span class="employeesNumber">кількість працівників: 0</span><br>';
    var averageSalary = '<span class="averageSalary">середня зарплата: 0</span><br>';
    var employeesLimit = '<span class="employeesLimit"></span>'
    

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
    $('body').append(ul);
    $('body').append(employeesNumber);
    $('body').append(averageSalary);
    $('body').append(employeesLimit);

    $('.employeesLimit').html('поточний ліміт працівників: ' + limit)

    $('.addEmployee').click(addingEmployee); 
    $('.addLimit').click(settingLimit);

}
createForm();

function settingLimit () {
    localStorage.setItem("limit", $('input[name="limit"]').val());
    limit = localStorage.getItem("limit");
    $('.employeesLimit').html('поточний ліміт працівників: ' + localStorage.getItem("limit"))
}

///////////////////////////////////////////////////////////////////

function addingEmployee () {

    var li = '<li></li>';
    let firstName = '<span class="employeeFirstName"></span>';
    let lastName = '<span class="employeeLastName"></span>';
    let salary = '<span class="employeeSalary"></span>';
    let position = '<span class="employeePosition"></span>';
    var user = {
        firstName: $('input[name="firstName"]').val(),
        lastName: $('input[name="lastName"]').val(),
        salary: '$' + $('input[name="salary"]').val(),
        position: $('input[name="position"]').val()
    }
    
    
    
    if(user.firstName == ''){
        $('#firstAlert').html('поле не повинне бути порожнім');
    } else if (listOfEmployees.length == limit){
        alert("ліміт працівників перевищено");
    } else if(user.lastName == '') {
        $('#secondAlert').html('поле не повинне бути порожнім');        
    } else if(listOfEmployees.includes(user.firstName + ' ' + user.lastName)){
        alert("працівник з таким іменем вже присутній");
    } else if(user.salary == '') {
        $('#thirdAlert').html('поле не повинне бути порожнім');        
    } else if (Math.floor(salarySum/listOfEmployees.length) >= 2000) {
        alert ("додавання нових працівників заблоковано. середня зарплата досягла максимуму в $2000")
    } else if(user.position == '') {
        $('#fourthAlert').html('поле не повинне бути порожнім');        
    } else {

        salarySum += parseInt(user.salary.substring(1, user.salary.length));
        listOfEmployees.push(user.firstName +' '+ user.lastName);
        var employeesData = [];
        employeesData.push(Object.values(user).join(' '));
        var $list = employeesData.map(function(item){
            return '<li>' + item + '</li>';
        });
        
        $('ul').append($list);

        user.firstName = '';
    }
    $('.employeesNumber').html('кількість працівників: ' + listOfEmployees.length);
    $('.averageSalary').html('середня зарплата: ' + ((listOfEmployees.length == 0)? '0': Math.round(salarySum/listOfEmployees.length * 100)/100));
    
}

    
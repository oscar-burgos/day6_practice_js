// Variables to be assigned value
var firstName
var middleName
var lastName

// Click event listener for button 1
var btn1 = document.getElementById('first').addEventListener('click', function(event) {
  getUserName(event.target.id);
})

// Click event listener for button 2
var btn2 = document.getElementById('middle').addEventListener('click', function(event) {
  getUserName(event.target.id);
})

// Click event listener for button 3
var btn3 = document.getElementById('last').addEventListener('click', function(event) {
  getUserName(event.target.id);
})

// Function that capitalizes the names
function getUserName(btnId) {
    name = prompt('What is your ' + btnId + ' name?')
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    if(btnId === 'first') {
      firstName = name;
    }
    else if (btnId === 'middle') {
      middleName = name;
    }
    else {
      lastName = name;
    }
    if(firstName && middleName && lastName) {
      alert('Your full name is ' + firstName + ' ' + middleName + ' ' + lastName);
    }
}




/*var names = [];

// Button 1
var btn1 = document.getElementById('but1');
btn1.addEventListener('click', function() {
  var firstName = prompt('What is your first name?');
  names.push(getUserName(firstName));
})

// Button 2
var btn2 = document.getElementsByTagName('button')[1];
btn2.addEventListener('click', function() {
  var midName = prompt('What is your middle name?');
  names.push(getUserName(midName));
})

// Button 3
var btn3 = document.querySelector('ul li:last-child button');
btn3.addEventListener('click', function() {
  var lastName = prompt('What is your lastName');
  names.push(getUserName(lastName));
})

// Name altering function
function getUserName(name) {
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}

console.log(names);
console.log(names[1]);*/


//-----------------------------------

/*
// Button 1
var btn1 = document.getElementById('but1');
btn1.addEventListener('click', getFirstName);
function getFirstName() {
    var name = prompt('what is your first name?')
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}



// Button 2
var btn2 = document.getElementsByTagName('button')[1];
function getMiddleName() {
    var name = prompt('what is your middle name?')
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}

btn2.addEventListener('click', getMiddleName);

// Button 3
var btn3 = document.querySelector('ul li:last-child button');
function getLastName() {
    var name = prompt('what is your last name?')
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}

btn3.addEventListener('click', getLastName);

/*if (getFirstName() && getMiddleName() && getLastName()) {
  alert(getFirstName(name) + " " + getLastName(name) + " " + getLastName(name));
}
else {
  alert('lsjfl')
}*/

/*console.log(getFirstName());
console.log(getMiddleName());
console.log(getLastName());*/

//alert('User full name is ' + firstName + ' ' + midName + ' ' + lastName);

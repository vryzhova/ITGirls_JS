const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
const fullName = document.getElementById('fullName').value;
const trimName = fullName.trim();
const clearName = trimName.toLowerCase();
let names =  clearName.split(" ");

//lastName of user
let lastName = (names[0]);
let lastName1 = lastName.slice(0,1);
let lastName2 = lastName1.toUpperCase();
lastName = lastName2 +  lastName.slice(1,lastName.length);
document.querySelector('.lastName').textContent = 'Фамилия: ' + lastName ;

//Name
let firstName = (names[1]);
let firstName1 = firstName.slice(0,1);
let firstName2 = firstName1.toUpperCase();
firstName = firstName2 +  firstName.slice(1,firstName.length);
document.querySelector('.firstName').textContent = 'Имя: ' + firstName;



//Patronymic
let patroName = (names[2]);
let patroName1 = patroName.slice(0,1);
let patroName2 = patroName1.toUpperCase();
patroName = patroName2 +  patroName.slice(1,patroName.length);
document.querySelector('.patro').textContent = 'Отчество: ' + patroName;



})
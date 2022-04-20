let tasks  = [];
btn = document.querySelector('.add_btn');
const noteBlock = document.getElementById('notes');
const noteText = document.getElementById('comment_note');

document.addEventListener("DOMContentLoaded", function(){
    loadNotes();
    generateNotes();
})
// Смена класс для завершенных задач
function finishTask(sender){
    sender.parentElement.classList.toggle("done");
    
}

// добавление задачи в лист и сохранение 
function addTask() {
    tasks.push(noteText.value);
    generateNotes();
    saveNotes();
}
//функция сохраняющая в local storage
function saveNotes() {
    localStorage.setItem('notes',JSON.stringify(tasks));
}
// функция загрузки из local storage
function loadNotes() {
    tasks = JSON.parse(localStorage.getItem('notes')) || [];
}
// создание задачи
function generateNotes() {
    let optionString = "";
    for (let task of tasks){
        optionString += `<div  class= "note"><input type="checkbox" onchange="finishTask(this)"> ${task} <button class="delete btn btn-outline-danger">Удалить</button></div>`;
        }
        noteBlock.innerHTML = optionString;

}
function deleteNote() {

}

btn.addEventListener('click', function () {
    addTask();
})
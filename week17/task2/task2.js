const btn = document.querySelector('.btn');
let comments =['hi','hello'];

document.addEventListener("DOMContentLoaded",function(){
    generateComments()
})

function checkSpam(){
    const text = document.querySelector('.comment_area').value;
    let newText = text.replace(/viagra/gi || /xxx/gi , '***');
    comments.push(newText);
}

function generateComments() {
    let optionString = "";
    for (let comment of comments){
    optionString += `<div class= "comment">${comment}</div>`;
    }
    document.querySelector('.comments').innerHTML = optionString;
}

btn.addEventListener('click', function(){
    const text = document.querySelector('.comment_area').value;
    console.log(comments);
    checkSpam();
    generateComments();
})

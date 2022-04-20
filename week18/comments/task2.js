let comments =[];

const btn = document.querySelector('.btn');
const commentText = document.getElementById("comment_text")
const commentAuthor = document.getElementById("comment_author")
const commentBlock = document.getElementById("comments");
const authorImg = document.getElementById("user_img");



function createComment() {
    let text = commentText.value;
    let author = commentAuthor.value;
    let img = authorImg.value;
    comments.push({text,author,img});
    renderComments();
    saveComments();
    saveImg();

}

function renderComments() {
    let optionString = "";
    for (let comment of comments){
        optionString += `<div  class= "comment"><img class="avatar" src="${comment.img}">${comment.author}: ${comment.text}</div>`;
        }
        commentBlock.innerHTML = optionString;
}

function saveComments() {
    localStorage.setItem('comments',JSON.stringify(comments))
}
function loadComments() {
    comments = JSON.parse(localStorage.getItem('comments')) || [];
}
function saveName() {
        localStorage.setItem('name', commentAuthor.value);
    
}


function saveImg() {
    localStorage.setItem('img', authorImg.value);

}
function loadImg() {
    let avatar = localStorage.getItem('img');
    authorImg.value =  avatar;
    
}


function loadName() {
    let name = localStorage.getItem('name');
    commentAuthor.value = name;
    
}

document.addEventListener("DOMContentLoaded",function(){
    loadName();
    loadComments();
    loadImg();
    renderComments();
})
commentAuthor.addEventListener("change",saveName)
function checkSpam(){
    const text = document.querySelector('.comment_area').value;
    let newText = text.replace(/ххх|xxx|viagra/gi, "***");
    comments.push(newText);
}



btn.addEventListener('click', createComment)


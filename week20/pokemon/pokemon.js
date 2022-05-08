let url = 'https://favqs.com/api/qotd'

document.addEventListener("DOMContentLoaded",function(event){
    getRick()
})

function getRick(){
    fetch(url).then((response)=> response.json()).then((el)=>{
        document.querySelector('.quote').textContent = `${el.quote.body}`;
        document.querySelector('.author').textContent = `${el.quote.author}`;
    })
}
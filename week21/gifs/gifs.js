function searchMe() {
    let parametr = document.getElementById('parametr').value;
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=y7kKrsHMbSXOOJZMsQl7qkVH72SxVwil&&limit=5&&q='
    fetch(url + parametr)
    .then(response => response.json())
    .then(gifs => {
        let items =  gifs;
        let gifsContent = "";
        for(let i = 0;  i < 5 ; i ++) {
            gifsContent += `<div class="gifs">
            <img src="${items.data[i].images.original.url}>"
            </div>`
        }
        document.querySelector('.container').innerHTML = gifsContent;
    })

}
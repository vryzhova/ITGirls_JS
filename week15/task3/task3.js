(() => {
const select = document.getElementById('breed')
const body = document.body
select.addEventListener('change', (event) => {
    // console.log({body, target: event.target});
    // console.log({value: event.target.value});
    switch (event.target.value) {
        case 'none' : 
            body.classList.add('none1'); break;

        case 'pink' : 
            body.classList.add('pink1'); break;
        
        case 'red' : 
            body.classList.add('red1'); break;

        case 'yellow' : 
            body.classList.add('yellow1'); break;

        case 'blue' : 
            body.classList.add('blue1'); break;
    }
})
})()

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const marka = document.querySelector('.marka').value;
    const damages = document.querySelectorAll('#damage');
    const services = document.getElementsByName('typeServ1');
    const mileage = Number(document.querySelector('#mileage').value);
    document.querySelector('.result').innerHTML = "";
    let sum = 0;

    if ( marka === 'mazda') {
        sum += 1000000;
    }else if ( marka === 'lada'){
        sum += 900000;
    }else {
        sum += 1100000;
    }
    
    if(mileage < 100000 && mileage > 0 ){
        sum += 100000;
    }else if (mileage < 400000){
        sum += 50000;
    }else {
        sum += 25000;
    }

    for(let damage of damages) {
        if(damage.checked) {
            sum -= 10000;
        }
    }
    let val;
    for(let service of services) {
        if (service.checked) {
            val = service.value;
        }
    }
    
    switch(val) {
        case '1': sum += 50000;
        break;

        case '2' : sum += 30000;
        break;
        
        case '3': sum += 20000;
        break;

        case '4': sum += 40000;
        break;
    }

    document.querySelector('.result').innerHTML += 'Окончательная стоимость: ' + sum; 
})
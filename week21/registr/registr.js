let errors = [];
document.querySelector('.error').innerHTML = "";
function checkValidity(input) {
    let validity = input.validity;

    if (validity.typeMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    
	if (validity.rangeOverflow) 
		{ let max = input.max;
			errors.push('Максимальное значение не может быть больше чем ' + max); }
    
	if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('Минимальное значение не может быть больше чем ' + min); }
    if (validity.valueMissing) {
        errors.push('Отсутствует обязательное значение');
    }
	
}



subButton.onclick = function checkAll(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll("input");

		
    for (let input of inputs) {
        checkValidity(input);
    }

    let errorDiv = document.querySelector('.error');
    errorDiv.innerHTML = errors.join('. \n');

    let user = {
        name : document.getElementById('firstName').value,
        surname : document.getElementById('lastName').value,
        email: document.getElementById('emailAddress').value
    }
    fetch("https://httpbin.org/post ",{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'},
    }).then(response => response.json()).then(user => {
        console.log(user);
    }).catch(error => console.log(error))
}

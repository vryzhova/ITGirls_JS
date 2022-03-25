let result;

function sum()  {
    let a = Number(document.getElementById('num1').value);
let b = Number(document.getElementById('num2').value);
    result = a + b; 
    document.getElementById('result').textContent = result;
}
function minus()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    result = a - b;
    document.getElementById('result').textContent = result;
}
function del()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    if (b !== 0) {
        result = a / b;
        document.getElementById('result').textContent = result;
    } else {
        alert('На ноль делить нельзя!');
    }
    
}
function multi()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    result = a * b;
    document.getElementById('result').textContent  = result;
}



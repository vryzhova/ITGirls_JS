let result;
class Calculator {
    static sum() {
        let a = Number(document.getElementById('num1').value);
        let b = Number(document.getElementById('num2').value);
        result = a + b; 
        document.getElementById('result').textContent = result;
    }

    static minus() {
        let a = Number(document.getElementById('num1').value);
        let b = Number(document.getElementById('num2').value);
        result = a - b;
        document.getElementById('result').textContent = result;
    }

    static del()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    if (b !== 0) {
        result = (a / b).toFixed(2);
        document.getElementById('result').textContent = result;
    } else {
        alert('На ноль делить нельзя!');
    }
    
}

    static multi()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    result = a * b;
    document.getElementById('result').textContent  = result;
}
}


function sum1(){
    Calculator.sum();
}
function minus1()
{
    Calculator.minus();
}

function del1()
{
    Calculator.del();
}

function multi1()
{
    Calculator.multi();
}



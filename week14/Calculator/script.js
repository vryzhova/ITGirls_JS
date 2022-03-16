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
    result = a / b;
    document.getElementById('result').textContent = result;
}
function multi()  {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    result = a * b;
    document.getElementById('result').textContent  = result;
}



// sum.onclick = function ()  {
//     let a = prompt("Первое число?");
//     let b = prompt("Второе число?");
//     alert(Number(a) +  Number(b));
// }
// minus.onclick = function ()  {
//     let a = prompt("Первое число?");
//     let b = prompt("Второе число?");
//     alert(Number(a) - Number(b));
// }
// del.onclick = function ()  {
//     let a = prompt("Первое число?");
//     let b = prompt("Второе число?");
//     alert(Number(a) / Number(b));
// }
// multi.onclick = function ()  {
//     let a = prompt("Первое число?");
//     let b = prompt("Второе число?");
//     alert(Number(a) *  Number(b));
// }
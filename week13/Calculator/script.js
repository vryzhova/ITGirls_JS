let sum = document.querySelector('.sum')
let minus = document.querySelector('.minus')
let del = document.querySelector('.del')
let multi = document.querySelector('.multi')

sum.onclick = function ()  {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(Number(a) +  Number(b));
}
minus.onclick = function ()  {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(Number(a) - Number(b));
}
del.onclick = function ()  {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(Number(a) / Number(b));
}
multi.onclick = function ()  {
    let a = prompt("Первое число?");
    let b = prompt("Второе число?");
    alert(Number(a) *  Number(b));
}
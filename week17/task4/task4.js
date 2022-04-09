const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let arr = [];
    let sum = 0;
    let multi = 1;

    for (let i=0; i<10; i++) {
        arr.push( Math.floor(Math.random() * 21) - 10);
        sum += arr[i]; 
        multi *= arr[i];
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let middle = sum / arr.length;

    document.querySelector('.result').textContent = 'Массив: ' + arr;
    document.querySelector('.min').textContent = 'Минимальное значение: ' + min;
    document.querySelector('.max').textContent = 'Максимальное значение: ' + max;
    document.querySelector('.middle').textContent = 'Среднее значение: ' + middle;
    document.querySelector('.sum').textContent = 'Сумма: ' + sum;
    document.querySelector('.multi').textContent = 'Умножение ' + multi;
})
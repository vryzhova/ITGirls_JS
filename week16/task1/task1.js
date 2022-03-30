function sumInput() {
    let arr = [];
    let sum = 0;
    for (;;) {
        let value = +prompt("Введите число", '');
        if (!value ) break;
        arr.push(value); 
        sum += value;
    }
    alert('Отсортированный массив: ' + arr.sort() + ' ' + 'Сумма элементов: ' + sum );   
}
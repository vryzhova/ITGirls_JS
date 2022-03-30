function sumInput() {
    let arr = [];
    let sum = 0;
    for (;;) {
        let value = +prompt("Введите число", '');
        if (!value ) break;
        arr.push(value);
        arr.sort();
        console.log(arr)
        sum += value;
    }
    alert('Отсортированный массив: ' + arr.sort() + ' ' + 'Сумма элементов: ' + sum )

    
}

// let sum = 0;

// for(;;) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; 

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
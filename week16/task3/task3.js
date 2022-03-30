function first() {
    let arr = ['js', 'css', 'html'];
    alert('First element:' + ' ' + arr[0]);
}

function second() {
    let arr = [0, 1, false, 2, undefined, '', 3, null];
    let filterArray = arr.filter(el => el !== undefined && el !== '' && el !== null && el !== 0 && el !== false )
    alert(filterArray);
}

function third() {
    let arr = [[1,2], [1,2,3], [1,2,3,4]];
    let newArr = arr.findIndex(el => el.length > 3);
    alert(newArr);
    
}
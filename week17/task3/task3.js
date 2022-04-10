
let date = new Date()
function formatDate(date) {
    let diff = new Date() - date; 

    if (diff < 1000) { 
        alert( 'прямо сейчас' );
    }

    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        alert( sec + ' сек. назад');
    }

    let min = Math.floor(diff / 60000); 
    if (min < 60) {
        alert( min + ' мин. назад');
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    alert(d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':') );
}

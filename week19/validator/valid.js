class Validator {
    constructor(){}
    isEmail(str) {
        let email = str.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
        return email === null ? false : true;
    }

    isDomain(str) {
        return ((str.indexOf('.ru') !== -1) || (str.indexOf('.com') !== -1))
    }

    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
            }

    isPhone(str) {
        let phone = str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
            }
}

//стандартная вызывается вот так
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(921)123-45-67')); //тут используем формат своей страны


class ValidatorStatic {

    static isEmail(str) {
        let email = str.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
        return email === null ? false : true;
    }

    static isDomain(str) {
        return ((str.indexOf('.ru') !== -1) || (str.indexOf('.com') !== -1))
    }

    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
            }

    static isPhone(str) {
        let phone = str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
            }
}
//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
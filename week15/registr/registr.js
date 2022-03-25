function check() {
    let  name = document.getElementById('firstName');
    let surname = document.getElementById('lastName');
    let number  = document.getElementById('phoneNumber').value;
    let email = document.getElementById('emailAddress');
    document.getElementById('error').innerHTML = ""

    if(name.value == '') {
        document.getElementById('error').innerHTML += "Your First Name is not available <br>";
    } 
    
    if(surname.value == '') {
        document.getElementById('error').innerHTML += "Your Last Name is not available <br>";
    } 
    if( number == '' && number.length < 11) {
        document.getElementById('error').innerHTML += "Your Number is not available <br>";
    }
    if(email.value == '') {
        document.getElementById('error').innerHTML += "Your Email is not available <br>";
    }

    if (name.value && surname.value && number && email.value != '' ) {
        document.getElementById('error').innerHTML +=  "welcome!";
    }

    if((document.getElementById('femaleGender').checked == false) || (document.getElementById('maleGender').checked == false)){
        document.getElementById('error').innerHTML +=  "You don't choose your sex";

    }
}
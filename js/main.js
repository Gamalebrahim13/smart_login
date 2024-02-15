
var signupName = document.getElementById('name');
var signupEmail = document.getElementById('email');
var signupPassword = document.getElementById('password');
var signupBtn = document.getElementById('signupBtn');
var exist = document.getElementById('exist');
var succed = document.getElementById('succed');
var used = document.getElementById('used');
var products = [];
var namelAlert = document.getElementById('namelAlert');
var emaillAlert = document.getElementById('emaillAlert');
var passwordAlert = document.getElementById('passwordAlert');
window.onload = function () {
    var savedData = localStorage.getItem('signupdata');
    if (savedData !== null) {
        products = JSON.parse(savedData);
    }
};
signupBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (signupName.value === '' || signupEmail.value === '' || signupPassword.value === '') {
        succed.classList.add('d-none');
        exist.classList.remove('d-none');
        used.classList.add('d-none');
    } else {
        validname();
        validemail();
        validpassword();
        if (!checkDuplicateEmail()) {
            var product = {
                name: signupName.value,
                email: signupEmail.value,
                password: signupPassword.value,
            };
            products.push(product);
            localStorage.setItem('signupdata', JSON.stringify(products));
            exist.classList.add('d-none');
            used.classList.add('d-none');
            succed.classList.remove('d-none');
        }
        // exist.classList.add('d-none');
        // used.classList.add('d-none');
        // succed.classList.remove('d-none');
    }
});
function clear() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}
function validname() {
    var nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(signupName.value)) {
        signupName.classList.add('is-valid');
        signupName.classList.remove('is-invalid');
        namelAlert.classList.add('d-none');
    } else {
        signupName.classList.remove('is-valid');
        signupName.classList.add('is-invalid');
        namelAlert.classList.remove('d-none');
    }
}
function validemail() {
    var emailRegex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    if (emailRegex.test(signupEmail.value)) {
        signupEmail.classList.add('is-valid');
        signupEmail.classList.remove('is-invalid');
        emaillAlert.classList.add('d-none');
    } else {
        signupEmail.classList.remove('is-valid');
        signupEmail.classList.add('is-invalid');
        emaillAlert.classList.remove('d-none');
    }
}
function validpassword() {
    var passwordRegex = /^.*(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%^&*()+=]).*$/;
    if (passwordRegex.test(signupPassword.value)) {
        signupPassword.classList.add('is-valid');
        signupPassword.classList.remove('is-invalid');
        passwordAlert.classList.add('d-none');
    } else {
        signupPassword.classList.remove('is-valid');
        signupPassword.classList.add('is-invalid');
        passwordAlert.classList.remove('d-none');
        // succed.classList.add('d-none');
        // exist.classList.add('d-none');
        // used.classList.add('d-none');
    }
}
function checkDuplicateEmail() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].email === signupEmail.value) {
            used.classList.remove('d-none');
            exist.classList.add('d-none');
            succed.classList.add('d-none');
            return true;
        }
    }
    return false;
}
// function succed(){

// }

// var loginBtn = document.getElementById('loginBtn');






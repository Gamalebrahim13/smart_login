var loginBtn = document.getElementById('loginBtn');
var loginemail = document.getElementById('email');
var loginpassword = document.getElementById('password');
var allinput = document.getElementById('allinput');
var incorrect = document.getElementById('incorrect');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission
    
    if (loginemail.value === '' || loginpassword.value === '') {
        allinput.classList.remove('d-none');
        incorrect.classList.add('d-none');
         // Show error message if fields are empty
        return;
    }
    
    var loggedIn = checkdata(); // Check if login credentials are valid
    
    if (loggedIn) {
        // Redirect to Home.html upon successful login
        window.location.href = "Home.html";
    } else {
        // Display error message if login credentials are incorrect
        // Modify this part as needed, for example, show an error message on the login page
        incorrect.classList.remove('d-none');
        allinput.classList.add('d-none');
    }
});

function checkdata() {
    // Retrieve user data from localStorage
    var savedData = localStorage.getItem('signupdata');
    if (savedData) {
        var products = JSON.parse(savedData);
        // Iterate over saved user data to check if login credentials match
        for (var i = 0; i < products.length; i++) {
            if (products[i].email === loginemail.value && products[i].password === loginpassword.value) {
                // If credentials match, set the current user's name in localStorage
                localStorage.setItem('currentUser', products[i].name);
                return true; // Return true indicating successful login
            }
        }
    }
    return false; // Return false if login credentials are not found or incorrect
}

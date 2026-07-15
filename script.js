document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    message.style.color = "red";

    if(name === ""){
        message.innerHTML = "Student name should not be empty.";
        return;
    }

    if(!email.includes("@")){
        message.innerHTML = "Email must contain @.";
        return;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        message.innerHTML = "Mobile number must contain exactly 10 digits.";
        return;
    }

    if(password.length < 8){
        message.innerHTML = "Password must be at least 8 characters.";
        return;
    }

    if(password !== confirmPassword){
        message.innerHTML = "Passwords do not match.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration Successful";

});
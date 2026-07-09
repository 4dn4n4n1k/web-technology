const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const fName = document.getElementById("fName").value.trim();
    const lName = document.getElementById("lName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const cPassword = document.getElementById("confirmPassword").value.trim();


    document.getElementById("fNameError").innerText="";
    document.getElementById("lNameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";
    document.getElementById("confirmPasswordError").innerText="";
    document.getElementById("successMessage").innerText="";

    let isValid = true;

    if(fName === ""){
        document.getElementById("fNameError").innerText="First name is required.";
        isValid = false;
    }

    if(lName === ""){
        document.getElementById("lNameError").innerText = "Last name is required.";
        isValid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerText = "Email required";
        isValid = false;
    }
    else if (!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText = "Email must contain @ and .";
        isValid = false;
    }

    if(password.length < 6 ){
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if(cPassword != password){
        document.getElementById("confirmPasswordError").innerText = "Password doesn't match";
        isValid = false;
    }

    if(isValid){
        document.getElementById("successMessage").innerText = "Registration Successful";
        form.reset();
    }
});
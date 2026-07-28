const form = document.getElementById("signup-form");

if (form) {
    form.addEventListener("submit", function (event) {
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
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (fName === "") {
            document.getElementById("fNameError").innerText = "First name is required.";
            isValid = false;
        }

        if (lName === "") {
            document.getElementById("lNameError").innerText = "Last name is required.";
            isValid = false;
        }

        if (email === "") {
            document.getElementById("emailError").innerText = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
            isValid = false;
        }

        if (password === "") {
            document.getElementById("passwordError").innerText = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
            isValid = false;
        }

        if (cPassword === "") {
            document.getElementById("confirmPasswordError").innerText = "Please confirm your password.";
            isValid = false;
        } else if (cPassword !== password) {
            document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("successMessage").innerText = "Signup successful!";
            form.reset();
        }
    });
}
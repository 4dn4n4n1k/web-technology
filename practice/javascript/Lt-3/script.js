const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const content = document.querySelector(".content");
const button = document.getElementById("themeBtn");


let darkMode = false;

button.addEventListener("click", function () {

    if (!darkMode) {

        body.style.backgroundColor = "#222";
        body.style.color = "#fff";

        header.style.backgroundColor = "#333";
        footer.style.backgroundColor = "#333";
        content.style.backgroundColor = "#444";

        header.style.borderColor = "#fff";
        footer.style.borderColor = "#fff";
        content.style.borderColor = "#fff";

        button.textContent = "Switch to Light Mode";

        darkMode = true;

    } else {


        body.style.backgroundColor = "#fff";
        body.style.color = "#000";

        header.style.backgroundColor = "#fff";
        footer.style.backgroundColor = "#fff";
        content.style.backgroundColor = "#fff";

        header.style.borderColor = "#000";
        footer.style.borderColor = "#000";
        content.style.borderColor = "#000";

        button.textContent = "Switch to Dark Mode";

        darkMode = false;
    }

});
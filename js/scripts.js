document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        let valid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
            valid = false;
            name.style.border = "2px solid red";
            alert("A név mező nem lehet üres.");
        } else {
            name.style.border = "";
        }

        if (email.value.trim() === "") {
            valid = false;
            email.style.border = "2px solid red";
            alert("Az email mező nem lehet üres.");
        } else {
            email.style.border = "";
        }

        if (message.value.trim() === "") {
            valid = false;
            message.style.border = "2px solid red";
            alert("Az üzenet mező nem lehet üres.");
        } else {
            message.style.border = "";
        }

        if (valid) {
            alert("Az űrlap sikeresen elküldve!");
            form.reset();
        }
    }
});
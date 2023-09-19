document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    feedbackForm.addEventListener("submit", (e) => {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email address";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Message validation
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if there are validation errors
        }
    });
});

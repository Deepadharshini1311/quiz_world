document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validate inputs
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            message.style.color = "red";
            message.textContent = "All fields are required!";
            return;
        }

        if (!validateEmail(email)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid email!";
            return;
        }

        if (password.length < 6) {
            message.style.color = "red";
            message.textContent = "Password must be at least 6 characters long!";
            return;
        }

        if (password !== confirmPassword) {
            message.style.color = "red";
            message.textContent = "Passwords do not match!";
            return;
        }

        message.style.color = "green";
        message.textContent = "Registration successful!";

        // Simulate form submission (you can replace this with actual AJAX request)
        setTimeout(() => {
            form.submit();
        });
    },1000);

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

documen.getElementById("loginForm1").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Correct email and password
    let correctEmail = "test@example.com";
    let correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
});



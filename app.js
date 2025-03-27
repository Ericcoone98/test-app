// Simulated credentials
const validUsername = "testuser";
const validPassword = "password123";

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve registered user data from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Register function
function register() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Save user data to localStorage
    const user = { email, username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to the login page
}

// Logout function
function logout() {
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to the login page
}
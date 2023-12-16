function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Name validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (only letters and spaces allowed)");
        return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters with at least 1 alphabet and 1 number");
        return false;
    }

    return true; // Form will be submitted if all fields are valid
}
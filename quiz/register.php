<?php
include 'db.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email already exists
    $checkEmail = $conn->prepare("SELECT * FROM users WHERE Email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $result = $checkEmail->get_result();

    if ($result->num_rows > 0) {
        echo "Email already registered!";
        exit();
    }

    // Hash password for security
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Insert user into database
    $stmt = $conn->prepare("INSERT INTO users (Username, Email, Password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "Registration successful! Redirecting...";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
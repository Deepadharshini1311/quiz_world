<?php
include 'db.php'; // Include database connection
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        if (password_verify($password, $row['password'])) {
            $_SESSION['user'] = $row['username'];
            echo "Login successful! Redirecting...";
            header("refresh:2; url=dashboard.html"); // Redirect after 2 seconds
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No account found!";
    }
}
$conn->close();
?>
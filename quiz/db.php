<?php
$servername = "localhost";
$username = "root"; // Default XAMPP user
$password = ""; // Leave blank for XAMPP
$dbname = "quiz_app"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
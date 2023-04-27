<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $website = $_POST["website"];
    $message = $_POST["message"];

    $to = "ysuperuser@hotmail.com";
    $subject = "New message from: " . $name;
    $body = "Name: " . $name . "\nEmail: " . $email . "\nWebsite: " . $website . "\nMessage: " . $message;
    $headers = "From: " . $email . "\r\n";

    mail($to, $subject, $body, $headers);
    header("Location: contact.html");
    exit();
}
?>

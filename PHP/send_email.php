<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Set your email address where you want to receive emails
    $to = 'demetrismouscou@gmail.com'; 

    $subject = "New contact from $name";
    $body = "You have received a new message from $name ($email):\n\n$message";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent";
        // You can redirect to a thank-you page or display a success message
    } else {
        echo "Message not sent";
        // Handle the error accordingly
    }
} else {
    // Not a POST request, handle the error accordingly
    echo "Invalid request";
}
?>

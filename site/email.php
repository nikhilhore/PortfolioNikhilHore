<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "horenikhil5@gmail.com";

$subject = "Mail from portfolio";
$txt = "Name: ".$name."\r\n Email: ".$email."\r\n Message: ".$message;

$headers = "From: niknsh5@gmail.com"."\r\n"."CC: 2018bme018@sggs.ac.in";

if ($email!=NULL){
    mail($to, $subject, $txt, $headers);
    header("Location:thanks.html");
}

?>
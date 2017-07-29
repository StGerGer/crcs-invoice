<?php

$settings = json_decode(file_get_contents("../config.json"));

$invoice = $_POST['invoice'];
$pdf = $_POST['pdf'];
$mail = new PHPMailer;

$mail->From = "castlerockcomputersolutions@gmail.com";
$mail->FromName = "Castle Rock Computer Solutions";

// $mail->addAddress($invoice["email"]);
$mail->addAddress("nateestes223@gmail.com");

$mail->Subject = $invoice["first"] + ", here is your Computer Solutions invoice";
$mail->Body = str_replace($invoice["first"]+" "+$invoice["last"], "{name}", $settings["mailBody"]);

$mail->AddAttachment($pdf, $name = "invoice.pdf", $encoding="base64", $type = "application/pdf");

if(!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
    echo "done";
}

?>

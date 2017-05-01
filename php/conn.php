<?php
    ini_set('html_errors', false);
    # Basic connection to CRCS database.

    $db = new mysqli('localhost', 'root', 'password', 'crcs_invoice'); # Check these values

    global $db; # Accessible to other files when included

    if($db->connect_errno) {
        die("Connection to database failed (Check php/conn.php). Error: " . $db->connect_error);
    }
?>

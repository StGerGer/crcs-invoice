<?php
    ini_set('html_errors', false);
    # Basic connection to CRCS database.

    $db = new mysqli('localhost', 'root', 'root', 'crcs_invoice'); # Check these values

    global $db;

    if($db->connect_errno) {
        die("Connection to database failed (Check php/conn.php). Error: " . $db->connect_error);
    }
?>

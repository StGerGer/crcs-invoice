<?php

    # Basic connection to CRCS database. Written by Nate St. George

    $db = new mysqli('localhost', 'root', '', 'crcs_invoice');

    global $db; # Accessible to other files when included

    if($db->connect_errno !== 0) {
        die("Dang, connection to database failed (Check php/conn.php). Error: " . $db->connect_error);
    }
?>

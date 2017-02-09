<?php
    # Gets all customer data from the CRCS database. Written by Nate St. George
    include("conn.php");

    $sql = "SELECT * FROM `invoice_data`";

    if(!$result = $db->query($sql)) {
        die('Couldn\'t get customer data: ' . $db->error);
    } else {
        while($rows[] = $result->fetch_assoc()) {}
        array_pop($rows); # Removes null result from end. Any other way breaks it, so this is what you get
        echo json_encode($rows);
    }
?>

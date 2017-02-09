<?php
    # Gets customer data via search from the CRCS database. Written by Nate St. George
    include("conn.php");

    $q = $_REQUEST["q"];

    if($q != "") {
        # Add in query parsing here if necessary
        $sql = "SELECT * FROM `invoice_data` WHERE `first` LIKE '%$q%' OR `last` LIKE '%$q%' OR `invoice_date` = '$q' OR `email` LIKE '%$q%'";

        if(!$result = $db->query($sql)) {
            die('Couldn\'t get customer data: ' . $db->error);
        } else {
            while($rows[] = $result->fetch_assoc()) {}
            array_pop($rows); # Removes null result from end. Any other way breaks it, so this is what you get
            echo json_encode($rows);
        }
    }
?>

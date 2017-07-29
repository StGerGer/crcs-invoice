<?php
    # Gets customer data from an id.
    require_once("conn.php");

    $id = $_POST['id'];

    $sql = "SELECT * FROM `invoice_data` WHERE invoiceID = $id";

    if(!$result = $db->query($sql)) {
        die('Couldn\'t get customer data: ' . $db->error);
    } else {
        while($rows[] = $result->fetch_assoc()) {}
        echo json_encode($rows);
    }
?>

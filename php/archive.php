<?php
    # Edits an invoice.
    require("conn.php");

    $id = $_POST['id'];

    $sql = sprintf( 'UPDATE `invoice_data` SET active = 0 WHERE invoiceID = %s', $id);
    echo $sql;
    if(!$result = $db->query($sql)) {
        die('Couldn\'t archive: ' . $db->error);
    } else {
        echo 'done';
    }

 ?>

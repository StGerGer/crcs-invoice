<?php
    # Adds an invoice.
    require("conn.php");

    $invoice_data = $_POST['invoice'];

    $invoice_data['item_arr'] = "['" . implode("','", $invoice_data['item_arr']) . "']";
    $invoice_data['price_arr'] = "['" . implode("','", $invoice_data['price_arr']) . "']";
    $invoice_data['hardware_arr']  = "['" . implode("','", $invoice_data['hardware_arr']) . "']";

    $sql = sprintf(
            'INSERT INTO `invoice_data` (`%s`) VALUES ("%s")',
            implode("`, `", array_keys($invoice_data)),
            implode('", "', array_values($invoice_data))
    );
    if(!$result = $db->query($sql)) {
        die('Couldn\'t add customer data: ' . $db->error);
    } else {
        echo 'done';
    }

 ?>

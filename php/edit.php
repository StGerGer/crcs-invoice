<?php
    # Edits an invoice.
    require("conn.php");

    $invoice_data = $_POST['invoice'];

    $invoice_data['item_arr'] = "['" . implode("','", $invoice_data['item_arr']) . "']";
    $invoice_data['price_arr'] = "['" . implode("','", $invoice_data['price_arr']) . "']";
    $invoice_data['hardware_arr']  = "['" . implode("','", $invoice_data['hardware_arr']) . "']";

    $str = '';
    $keys = array_keys($invoice_data);
    $last = end($keys);
    reset($invoice_data);

    foreach($invoice_data as $key=>$item) {
        if(is_numeric($item) && $key != $last) {
            $str .= $key . ' = ' . $item . ', ';
        } else {
            if($key == $last) {
                $str .= $key . ' = "' . $item . '" ';
            } else {
              $str .= $key . ' = "' . $item . '", ';
            }
        }
    }
    $sql = sprintf ('UPDATE `invoice_data` SET %s WHERE invoiceID = %s;', $str, $invoice_data['invoiceID']);

    if(!$result = $db->query($sql)) {
        die('Couldn\'t add customer data: ' . $db->error);
    } else {
        echo 'done';
    }

 ?>

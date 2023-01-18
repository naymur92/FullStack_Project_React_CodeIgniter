<?php
include 'dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

// echo json_encode($data);

if (isset($data)) {
  $userid = mysqli_real_escape_string($db_conn, trim($data->userid));
  $products = $data->products;
  $total = mysqli_real_escape_string($db_conn, trim($data->total));
  $address = $data->address;
  $payment = $data->payment;

  $db_conn->autocommit(false);
  $db_conn->begin_transaction();

  // insert into orders table
  $sql = "INSERT INTO orders VALUES(NULL, '$userid', '$total', DEFAULT, '$payment->method', DEFAULT, 0)";
  $db_conn->query($sql);

  // Get last insert id
  $last_id = mysqli_query($db_conn, 'SELECT LAST_INSERT_ID()');
  $last_order_id = mysqli_fetch_assoc($last_id)['LAST_INSERT_ID()'];

  if ($db_conn->affected_rows > 0) {
    foreach ($products as $product) {
      // insert into orderdetails table
      $sql = "INSERT INTO orderdetails VALUES(NULL, '$last_order_id', '$product->id', '$product->qty', '$product->product_price')";
      $db_conn->query($sql);

      // update products table
      // Update stock
      mysqli_query($db_conn, "UPDATE products SET product_stock = product_stock - $product->qty WHERE id='$product->id'");
      // Check empty stock products and set status
      if ($product->product_stock == $product->qty) {
        mysqli_query($db_conn, "UPDATE products SET product_status = 'unavailable' WHERE id='$product->id'");
      }
    }

    // insert into orders_delivery table
    $sql = "INSERT INTO orders_delivery VALUES(NULL, '$last_order_id', '$userid', '$address->country', '$address->area', '$address->zipcode', '$address->address', '$address->phone')";
    $db_conn->query($sql);


    if ($db_conn->affected_rows > 0) {
      $db_conn->commit();
      echo json_encode(['success' => true, 'msg' => 'Order Placed']);
      return;
    } else {
      $db_conn->rollback();
      echo json_encode(['success' => false, 'msg' => 'Server Problem']);
      return;
    }
  } else {
    echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}

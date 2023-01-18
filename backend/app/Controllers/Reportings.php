<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Reportings extends BaseController
{
  public function orderSummary()
  {
    $data['title'] = 'Orders Summary - Reportings';

    $db = db_connect('default');

    $builder = $db->table('orders');
    $data['orders'] = $builder->get()->getResultArray();

    $builder = $db->table('orderdetails, products');
    $builder->select('products.product_name');
    $builder->select('orderdetails.order_id, orderdetails.product_quantity, orderdetails.product_price, products.product_name');
    $builder->where('orderdetails.product_id = products.id');
    $data['orderdetails'] = $builder->get()->getResultArray();

    $builder = $db->table('orders_delivery, users');
    $builder->select('orders_delivery.order_id, orders_delivery.dv_country, orders_delivery.dv_area, orders_delivery.dv_zip, orders_delivery.dv_address, orders_delivery.dv_phone, users.name as customer_name');
    $builder->where('orders_delivery.user_id = users.id');
    $data['delivery_addresses'] = $builder->get()->getResultArray();

    return view('reportings/orders_summary', $data);
  }
  public function make_order_summary()
  {
    $startdate = $this->request->getGet('startdate');
    $enddate = $this->request->getGet('enddate');
    $status = $this->request->getGet('status');
    // echo $startdate;

    $db = db_connect('default');

    $builder = $db->table('orders');
    $builder->where("orders.created_at >= '{$startdate}'");
    $builder->where("orders.created_at <= '{$enddate}'");
    if ($status != "") {
      $builder->where("orders.order_status = '{$status}'");
    }
    $orders = $builder->get()->getResultArray();

    $builder = $db->table('orderdetails, products');
    $builder->select('products.product_name');
    $builder->select('orderdetails.order_id, orderdetails.product_quantity, orderdetails.product_price, products.product_name');
    $builder->where('orderdetails.product_id = products.id');
    $orderdetails = $builder->get()->getResultArray();

    $builder = $db->table('orders_delivery, users');
    $builder->select('orders_delivery.order_id, orders_delivery.dv_country, orders_delivery.dv_area, orders_delivery.dv_zip, orders_delivery.dv_address, orders_delivery.dv_phone, users.name as customer_name');
    $builder->where('orders_delivery.user_id = users.id');
    $delivery_addresses = $builder->get()->getResultArray();

    $result = '
    <div class="card-body" id="data_container">
      <table id="example1" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Address</th>
            <th>Order Time</th>
          </tr>
        </thead>
        <tbody>
    ';

    foreach ($orders as $index => $order) :
      $result .= '<tr>';
      $result .= "<td>" . ($index + 1) . "</td>";

      $result .= '<td><ul>';
      foreach ($orderdetails as $ord_det) :
        if ($ord_det['order_id'] == $order['order_id']) :
          $result .= "<li>" . $ord_det['product_name'] . ' - (' . $ord_det['product_quantity'] . ')' . "</li>";
        endif;
      endforeach;
      $result .= '</ul></td>';

      $result .= '<td><ul>';
      foreach ($orderdetails as $ord_det) :
        if ($ord_det['order_id'] == $order['order_id']) :
          $result .= "<li><strong>&#2547;</strong> {$ord_det['product_price']}</li>";
        endif;
      endforeach;
      $result .= '</ul></td>';

      $result .= '<td class="align-middle text-center"><strong>&#2547;</strong> ' . $order['total_price'] . '</td>';

      $result .= '<td class="align-middle text-center">' . $order['order_status'] . '</td>';

      $result .= '<td class="align-middle">';
      foreach ($delivery_addresses as $ord_addr) :
        if ($ord_addr['order_id'] == $order['order_id']) :
          $result .= "<address>
          {$ord_addr['customer_name']}, <br>
          {$ord_addr['dv_address']}, <br>
          {$ord_addr['dv_zip']}, <br>
          {$ord_addr['dv_phone']} <br>
        </address>";
        endif;
      endforeach;
      $result .= '</td>';

      $result .= '<td class="align-middle text-center">' . date("d M, Y - h:i A", strtotime($order['created_at'])) . '</td>';

      $result .= '</tr>';
    endforeach;

    $result .= '
        </tbody>
      <tfoot>
        <tr>
          <th>SL No.</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Total</th>
          <th>Status</th>
          <th>Address</th>
          <th>Order Time</th>
        </tr>
      </tfoot>
    </table>
    ';

    echo $result;
  }
}

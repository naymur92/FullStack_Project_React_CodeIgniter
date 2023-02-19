<?php

namespace App\Controllers;

use App\Models\OrdersModel;
use CodeIgniter\RESTful\ResourceController;

class Orders extends ResourceController
{
  /**
   * Return an array of resource objects, themselves in array format
   *
   * @return mixed
   */
  public function index()
  {
    $data['title'] = 'Order Management';

    $db = db_connect('default');

    // $builder = $db->table('orders, orderdetails, orders_delivery, products, users');
    // $builder->select('orders.order_id, orders.total_price, orders.order_status, orders.payment_method, orders.created_at');
    // $builder->select('products.product_name');
    // $builder->select('orderdetails.product_quantity, orderdetails.product_price');
    // $builder->select('users.name as customer_name');
    // $builder->select('orders_delivery.dv_country, orders_delivery.dv_area, orders_delivery.dv_zip, orders_delivery.dv_address, orders_delivery.dv_phone');
    // $builder->where('orders.order_id = orderdetails.order_id');
    // $builder->where('orders.order_id = orders_delivery.order_id');
    // $builder->where('orderdetails.product_id = products.id');
    // $builder->where('orders_delivery.user_id = users.id');
    // $builder->groupBy('orderdetails.product_id');

    // $data['orders'] = $builder->get()->getResultArray();

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

    return view('orders/orders_list', $data);
  }

  /**
   * Return the properties of a resource object
   *
   * @return mixed
   */
  public function show($id = null)
  {
    //
  }

  /**
   * Return a new resource object, with default properties
   *
   * @return mixed
   */
  // public function new()
  // {
  //   //
  // }

  /**
   * Create a new resource object, from "posted" parameters
   *
   * @return mixed
   */
  // public function create()
  // {
  //   //
  // }

  /**
   * Return the editable properties of a resource object
   *
   * @return mixed
   */
  // public function edit($id = null)
  // {
  //   //
  // }

  /**
   * Add or update a model resource, from "posted" properties
   *
   * @return mixed
   */
  public function update($id = null)
  {
    $data['order_status'] = $_POST['status'];
    $model = new OrdersModel();

    if ($model->update($id, $data)) {
      session()->setFlashdata('msg', 'Successfully Updated');
    }
  }

  /**
   * Delete the designated resource object from the model
   *
   * @return mixed
   */
  public function delete($id = null)
  {
    // $model = new OrdersModel();

    // if ($model->delete($id)) {
    //   session()->setFlashdata('msg', 'Successfully Deleted');
    //   // return redirect()->to(site_url('/products'))->with('msg', 'Successfull Deleted');
    // }
  }
}

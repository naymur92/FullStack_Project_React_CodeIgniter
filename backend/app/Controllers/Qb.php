<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Qb extends BaseController
{
  public function index()
  {
    $db = \Config\Database::connect();

    ##########
    // $builder = $db->table('products');

    // $raw = $builder->get(1, 4);
    // $raw = $builder->get();
    // $raw = $builder->getWhere(['id' => 2]);
    // $raw = $builder->select('id, product_name, product_category')->get();
    // $raw = $builder->selectMax('product_price')->get();
    // $raw = $builder->selectMin('product_price')->get();
    // $raw = $builder->selectAvg('product_price')->get();
    // $raw = $builder->selectAvg('product_price')->get();
    // $raw = $builder->select('product_category')->selectSum('product_price')->groupBy('product_category')->get();
    // $raw = $builder->select('product_category')->selectSum('product_price')->groupBy('product_category')->get();

    ##############

    // Table joining
    // $builder = $db->table('products');
    // $builder->select('*');
    // $builder->join('categories', 'product_category=cat_id');

    // $builder = $db->table('products, categories')->where('product_category = cat_id');

    // Where condition
    // $builder = $db->table('products, categories')->where('product_category = cat_id and product_price > 100');

    // $builder = $db->table('products')->where('product_category = 3 and product_price > 100');

    $builder = $db->table('products');
    // $builder->where('product_category = 3');
    // $builder->where('product_price > 100');

    // $builder->where('product_price BETWEEN 100 AND 1500');

    $raw = $builder->get();
    $data = $raw->getResult();

    // echo "<pre>";

    $data['products'] = json_decode(json_encode($data), true);

    // print_r($data);
    return view('test', $data);
  }
}

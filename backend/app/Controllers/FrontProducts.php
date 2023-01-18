<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\ProductModel;
use CodeIgniter\API\ResponseTrait;

class FrontProducts extends BaseController
{
    use ResponseTrait;
    public function index()
    {
        $model = new ProductModel();
        $data = $model->orderBy('created_at', 'DESC')->where('product_stock > 0')->findAll();

        return $this->respond($data);
    }
}

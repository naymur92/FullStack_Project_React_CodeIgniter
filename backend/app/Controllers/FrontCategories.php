<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CategoryModel;
use CodeIgniter\API\ResponseTrait;

class FrontCategories extends BaseController
{
    use ResponseTrait;
    public function index()
    {
        $model = new CategoryModel();
        $data = $model->findAll();

        return $this->respond($data);
    }
}

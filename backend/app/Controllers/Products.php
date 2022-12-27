<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ProductModel;

class Products extends ResourceController
{

    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $data['title'] = "All Products";
        $model = new ProductModel();
        $data['products'] = $model->findAll();

        return view('products/products_list', $data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        $data['title'] = "View Product";
        $model = new ProductModel();
        $data['product'] = $model->find($id);

        return view('products/show_product', $data);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        $data['title'] = "Add Product";
        return view('products/add_product', $data);
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        $validate = $this->validate([
            'product_name' => 'required|min_length[5]|max_length[50]',
            'product_details' => 'required|min_length[20]',
            'product_price' => 'required|numeric',
        ]);

        if (!$validate) {
            return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
        } else {
            $model = new ProductModel();
            $data = $this->request->getPost();

            if ($model->save($data)) {
                return redirect()->to('products');
            }
        }
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        $data['title'] = "Edit Product";
        $model = new ProductModel();
        $data['product'] = $model->find($id);

        return view('products/edit_product', $data);
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        $model = new ProductModel();
        $data = $this->request->getPost();

        if ($model->update($id, $data)) {
            return redirect()->to('products');
        }
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        $model = new ProductModel();
        if ($model->delete($id)) {
            return redirect()->to('products');
        }
    }
}

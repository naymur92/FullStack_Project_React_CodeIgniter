<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ProductModel;
use App\Models\CategoryModel;

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

    $model = new CategoryModel();
    $data['categories'] = $model->findAll();

    $model = new ProductModel();
    $data['products'] = $model->orderBy('product_creation_time', 'DESC')->findAll();

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
    $model = new CategoryModel();
    $data['categories'] = $model->findAll();

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

    $rules = [
      'product_name' => 'required|min_length[5]|max_length[25]',
      'product_details' => 'required|min_length[10]',
      'product_price' => 'required|numeric',
      'product_category' => 'required',
      'product_image' => [
        // 'uploaded[product_image]',   // This is for required
        'mime_in[product_image,image/jpg,image/jpeg,image/png]',
        'max_size[product_image,1024]',
      ]
    ];
    $errors = [
      'product_name' => [
        'required' => 'Product name must be filled',
        'min_length' => 'Minimum length is 5!',
        'max_length' => 'Maximum length is 25!'
      ],
      'product_details' => [
        'required' => 'Product details must be filled',
        'min_length' => 'Minimum length is 10!'
      ],
      'product_price' => [
        'required' => 'Product price must be filled',
        'numeric' => 'Price must be numeric'
      ],
      'product_category' => [
        'required' => 'Must select category'
      ],
      'product_image' => [
        'uploaded' => 'Must be a file!',
        'mime_in' => 'Only images are allowed',
        'max_size' => 'Maximum file size is 1024KB'
      ]
    ];

    $validate = $this->validate($rules, $errors);

    if (!$validate) {
      return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
    } else {
      $img = $this->request->getFile('product_image');
      if ($img->getName() != '') {
        $img->move('assets/images/products');
      }
      // print_r($img);
      $model = new ProductModel();

      // Get form data
      $data = [
        'product_name' => $this->request->getPost('product_name'),
        'product_category' => $this->request->getPost('product_category'),
        'product_details' => $this->request->getPost('product_details'),
        'product_price' => $this->request->getPost('product_price'),
        'product_image' => $img->getName(),
      ];

      if ($model->save($data)) {
        return redirect()->to(site_url('/products'))->with('msg', 'Successfull Inserted');
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
    $model = new CategoryModel();
    $data['categories'] = $model->findAll();

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
    $rules = [
      'product_name' => 'required|min_length[5]|max_length[25]',
      'product_details' => 'required|min_length[10]',
      'product_price' => 'required|numeric',
      'product_category' => 'required',
      'product_image' => [
        // 'uploaded[product_image]',   // This is for required
        'mime_in[product_image,image/jpg,image/jpeg,image/png]',
        'max_size[product_image,1024]',
      ]
    ];
    $errors = [
      'product_name' => [
        'required' => 'Product name must be filled',
        'min_length' => 'Minimum length is 5!',
        'max_length' => 'Maximum length is 25!'
      ],
      'product_details' => [
        'required' => 'Product details must be filled',
        'min_length' => 'Minimum length is 10!'
      ],
      'product_price' => [
        'required' => 'Product price must be filled',
        'numeric' => 'Price must be numeric'
      ],
      'product_category' => [
        'required' => 'Must select category'
      ],
      'product_image' => [
        'uploaded' => 'Must be a file!',
        'mime_in' => 'Only images are allowed',
        'max_size' => 'Maximum file size is 1024KB'
      ]
    ];

    $validate = $this->validate($rules, $errors);

    if (!$validate) {
      return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
    } else {
      // Get old file name
      $model = new ProductModel();
      $filename = $model->find($id)['product_image'];

      // photo uploading part
      $img = $this->request->getFile('product_image');
      if ($img->getName() != '') {
        if ($img->move('assets/images/products')) {
          // If file upload succeed then remove previus file and set new file name
          if ($filename != "") {
            unlink('assets/images/products/' . $filename);
          }
          $filename = $img->getName();
        }
      }
      // print_r($img);
      $model = new ProductModel();

      // Get form data
      $data = [
        'product_name' => $this->request->getPost('product_name'),
        'product_category' => $this->request->getPost('product_category'),
        'product_details' => $this->request->getPost('product_details'),
        'product_price' => $this->request->getPost('product_price'),
      ];
      $data['product_image'] = $filename;

      if ($model->update($id, $data)) {
        return redirect()->to(site_url('products'))->with('msg', 'Successfully Updated');
      }
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
      // return redirect()->to(site_url('products'))->with('msg', 'Successfull Deleted');
      echo "Successfully Deleted";
    }
  }
}

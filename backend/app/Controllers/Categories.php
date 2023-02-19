<?php

namespace App\Controllers;

use App\Models\CategoryModel;
use CodeIgniter\RESTful\ResourceController;

class Categories extends ResourceController
{
  private $upload_path = 'assets/images/categories/';
  /**
   * Return an array of resource objects, themselves in array format
   *
   * @return mixed
   */
  public function index()
  {
    $data['title'] = "Categories";

    $model = new CategoryModel();
    $data['categories'] = $model->orderBy('created_at', 'DESC')->findAll();

    return view('categories/category_list', $data);
  }

  /**
   * Return the properties of a resource object
   *
   * @return mixed
   */
  // public function show($id = null)
  // {
  //   //
  // }

  /**
   * Return a new resource object, with default properties
   *
   * @return mixed
   */
  public function new()
  {
    $data['title'] = 'Create Category';
    return view('categories/add_category', $data);
  }

  /**
   * Create a new resource object, from "posted" parameters
   *
   * @return mixed
   */
  public function create()
  {
    $rules = [
      'category_name' => 'required|min_length[5]|max_length[25]',
      'category_desc' => 'required|min_length[10]',
      'category_image' => [
        // 'uploaded[category_image]',   // This is for required
        'mime_in[category_image,image/jpg,image/jpeg,image/png]',
        'max_size[category_image,1024]',
      ]
    ];
    $errors = [
      'category_name' => [
        'required' => 'Category name must be filled',
        'min_length' => 'Minimum length is 5!',
        'max_length' => 'Maximum length is 25!'
      ],
      'category_desc' => [
        'required' => 'Category details must be filled',
        'min_length' => 'Minimum length is 10!'
      ],
      'category_image' => [
        'uploaded' => 'Must be a file!',
        'mime_in' => 'Only images are allowed',
        'max_size' => 'Maximum file size is 1024KB'
      ]
    ];

    $validate = $this->validate($rules, $errors);

    if (!$validate) {
      return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
    } else {
      $img = $this->request->getFile('category_image');
      if ($img->getName() != '') {
        $img->move($this->upload_path);
        $filename = $img->getName();
      } else {
        $filename = 'no_image.jpg';
      }
      // print_r($img);
      $model = new CategoryModel();

      // Get form data
      $data = [
        'category_name' => $this->request->getPost('category_name'),
        'category_desc' => $this->request->getPost('category_desc'),
        'category_image' => $filename,
      ];

      if ($model->save($data)) {
        return redirect()->to(site_url('/categories'))->with('msg', 'Successfully Inserted');
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
    //
  }

  /**
   * Add or update a model resource, from "posted" properties
   *
   * @return mixed
   */
  public function update($id = null)
  {
    //
  }

  /**
   * Delete the designated resource object from the model
   *
   * @return mixed
   */
  public function delete($id = null)
  {
    $model = new CategoryModel();

    $category_image = $model->find($id)['category_image'];
    if ($model->delete($id)) {
      // Delete category image
      if (trim($category_image) != "" && trim($category_image) != 'no_image.jpg') {
        unlink($this->upload_path . $category_image);
      }

      session()->setFlashdata('msg', 'Successfully Deleted');
      // return redirect()->to(site_url('/categories'))->with('msg', 'Successfull Deleted');
    }
  }
}

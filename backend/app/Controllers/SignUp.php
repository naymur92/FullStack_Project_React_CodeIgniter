<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UsersModel;

class SignUp extends BaseController
{
	public function index()
	{
		return view('auth/sign_up');
	}

	public function store()
	{
		$rules = [
			'name'          => 'required|min_length[2]|max_length[50]',
			'email'         => 'required|min_length[5]|max_length[100]|valid_email|is_unique[users.email]',
			'password'      => 'required|min_length[4]|max_length[20]',
			'confirmpassword'  => 'matches[password]'
		];
		$errors = [
			'name' => [
				'required' => 'Name must be entered!',
				'min_length' => 'Minimum length is 2!',
				'max_length' => 'Maximum length is 50!',
			],
			'email' => [
				'required' => 'Email must be entered!',
				'min_length' => 'Minimum email length is 5!',
				'max_length' => 'Maximum email length is 100!',
				'valid_email' => 'Email address is invalid!',
				'is_unique' => 'Email must be unique!',
			],
			'password' => [
				'required' => 'Name must be entered!',
				'min_length' => 'Minimum password length is 4!',
				'max_length' => 'Maximum password length is 20!',
			],
			'confirmpassword' => [
				'matches' => 'Password does not match!'
			],
		];

		if ($this->validate($rules, $errors)) {
			$userModel = new UsersModel();
			$data = [
				'name'     => $this->request->getPost('name'),
				'email'    => $this->request->getPost('email'),
				'password' => password_hash($this->request->getPost('password'), PASSWORD_DEFAULT)
			];
			// print_r($data);
			$userModel->save($data);
			return redirect()->to('/signin');
		} else {
			return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
		}
	}
}

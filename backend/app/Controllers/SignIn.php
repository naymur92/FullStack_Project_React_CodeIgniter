<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UsersModel;

class SignIn extends BaseController
{
  public function index()
  {
    return view('auth/sign_in');
  }

  public function loginAuth()
  {
    $session = session();
    $userModel = new UsersModel();
    $email = $this->request->getPost('email');
    $password = $this->request->getPost('password');

    $data = $userModel->where('email', $email)->first();

    if ($data) {
      $pass = $data['password'];
      $authenticatePassword = password_verify($password, $pass);
      if ($authenticatePassword) {
        $ses_data = [
          'id' => $data['id'],
          'name' => $data['name'],
          'email' => $data['email'],
          'isLoggedIn' => TRUE
        ];
        $session->set($ses_data);
        return redirect()->to(base_url());
        // echo "login success";
      } else {
        return redirect()->back()->withInput()->with('pass_err', 'Password is incorrect.');
      }
    } else {
      return redirect()->back()->with('email_err', 'Email does not exist.');
    }
  }

  public function logOut()
  {
    session()->destroy();
    return redirect()->to('/signin');
  }
}

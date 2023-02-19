<?php

namespace App\Database\Seeds;

use App\Models\UsersModel;
use CodeIgniter\Database\Seeder;

class UsersSeeder extends Seeder
{
  public function run()
  {
    $model = new UsersModel();
    $model->insertBatch([
      [
        'name' => 'Naymur Rahman',
        'email' => 'naymur@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'admin',
        'status' => 'active',
      ],
      [
        'name' => 'Kamrul Hasan',
        'email' => 'kamrul@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'manager',
        'status' => 'active',
      ],
      [
        'name' => 'Alauddin Alo',
        'email' => 'alo@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Amjad Hossain',
        'email' => 'amjad@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Fayzullah Aman',
        'email' => 'fayzullah@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Ahmad Sharif',
        'email' => 'ahmed@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'pending',
      ],
      [
        'name' => 'Farhad Hossain',
        'email' => 'farhad@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'manager',
        'status' => 'pending',
      ],
      [
        'name' => 'Jamil Hossain',
        'email' => 'jamil@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Abu Syed',
        'email' => 'syed@example.com',
        'password' => password_hash("abcd1234", PASSWORD_DEFAULT),
        'role' => 'user',
        'status' => 'pending',
      ],

    ]);

    // Simple Queries
    // foreach ($users as $user) {
    //   $this->db->query("INSERT INTO users VALUES(NULL, :name:, :email:, :password:, :role:, :status:, DEFAULT)", $user);
    // }
  }
}

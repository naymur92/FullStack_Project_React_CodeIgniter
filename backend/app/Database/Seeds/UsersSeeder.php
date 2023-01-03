<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UsersSeeder extends Seeder
{
  public function run()
  {
    $users = [
      [
        'name' => 'Naymur Rahman',
        'email' => 'naymur@example.com',
        'password' => 'abcd1234',
        'role' => 'admin',
        'status' => 'active',
      ],
      [
        'name' => 'Kamrul Hasan',
        'email' => 'kamrul@example.com',
        'password' => 'abcd1234',
        'role' => 'manager',
        'status' => 'active',
      ],
      [
        'name' => 'Alauddin Alo',
        'email' => 'alo@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Amjad Hossain',
        'email' => 'amjad@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Fayzullah Aman',
        'email' => 'fayzullah@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Ahmad Sharif',
        'email' => 'ahmed@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'pending',
      ],
      [
        'name' => 'Farhad Hossain',
        'email' => 'farhad@example.com',
        'password' => 'abcd1234',
        'role' => 'manager',
        'status' => 'pending',
      ],
      [
        'name' => 'Jamil Hossain',
        'email' => 'jamil@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'active',
      ],
      [
        'name' => 'Abu Syed',
        'email' => 'syed@example.com',
        'password' => 'abcd1234',
        'role' => 'user',
        'status' => 'pending',
      ],

    ];

    // Simple Queries
    foreach ($users as $user) {
      $hashedpassword = password_hash($user['password'], PASSWORD_DEFAULT);
      $this->db->query("INSERT INTO users VALUES(NULL, :name:, :email:, '$hashedpassword', :role:, :status:, DEFAULT)", $user);
    }
  }
}

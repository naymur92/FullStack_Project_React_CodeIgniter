<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CategorySeeder extends Seeder
{
  public function run()
  {
    $categories = [
      [
        'category_name'    => 'Butter',
      ],
      [
        'category_name'    => 'Cheese',
      ],
      [
        'category_name'    => 'Ice Cream',
      ],
      [
        'category_name'    => 'Milk',
      ],
      [
        'category_name'    => 'Yoghurt',
      ],
    ];

    // Using Query Builder
    foreach ($categories as $category) {
      $this->db->table('categories')->insert($category);
    }
  }
}

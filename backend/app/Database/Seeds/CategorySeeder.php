<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CategorySeeder extends Seeder
{
  public function run()
  {
    $categories = [
      [
        'category_name'   => 'Butter',
        'category_desc'   => 'Dairy farming&#8217;s been part of agriculture for thousands of years.',
        'category_image'  => 'img_butter.jpg',
      ],
      [
        'category_name'   => 'Cheese',
        'category_desc'   => 'Dairy farming&#8217;s been part of agriculture for thousands of years.',
        'category_image'  => 'img_cheese.jpg',
      ],
      [
        'category_name'   => 'Ice Cream',
        'category_desc'   => 'Dairy farming&#8217;s been part of agriculture for thousands of years.',
        'category_image'  => 'img_cream.jpg',
      ],
      [
        'category_name'   => 'Milk',
        'category_desc'   => 'Dairy farming&#8217;s been part of agriculture for thousands of years.',
        'category_image'  => 'img_milk.jpg',
      ],
      [
        'category_name'   => 'Yoghurt',
        'category_desc'   => 'Dairy farming&#8217;s been part of agriculture for thousands of years.',
        'category_image'  => 'no_image.jpg',
      ],
    ];

    // Using Query Builder
    foreach ($categories as $category) {
      $this->db->table('categories')->insert($category);
    }
  }
}

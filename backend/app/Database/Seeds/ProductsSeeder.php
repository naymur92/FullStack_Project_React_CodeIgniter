<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProductsSeeder extends Seeder
{
  public function run()
  {
    $products = [
      [
        'product_name' => 'Pecorino Romano',
        'product_category' => 2,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 1500,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-1-300x300.jpg',
      ],
      [
        'product_name' => 'Evaporated Milk',
        'product_category' => 4,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 100,
        'product_stock' => 150,
        'product_status' => 'available',
        'product_image' => 'product-2-300x300.jpg',
      ],
      [
        'product_name' => 'Farm Sour Cream',
        'product_category' => 1,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 2000,
        'product_stock' => 100,
        'product_status' => 'available',
        'product_image' => 'product-3-300x300.jpg',
      ],
      [
        'product_name' => 'Ricotta Salata',
        'product_category' => 3,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 500,
        'product_stock' => 0,
        'product_status' => 'upcoming',
        'product_image' => 'product-4-300x300.jpg',
      ],
      [
        'product_name' => 'Fromage a Raclette',
        'product_category' => 2,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 1500,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-5-300x300.jpg',
      ],
      [
        'product_name' => 'Parmesan Cheese',
        'product_category' => 2,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 1500,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-6-300x300.jpg',
      ],
      [
        'product_name' => 'Brie Cheese',
        'product_category' => 2,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 1500,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-7-300x300.jpg',
      ],
      [
        'product_name' => 'Camembert Cheese',
        'product_category' => 2,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 1500,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-8-300x300.jpg',
      ],
      [
        'product_name' => 'Tested Raw Milk',
        'product_category' => 4,
        'product_details'    => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.',
        'product_price'    => 150,
        'product_stock' => 162,
        'product_status' => 'available',
        'product_image' => 'product-9-300x300.jpg',
      ],

    ];

    // Using Query Builder
    foreach ($products as $product) {
      $this->db->table('products')->insert($product);
    }
  }
}

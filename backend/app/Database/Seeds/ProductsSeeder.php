<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'product_name' => 'Shirt',
                'product_category' => 1,
                'product_details'    => 'Product details here',
                'product_price'    => 150,
                'product_image' => ''
            ],
            [
                'product_name' => 'Red Shirt',
                'product_category' => 1,
                'product_details'    => 'Product details here',
                'product_price'    => 150,
                'product_image' => ''
            ],
            [
                'product_name' => 'White Shirt',
                'product_category' => 1,
                'product_details'    => 'Product details here',
                'product_price'    => 150,
                'product_image' => ''
            ],
            [
                'product_name' => 'Black Shirt',
                'product_category' => 1,
                'product_details'    => 'Product details here',
                'product_price'    => 150,
                'product_image' => ''
            ],
            [
                'product_name' => 'Pant',
                'product_category' => 2,
                'product_details'    => 'Product details here',
                'product_price'    => 1150,
                'product_image' => ''
            ],
            [
                'product_name' => 'Red Pant',
                'product_category' => 2,
                'product_details'    => 'Product details here',
                'product_price'    => 1150,
                'product_image' => ''
            ],
            [
                'product_name' => 'White Pant',
                'product_category' => 2,
                'product_details'    => 'Product details here',
                'product_price'    => 1150,
                'product_image' => ''
            ],
            [
                'product_name' => 'Black Pant',
                'product_category' => 2,
                'product_details'    => 'Product details here',
                'product_price'    => 1150,
                'product_image' => ''
            ]
        ];

        // Simple Queries
        // $this->db->query('INSERT INTO products VALUES(NULL, :product_name:, :product_details:, :product_price:, DEFAULT)', $data);

        // Using Query Builder
        foreach ($products as $product) {
            $this->db->table('products')->insert($product);
        }
    }
}

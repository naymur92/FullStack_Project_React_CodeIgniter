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
                'product_details'    => 'Product details here',
                'product_price'    => 150,
            ],
            [
                'product_name' => 'Red Shirt',
                'product_details'    => 'Product details here',
                'product_price'    => 150,
            ],
            [
                'product_name' => 'White Shirt',
                'product_details'    => 'Product details here',
                'product_price'    => 150,
            ],
            [
                'product_name' => 'Black Shirt',
                'product_details'    => 'Product details here',
                'product_price'    => 150,
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

<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\RawSql;
use CodeIgniter\Database\Migration;

class Products extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'id' => [
        'type' => 'MEDIUMINT',
        'constraint' => 4,
        'unsigned' => true,
        'auto_increment' => true,
      ],
      'product_name' => [
        'type' => 'VARCHAR',
        'constraint' => 100,
        'null' => false
      ],
      'product_category' => [
        'type' => 'TINYINT',
        'unsigned' => true,
      ],
      'product_details' => [
        'type' => 'VARCHAR',
        'constraint' => 3000,
        'null' => true
      ],
      'product_price' => [
        'type' => 'DECIMAL',
        'constraint' => 10, 2,
        'null' => false
      ],
      'product_stock' => [
        'type' => 'MEDIUMINT',
        'constraint' => 8,
      ],
      'product_status' => [
        'type' => 'VARCHAR',
        'constraint' => 15,
        'default' => 'available'
      ],
      'product_image' => [
        'type' => 'VARCHAR',
        'constraint' => 50,
        'null' => true
      ],
      'created_at' => [
        'type' => 'DATETIME',
        'default' => new RawSql('CURRENT_TIMESTAMP')
      ]
    ]);
    $this->forge->addKey('id', true);
    $this->forge->createTable('products');
  }

  public function down()
  {
    $this->forge->dropTable('products');
  }
}

<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class OrderDetailsMigration extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'id' => [
        'type' => 'BIGINT',
        'constraint' => 15,
        'unsigned' => true,
        'auto_increment' => true,
      ],
      'order_id' => [
        'type' => 'INT',
        'constraint' => 7,
        'unsigned' => true,
        'null' => false,
      ],
      'product_id' => [
        'type' => 'INT',
        'constraint' => 6,
        'null' => false,
        'unsigned' => true
      ],
      'product_quantity' => [
        'type' => 'INT',
        'constraint' => 6,
        'null' => false,
        'unsigned' => true
      ],
      'product_price' => [
        'type' => 'INT',
        'constraint' => 6,
        'null' => false,
        'unsigned' => true
      ]
    ]);
    $this->forge->addKey('id', true);
    $this->forge->createTable('orderdetails');
  }

  public function down()
  {
    $this->forge->dropTable('orderdetails');
  }
}

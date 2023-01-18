<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class OrdersMigration extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'order_id' => [
        'type' => 'INT',
        'constraint' => 7,
        'unsigned' => true,
        'auto_increment' => true,
      ],
      'user_id' => [
        'type' => 'INT',
        'constraint' => 6,
        'null' => false,
        'unsigned' => true
      ],
      'total_price' => [
        'type' => 'DECIMAL',
        'constraint' => 10, 2,
        'unsigned' => true,
      ],
      'order_status' => [
        'type' => 'VARCHAR',
        'constraint' => 20,
        'default' => 'pending'
      ],
      'payment_method' => [
        'type' => 'VARCHAR',
        'constraint' => 20,
      ],
      'created_at' => [
        'type' => 'DATETIME',
        'default' => new RawSql('CURRENT_TIMESTAMP')
      ],
      'updated_at' => [
        'type' => 'DATETIME',
        'default' => new RawSql('CURRENT_TIMESTAMP')
      ],
    ]);
    $this->forge->addKey('order_id', true);
    $this->forge->createTable('orders');
  }

  public function down()
  {
    $this->forge->dropTable('orders');
  }
}

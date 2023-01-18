<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class OrdersDeliveryMigration extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'id' => [
        'type' => 'INT',
        'constraint' => 7,
        'unsigned' => true,
        'auto_increment' => true,
      ],
      'order_id' => [
        'type' => 'INT',
        'constraint' => 7,
        'unsigned' => true,
      ],
      'user_id' => [
        'type' => 'INT',
        'constraint' => 6,
        'null' => false,
        'unsigned' => true
      ],
      'dv_country' => [
        'type' => 'VARCHAR',
        'constraint' => 50,
      ],
      'dv_area' => [
        'type' => 'VARCHAR',
        'constraint' => 50,
      ],
      'dv_zip' => [
        'type' => 'MEDIUMINT',
        'constraint' => 5,
      ],
      'dv_address' => [
        'type' => 'VARCHAR',
        'constraint' => 1000,
      ],
      'dv_phone' => [
        'type' => 'VARCHAR',
        'constraint' => 20,
      ],
    ]);
    $this->forge->addKey('id', true);
    $this->forge->createTable('orders_delivery');
  }

  public function down()
  {
    $this->forge->dropTable('orders_delivery');
  }
}

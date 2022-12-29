<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Categories extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'cat_id' => [
        'type' => 'TINYINT',
        'constraint' => 3,
        'unsigned' => true,
        'auto_increment' => true,
      ],
      'category_name' => [
        'type' => 'VARCHAR',
        'constraint' => 20,
        'null' => false
      ]
    ]);
    $this->forge->addKey('cat_id', true);
    $this->forge->createTable('categories');
  }

  public function down()
  {
    $this->forge->dropTable('categories');
  }
}

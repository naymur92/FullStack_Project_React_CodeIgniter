<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

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
      ],
      'category_desc' => [
        'type' => 'VARCHAR',
        'constraint' => 1500,
        'null' => false
      ],
      'category_image' => [
        'type' => 'VARCHAR',
        'constraint' => 20,
      ],
      'created_at' => [
        'type' => 'DATETIME',
        'default' => new RawSql('CURRENT_TIMESTAMP')
      ],
      'updated_at' => [
        'type' => 'DATETIME',
      ],
    ]);
    $this->forge->addKey('cat_id', true);
    $this->forge->createTable('categories');
  }

  public function down()
  {
    $this->forge->dropTable('categories');
  }
}

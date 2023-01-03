<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\RawSql;
use CodeIgniter\Database\Migration;

class Users extends Migration
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
      'name' => [
        'type' => 'VARCHAR',
        'constraint' => 50,
        'null' => false
      ],
      'email' => [
        'type' => 'VARCHAR',
        'constraint' => 100,
        'unique' => true,
      ],
      'password' => [
        'type' => 'CHAR',
        'constraint' => 64,
      ],
      'role' => [
        'type' => 'VARCHAR',
        'constraint' => 15,
        'default' => 'user',
      ],
      'status' => [
        'type' => 'VARCHAR',
        'constraint' => 15,
        'default' => 'pending',
      ],
      'created_at' => [
        'type' => 'DATETIME',
        'default' => new RawSql('CURRENT_TIMESTAMP')
      ]
    ]);
    $this->forge->addKey('id', true);
    $this->forge->createTable('users');
  }

  public function down()
  {
    $this->forge->dropTable('users');
  }
}

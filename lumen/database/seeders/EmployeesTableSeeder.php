<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Employee;
class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Employee::create(['id' => 1, 'name' => 'Mario']);
        Employee::create(['id' => 2, 'name' => 'Giovanni']);
        Employee::create(['id' => 3, 'name' => 'Lucia']);

      
    }
}

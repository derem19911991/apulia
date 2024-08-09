<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\ProjectEmployee;
class ProjectEmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProjectEmployee::create(  [
            'project_id' => 1,
            'employee_id' => 1,
            'date' => '2021-08-27',
            'hours' => 5
        ]);
        ProjectEmployee::create(  
        [
            'project_id' => 2,
            'employee_id' => 2,
            'date' => '2021-08-31',
            'hours' => 3
        ]);
        ProjectEmployee::create(  
        [
            'project_id' => 1,
            'employee_id' => 1,
            'date' => '2021-09-01',
            'hours' => 3
        ]);
        ProjectEmployee::create(   
        [
            'project_id' => 1,
            'employee_id' => 3,
            'date' => '2021-09-01',
            'hours' => 3
        ]);
        ProjectEmployee::create(  [
            'project_id' => 2,
            'employee_id' => 1,
            'date' => '2021-08-27',
            'hours' => 2
        ]);
        ProjectEmployee::create(  [
            'project_id' => 2,
            'employee_id' => 2,
            'date' => '2021-09-01',
            'hours' => 4
        ]);

       
    }
}

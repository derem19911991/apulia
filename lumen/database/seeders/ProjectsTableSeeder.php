<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Project;
class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Project::create(['id' => 1, 'name' => 'Mars Rover']);
        Project::create(['id' => 2, 'name' => 'Manhattan']);
    }
}

<?php

namespace App\Http\Controllers;
use App\Project;
use App\ProjectEmployee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ProjectController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }


    public function index(Request $request)
    {
      
        $this->validate($request, [
            'aggr' => ['array'],
            'aggr.*' => ['required', 'in:project_id,employee_id', 'distinct'],
        ]);

        // start the query
        $query = ProjectEmployee::query();
        if($request->has('aggr'))
        {
          $query->select(array_merge($request->get('aggr'), [DB::raw('SUM(hours) as hours')]))
                ->groupBy($request->get('aggr'));

          $orderByFields = array_map(fn($field) => [$field],$request->get('aggr'));
          foreach ($orderByFields as [$field]) {
                $query->orderBy($field);
            }
        }
        else 
          $query->select('project_id','employee_id','hours','date');
        
        // load the relations
        
        $results = $query->with('project', 'employee')->get();
        
        return response()->json($results);
    }
    //
}

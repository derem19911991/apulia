<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectEmployee extends Model
{


    /**
     * Get the information record associated to the project.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}

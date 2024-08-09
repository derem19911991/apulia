const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = 3000;
const ProjectEmployee = require('./models/projectEmployee');
const connectDB = require('./config/mongoose');
connectDB();
app.use(cors());

// validation aggr
const validateAggr = (aggr) => {
  if (!Array.isArray(aggr)) return false;
  const validFields = ['project_id', 'employee_id'];
  return aggr.every(field => validFields.includes(field));
};

app.get('/', async (req, res) => {
  try {
    const aggr = req.query.aggr ? Array.isArray(req.query.aggr) ? req.query.aggr : [req.query.aggr] : [];

    // validation
    if (aggr && !validateAggr(aggr)) 
      return res.status(400).json({ error: "Invalid 'aggr' parameter. Must be an array with valid values [project_id,employee_id]." });

    let query;
 
  
    if (aggr && aggr.length > 0) 
    {
      const projectIdExists = aggr.includes('project_id');
      const employeeIdExists = aggr.includes('employee_id');
  
      // create the pipeline
      // case in which both aggregators are present
      let additionalFields = { employee: { $first: '$employee' },project: { $first: '$project' }};
      let groupStage = {
          _id: { project_id: '$project.id', employee_id: '$employee.id' },
          hours: { $sum: '$hours' }
        };
      
      //if one of the two is missing
      if(!employeeIdExists || !projectIdExists)
      {
        groupStage._id = `$${employeeIdExists ? 'employee.id' : 'project.id'}`;
        additionalFields = employeeIdExists ? { employee: { $first: '$employee' } }  : { project: { $first: '$project' } };
      }

      let sortStage = {};
      aggr.forEach(field => {
        if (field === 'project_id' && projectIdExists) 
          sortStage['project_id'] = 1; 
        else if (field === 'employee_id' && employeeIdExists) 
          sortStage['employee_id'] = 1; 
      });

      query = ProjectEmployee.aggregate([
        {
          $group: { ...groupStage, ...additionalFields } // Combine the fields
        },
        {
          $project: {
            _id: 0,
            project_id: projectIdExists ? '$_id.project_id' : null,
            employee_id: employeeIdExists ? '$_id.employee_id' : null,
            hours: 1,
            project: 1,
            employee: 1
          }
        },
        {
          $sort: sortStage 
        }
      ]);

    } 
    else
      query = ProjectEmployee.find({});
    
    const results = await query.exec();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "An error occurred", details: err.message });
  }
});


app.listen(port, () => {
});

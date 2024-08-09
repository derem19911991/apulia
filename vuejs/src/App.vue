<template>
  <div id="app">
    <div class="logo-container">
      <img alt="Vue logo" src="./assets/logo.webp" class="logo">
    </div>
    <div class="form-container">
      <div class="select-container">
        <label for="api">Api</label>
        <select v-model="api" @change="fetchData()" class="select" id="api">
          <option value="lumen">Lumen</option>
          <option value="node">Node</option>
        </select>
      </div>
     <div class="select-container">
        <label for="firstAggr">Raggruppamento</label>
        <select v-model="firstAggr" id="firstAggr" @change="changeAggr(1)" class="select">
          <option value="">Nessuna selezione</option>
          <option value="project_id">Progetto</option>
          <option value="employee_id">Impiegato</option>
        </select>
      </div>
      <div v-if="firstAggr != ''" class="select-container">
        <label for="secondAggr">Raggruppamento 2</label>
        <select v-model="secondAggr" id="secondAggr" @change="changeAggr(2)" class="select">
          <option value="">Nessuna selezione</option>
          <option value="project_id" v-if="firstAggr !='project_id'" >Progetto</option>
          <option value="employee_id" v-if="firstAggr !='employee_id'" >Impiegato</option>
        </select>
      </div>
    </div>
    </div>
    <div class="content">
      <AggregationTable :elements="elements" :columns="firstAggr != '' ? columns[firstAggr+secondAggr] : columns['all']"/>
    </div>
  
</template>


<script>
import AggregationTable from './components/AggregationTable.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    AggregationTable
  },
  data() {
    return {
      api:"lumen",
      firstAggr:"",
      secondAggr:"",
      columns:{
       'all':
        {
        'Project' : 'project.name',
        'Employee' : 'employee.name',
        'Date' : 'date',
        'Hours' : 'hours',
        },
        'project_id':
        {
        'Project' : 'project.name',
        'Hours' : 'hours',
        },
        'employee_id':
        {
        'Employee' : 'employee.name',
        'Hours'   : 'hours',
        },
        'project_idemployee_id':
        {
        'Project' : 'project.name',
        'Employee' : 'employee.name',
        'Hours' : 'hours',
        },
        'employee_idproject_id':
        {
         'Employee' : 'employee.name',
         'Project' : 'project.name',
         'Hours' : 'hours',
        }
      },
      elements: []   
    };
  },
  created()
  {
    this.fetchData();
  },
  methods: {
    async changeAggr(type){
 
      if(type == 1)
      {
        this.secondAggr = '';
      }
      await this.fetchData();
    },
    async fetchData() 
    {

      try {
        let apiUrl = this.api === 'node' ? process.env.VUE_APP_API_NODE : process.env.VUE_APP_API_LUMEN;      
      
        if(this.firstAggr != '')
        {
          apiUrl += '?aggr[0]='+this.firstAggr;
          if(this.secondAggr != '')
           apiUrl += '&aggr[1]='+this.secondAggr;
        }
        const response = await axios.get(apiUrl);
        this.elements = response.data;
        
      } catch (error) {
        this.elements = [];
        alert("Errore nella chiamata API:");
      }
    }
  }
}
</script>

<style scoped>
/* Contenitore per il logo */
.logo-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 150px;
}

/* Contenitore per il form */
.form-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Stile per i selettori */
.select-container {
  flex: 1;
  min-width: 200px;
}

.select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Stile per il bottone */
button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #379a6b;
}

/* Responsività */
@media (max-width: 768px) {
  .form-container {
    flex-direction: column;
    align-items: stretch;
  }

  .select-container {
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    text-align: center;
  }
}

</style>

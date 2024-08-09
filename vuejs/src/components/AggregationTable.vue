<template>
  <div  v-if="elements.length > 0">
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in columns" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in elements" :key="rowIndex">
          <td v-for="column in columns" :key="rowIndex + '-' + column">
            {{ getCellValue(row, column) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
      Nessun elemento trovato
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'AggregationTable',
  props: {
    columns: Object,
    elements: Array
  },
  data() {
    return { }
  },
  methods: {
    getCellValue(row, field) {
      let value = field.split('.').reduce((acc, key) => acc && acc[key] !== undefined ? acc[key] : '', row);
      if(field == 'date')
       return  moment(value).format('DD MMM YYYY');

      return value;
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
</style>

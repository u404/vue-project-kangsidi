<template>
  <history-data-manager class="budgete-data-wrap" :id="id" :only-year-select="true">
    <budget-data-table @loadedheader="setBaseData"></budget-data-table>
  </history-data-manager>
</template>

<script>
import HistoryDataManager from '@/components/HistoryDataManager'
import BudgetDataTable from '@/components/BudgetDataTable'
export default {
  data () {
    return {
      id: null,
      clearDataDialogDisplay: false,
      addDataDialogDisplay: false
    }
  },
  methods: {
    setBaseData (data) {
      this.id = data.id
    }
  },
  components: {
    BudgetDataTable,
    HistoryDataManager
  }
}
</script>

<style lang="scss" scoped>
.journal-data-wrap {
}
</style>

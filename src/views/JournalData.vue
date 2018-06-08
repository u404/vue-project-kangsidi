<template>
  <history-data-manager class="journal-data-wrap" :id="id">
    <journal-data-table @loadedheader="setBaseData"></journal-data-table>
  </history-data-manager>
</template>

<script>
import HistoryDataManager from '@/components/HistoryDataManager'
import JournalDataTable from '@/components/JournalDataTable'
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
    JournalDataTable,
    HistoryDataManager
  }
}
</script>

<style lang="scss" scoped>
.journal-data-wrap {
}
</style>

<template>
  <div class="table-wrap">
    <base-table class="journal-data-table" v-bind="$attrs" :list="dataList">
      <template slot="header" slot-scope="i">
        <th v-for="item in thList" :key="item">{{item}}</th>
      </template>
      <template slot-scope="iData">
        <td v-for="(val,key) of iData.item" :key="'td-'+key">{{val}}</td>
      </template>
    </base-table>
    <base-pager :count="pageCount" :default="defaultPage" @pagechange="loadDataList"></base-pager>
  </div>

</template>
<script>
export default {
  props: {
    inheritAttrs: false
  },
  data () {
    return {
      thList: [],
      dataList: [],
      defaultPage: 1,
      pageCount: 1,
      id: null
    }
  },
  beforeMount () {
    this.$services.manage.getJournalDataHeader().then(res => {
      this.$emit('loadedheader', res.data[0])
      this.thList = res.data[0].column_names.split(',')
      this.id = res.data[0].id
      this.loadDataList(this.defaultPage)
    })
  },
  methods: {
    loadDataList (page) {
      this.$services.manage
        .getPreviewDataList({
          config_id: this.id,
          page: page
        })
        .then(res => {
          this.pageCount = res.data.last_page
          this.dataList = res.data.data
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

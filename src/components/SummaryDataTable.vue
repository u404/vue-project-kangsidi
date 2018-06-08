<template>
  <div class="table-wrap">
    <base-table class="summary-data-table" :list="dataList">
      <template slot="header" slot-scope="i">
        <th>公司</th>
        <th>状态</th>
      </template>
      <template>
        <td></td>
      </template>
    </base-table>
    <base-pager :count="pageCount" :default="defaultPage" @pagechange="loadDataList"></base-pager>
  </div>

</template>
<script>
export default {
  props: {
    year: Number | String,
    month: Number | String
  },
  data () {
    return {
      dataList: [],
      defaultPage: 1,
      pageCount: 1
    }
  },
  methods: {
    loadDataList (page) {
      this.$services.manage
        .getProblemDataList({
          chart_name: 'huizongliebiao',
          param: {
            year: this.year,
            month: this.month
          }
        })
        .then()
        .catch()
    },
    load () {
      this.loadDataList(this.defaultPage)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

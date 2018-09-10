<template>
  <div class="table-wrap">
    <base-table class="filter-data-table" :list="dataList">
      <template slot="header" slot-scope="i">
        <th style="width: 1.2%;" v-for="(item, index) in tableColums" :key="'th-'+index">{{item.title}}</th>
        <th style="width: 1.2%;">操作</th>
      </template>
      <template slot-scope="iData">
        <td v-for="(item, index) in tableColums" :key="'td-'+index">{{iData.item[item.key]}}</td>
        <td class="base-center" v-if="iData.item.sum_is_report == 0">
          <span class="base-table-btn base-disabled">预览</span>
          <span class="base-table-btn base-disabled">编辑</span>
        </td>
        <td class="base-center" v-else>
          <span class="base-table-btn" @click="redirect(iData.item, true)">预览</span>
          <span class="base-table-btn" @click="redirect(iData.item, false)">编辑</span>
        </td>
      </template>
    </base-table>
    <base-pager :count="pageCount" :default="defaultPage" @pagechange="loadDataList"></base-pager>
  </div>

</template>

<script>
export default {
  props: {
    dataType: String,
    viewTypeConfig: Object,
    year: Number | String,
    month: Number | String,
    company: Number | String,
    variance: Number | String,
    variancePer: Number | String,
    builded: Boolean
  },
  data () {
    return {
      dataList: [],
      pageCount: 1,
      defaultPage: 1
    }
  },
  computed: {
    workParam () {
      let workParam = {
        Budget: 'huizongyusuan',
        Period: 'huizongtongqi'
      }
      return workParam[this.dataType]
    },
    tableColums () {
      return (
        (this.viewTypeConfig && this.viewTypeConfig.filterTableColums) || []
      )
    }
  },
  methods: {
    loadDataList (page) {
      this.$loading({
        title: '正在加载',
        msg: '正在加载数据，请稍后...'
      })
      this.$services.manage
        .getProblemDataList({
          work: this.workParam,
          page: page,
          params: {
            year: this.year,
            month: this.month < 10 ? '0' + this.month : this.month,
            company: this.company,
            ...this.viewTypeConfig.params,
            is_cate: 0
          }
        })
        .then(res => {
          this.$loading.close()
          this.dataList = res.data
        })
        .catch(err => {
          this.$loading.close()
          this.$dialog.alert({
            type: 'error',
            msg: err.msg
          })
        })
    },
    load () {
      this.loadDataList(this.defaultPage)
    },
    reset () {
      this.dataList = []
    },
    redirect (item, preview) {
      this.$router.push({
        name: 'ReasonReportEdit',
        params: {
          dataType: this.dataType,
          viewType: this.viewTypeConfig.key,
          operate: preview ? 'Preview' : 'Edit'
        },
        query: {
          year: this.year,
          month: this.month,
          company: this.company,
          option: item[this.viewTypeConfig.filterTableIdKey]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table-wrap {
  .filter-data-table {
    td.error {
      font-weight: bold;
      color: $color-error-2;
    }
  }
}
</style>

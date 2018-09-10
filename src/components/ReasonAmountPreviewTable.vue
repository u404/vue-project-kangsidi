<template>
  <div class="table-wrap">
    <base-table class="budget-data-table" v-bind="$attrs" :style="maxHeight?'max-height:'+maxHeight:''" :list="dataList">
      <template slot="header" slot-scope="i">
        <th v-for="(item, index) in viewTypeConfig.reasonAmountPreviewTableColums" :key="'th-'+index">{{item.title}}</th>
      </template>
      <template slot-scope="iData">
        <td v-for="(item, index) in viewTypeConfig.reasonAmountPreviewTableColums" :key="'th-'+index">{{getColText(iData.item, item)}}</td>
      </template>
    </base-table>
  </div>

</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    maxHeight: {
      type: String,
      defualt: ''
    },
    year: Number | String,
    month: Number | String,
    company: String,
    dataType: String,
    viewTypeConfig: Object,
    option: Number | String,
    report: String,
    level: Number
  },

  data () {
    return {
      dataList: [],
      defaultPage: 1
    }
  },
  computed: {
    workParam () {
      let workParam = {
        Budget: 'effectAmountYusuan',
        Period: 'effectAmontTongqi'
      }
      return workParam[this.dataType]
    }
  },
  methods: {
    loadDataList (page) {
      let extParams = {}
      extParams[this.viewTypeConfig.reportEditOptionKey] = this.option
      return this.$services.manage
        .getProblemDataList({
          work: this.workParam,
          params: {
            year: this.year,
            month: +this.month < 10 ? '0' + this.month : this.month,
            company: this.company,
            baobiao: this.report,
            ...this.viewTypeConfig.params,
            ...extParams,
            level: this.level
          }
        })
        .then(res => {
          this.dataList = res.data
        })
        .catch(err => {
          return Promise.reject(err)
        })
    },
    load () {
      return this.loadDataList(this.defaultPage)
    },
    getColText (rowData, colConfig) {
      let colData = rowData[colConfig.key]
      if (colConfig.type === 'amount') {
        return colData && colData.formatCurrency()
      } else if (colConfig.type === 'array') {
        return colData.join(',')
      }
      return colData
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

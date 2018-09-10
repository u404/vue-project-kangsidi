<template>
  <div class="fill-report-wrap">
    <div class="base-main-title">原因润色&gt;</div>
    <div class="base-main-panel">
      <div class="control-bar">
        <div class="time-filter-box flex">
          <base-select class="year-select" placeholder="请选择年" :options="selectYearCount" :base-number="selectYearBase" :selected="selectedYear" @change="value=>selectedYear=value"></base-select>
          <base-select class="month-select" placeholder="请选择月" :options="12" :selected="selectedMonth" @change="value=>selectedMonth=value"></base-select>
          <base-select class="company-select" placeholder="请选择公司" :options="companyList" :selected="selectedCompany" @change="value=>selectedCompany=value"></base-select>
          <span class="tips">提示：请同时选择年、月份和公司后进行筛选</span>
        </div>
        <div class="btn-box flex">
          <button class="base-btn base-line-btn query-btn" @click="query">查阅</button>
        </div>
      </div>
      <filter-table ref="filterTable" :year="selectedYear" :month="selectedMonth" :company="selectedCompany"></filter-table>
    </div>
  </div>
</template>

<script>
import utils from '@/assets/scripts/utils'
import FilterTable from '@/components/FillCenterReason/FilterTable'
export default {
  data () {
    return {
      companyList: [],
      selectedYear: '',
      selectedMonth: '',
      selectedCompany: ''
    }
  },
  computed: {
    selectYearBase () {
      return this.$config.selectBeginDate.getFullYear() - 1
    },
    selectYearCount () {
      return this.$config.selectEndDate.getFullYear() - this.selectYearBase
    },
    checkSelected () {
      if (this.selectedYear && this.selectedMonth && this.selectedCompany) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    setCache () {
      utils.localStorage.set('fillCenterReasonData', {
        selectedYear: this.selectedYear,
        selectedMonth: this.selectedMonth,
        selectedCompany: this.selectedCompany
      })
    },
    getCache () {
      let data = utils.localStorage.get('fillCenterReasonData')
      if (data) {
        this.selectedYear = data.selectedYear
        this.selectedMonth = data.selectedMonth
        this.selectedCompany = data.selectedCompany
        return true
      }
      return false
    },
    alertSelectError () {
      this.$dialog.alert({
        type: 'error',
        msg: '请同时选择三个条件后<br/>再进行“查阅”操作'
      })
    },
    query () {
      if (this.checkSelected) {
        this.$refs.filterTable.load()
        this.setCache()
      } else {
        this.alertSelectError()
      }
    }
  },
  beforeMount () {
    // 获取公司列表
    this.$services.manage
      .getPreviewDataList({
        config_id: 10
      })
      .then(res => {
        this.companyList = res.data.data.map(item => {
          return {
            value: item.b,
            text: item.b
          }
        })
      })
  },
  mounted () {
    if (this.getCache()) {
      this.$nextTick(() => {
        this.query()
      })
    }
  },
  components: {
    FilterTable
  }
}
</script>

<style lang="scss" src="./Index.scss" scoped>
</style>

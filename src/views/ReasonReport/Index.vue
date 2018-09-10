<template>
  <div class="reason-report-list-wrap">
    <div class="control-bar">
      <div class="time-filter-box flex">
        <base-select class="year-select" placeholder="请选择年" :options="selectYearCount" :base-number="selectYearBase" :selected="selectedYear" @change="value=>selectedYear=value"></base-select>
        <base-select class="month-select" placeholder="请选择月" :options="12" :selected="selectedMonth" @change="value=>selectedMonth=value"></base-select>
        <span class="tips" v-if="viewTypeConfig.noCompanySelect">提示：请同时选择年和月份后进行筛选</span>
        <template v-else>
          <base-select class="company-select" placeholder="请选择公司" :options="companyList" :selected="selectedCompany" @change="value=>selectedCompany=value"></base-select>
          <span class="tips">提示：请同时选择年、月份和公司后进行筛选</span>
        </template>
      </div>
      <div class="btn-box flex">
        <button class="base-btn base-line-btn query-btn" @click="query">查阅</button>
      </div>
    </div>
    <filter-table ref="filterTable" :dataType="dataType" :viewTypeConfig="viewTypeConfig" :year="selectedYear" :month="selectedMonth" :company="selectedCompany"></filter-table>
  </div>
</template>

<script>
import utils from '@/assets/scripts/utils'
import FilterTable from '@/components/ReasonReport/FilterTable'
import viewTypeHelper from './viewTypeHelper.js'
export default {
  props: {
    dataType: String,
    viewType: String
  },
  data () {
    return {
      companyList: [],
      selectedYear: '',
      selectedMonth: '',
      selectedCompany: ''
    }
  },
  computed: {
    viewTypeConfig () {
      return viewTypeHelper.getConfig(this.viewType)
    },
    selectYearBase () {
      return this.$config.selectBeginDate.getFullYear() - 1
    },
    selectYearCount () {
      return this.$config.selectEndDate.getFullYear() - this.selectYearBase
    },
    checkSelected () {
      if (this.selectedYear && this.selectedMonth) {
        if (this.viewTypeConfig && this.viewTypeConfig.noCompanySelect) {
          return true
        }
        if (
          this.viewTypeConfig &&
          !this.viewTypeConfig.noCompanySelect &&
          this.selectedCompany
        ) {
          return true
        }
      }
      return false
    }
  },
  watch: {
    viewType: {
      immediate: true,
      handler () {
        this.tryLoadCompanyList()
        if (this.getCache()) {
          this.$nextTick(() => {
            this.query()
          })
        } else {
          this.selectedYear = ''
          this.selectedMonth = ''
          this.selectedCompany = ''
          this.$nextTick(() => {
            this.$refs.filterTable.reset()
          })
        }
      }
    }
  },
  methods: {
    tryLoadCompanyList () {
      if (
        (this.viewTypeConfig && this.viewTypeConfig.noCompanySelect) ||
        this.companyList.length
      ) {
        return
      }
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
    setCache () {
      utils.localStorage.set(
        `fillReasonData_${this.dataType}_${this.viewType}`,
        {
          selectedYear: this.selectedYear,
          selectedMonth: this.selectedMonth,
          selectedCompany: this.selectedCompany
        }
      )
    },
    getCache () {
      let data = utils.localStorage.get(
        `fillReasonData_${this.dataType}_${this.viewType}`
      )
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
        msg:
          '请同时选择' +
          (this.viewTypeConfig && this.viewTypeConfig.noCompanySelect
            ? '两'
            : '三') +
          '个条件后<br/>再进行“查阅”操作'
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
  components: {
    FilterTable
  }
}
</script>

<style lang="scss" src="./Index.scss" scoped>
</style>

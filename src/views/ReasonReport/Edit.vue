<template>
  <div class="edit-wrap">
    <div class="base-main-panel control-panel">
      <div class="panel-child control-bar" v-if="!isPreview">
        <div></div>
        <div class="btn-box">
          <button class="base-btn base-line-btn save-btn" @click="save">保存</button>
          <button class="base-btn submit-btn" @click="submit">提交</button>
        </div>
      </div>
      <div class="panel-child detail-box" v-show="detailDisplay">
        <div class="budget-table-box">
          <reason-amount-preview-table ref="budgetTable" class="budget-table" :table-class="'view-table'" :scroll-pager="true" max-height="158px" :year="year" :month="month" :company="company" :dataType="dataType" :viewTypeConfig="viewTypeConfig" :option="activeOptionValue" :report="detailReport" :level="detailLevel"></reason-amount-preview-table>
        </div>
        <div class="journal-table-box" v-if="viewTypeConfig.params.is_sum">
          <reason-total-preview-table ref="journalTable" class="journal-table" :table-class="'view-table'" :scroll-pager="true" max-height="158px" :year="year" :month="month" :company="company" :dataType="dataType" :viewTypeConfig="viewTypeConfig" :option="activeOptionValue" :report="detailReport" :level="detailLevel"></reason-total-preview-table>
        </div>
      </div>
      <div class="panel-child filter-box">
        <div class="condition-box">
          <div class="condition-row">
            <span>{{year}}年</span>
            <span>{{month}}月</span>
          </div>
          <div class="condition-row">
            <span>{{company}}</span>
          </div>
        </div>
        <div class="selector-box">
          <div class="selector-tips">{{viewTypeConfig.optionTips}}</div>
          <ul class="option-list">
            <li class="option" :class="{active: activeOptionValue === item[viewTypeConfig.filterTableIdKey], disabled: item.sum_is_report == 0}" v-for="(item,i) in optionList" :key="'center-'+i" @click="item.sum_is_report > 0 && redirect(item)">{{item[viewTypeConfig.filterTableIdKey]}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="base-main-panel">
      <report-edit-table ref="reportTable" :dataType="dataType" :viewTypeConfig="viewTypeConfig" :is-preview="isPreview" :year="year" :month="month" :company="company" :option="activeOptionValue" @rowclick="previewDetail"></report-edit-table>
    </div>
  </div>
</template>

<script>
import ReasonAmountPreviewTable from '@/components/ReasonAmountPreviewTable'
import ReasonTotalPreviewTable from '@/components/ReasonTotalPreviewTable'
import ReportEditTable from '@/components/ReasonReport/ReportEditTable'
import viewTypeHelper from './viewTypeHelper.js'
export default {
  props: {
    dataType: String,
    viewType: String,
    isPreview: {
      type: Boolean,
      default: false
    },
    year: Number | String,
    month: Number | String,
    company: Number | String,
    option: Number | String
  },
  data () {
    return {
      optionList: [],
      activeOptionValue: '',

      variance: 0,
      variancePer: '0%',
      detailReport: '',
      detailDisplay: false,
      detailLevel: 1,
      submitWorkParam: 'yuanyinsubmit'
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
    viewTypeConfig () {
      return viewTypeHelper.getConfig(this.viewType)
    }
  },
  watch: {
    dataType: {
      immediate: true,
      handler () {
        this.loadBase()
      }
    },
    viewType: {
      immediate: true,
      handler () {
        this.loadBase()
      }
    },
    option: {
      handler (v) {
        this.activeOptionValue = v
        this.$nextTick(() => {
          this.loadReportList({})
          this.detailReport = ''
          this.detailDisplay = false
        })
      },
      immediate: true
    }
  },
  methods: {
    loadOptionList () {
      return this.$services.manage
        .getProblemDataList({
          work: this.workParam,
          params: {
            year: this.year,
            month: this.month < 10 ? '0' + this.month : this.month,
            company: this.company,
            ...this.viewTypeConfig.params,
            is_cate: 1
          }
        })
        .then(res => {
          this.optionList = res.data
        })
    },
    loadReportList () {
      this.$refs.reportTable.load()
    },
    previewDetail ({ baobiao }, level) {
      if (this.detailReport === baobiao) {
        // 取消重复点击加载
        return
      }
      this.detailLevel = level
      this.detailReport = baobiao
      this.$loading({
        title: '正在加载',
        msg: '正在加载数据，请稍后...'
      })
      this.$nextTick(() => {
        let promiseArr = [this.$refs.budgetTable.load()]
        if (this.viewTypeConfig.params.is_sum) {
          promiseArr.push(this.$refs.journalTable.load())
        }
        Promise.all(promiseArr)
          .then(() => {
            this.detailDisplay = true
            this.$loading.close()
          })
          .catch(err => {
            this.$loading.close()
            this.$dialog.alert({
              type: 'error',
              msg: err.msg
            })
          })
      })
    },
    redirect (item) {
      this.$router.replace({
        name: this.$route.name,
        params: this.$route.params,
        query: {
          ...this.$route.query,
          option: item[this.viewTypeConfig.filterTableIdKey]
        }
      })
    },
    save () {
      this.$dialog.alert({
        type: 'success',
        msg: '保存成功',
        onSure: () => {
          this.$router.go(-1)
        }
      })
    },
    submit () {
      let extParams = {}
      let keyName = this.viewTypeConfig.reportEditOptionKey
      extParams[keyName] = this.activeOptionValue
      this.$services.manage
        .updateData({
          work: this.submitWorkParam,
          params: {
            year: this.year,
            month: this.month < 10 ? '0' + this.month : this.month,
            company: this.company,
            ...this.viewTypeConfig.params,
            ...extParams
          }
        })
        .then(res => {
          this.$dialog.alert({
            type: 'success',
            msg: '提交成功',
            onSure: () => {
              this.$router.go(-1)
            }
          })
        })
        .catch(err => {
          this.$dialog.alert({
            type: 'error',
            msg: err.msg
          })
        })
    },
    loadBase () {
      this.loadOptionList()
    }
  },
  components: {
    ReasonAmountPreviewTable,
    ReasonTotalPreviewTable,
    ReportEditTable
  }
}
</script>

<style lang="scss" src="./Edit.scss" scoped></style>

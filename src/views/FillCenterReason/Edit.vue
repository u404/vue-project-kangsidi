<template>
  <div class="edit-wrap">
    <div class="base-main-title">填报列表&gt;</div>
    <div class="base-main-panel control-panel">
      <div class="panel-child control-bar" v-if="!isPreview">
        <div></div>
        <div class="btn-box">
          <button class="base-btn base-line-btn save-btn" @click="save">保存</button>
          <button class="base-btn submit-btn" @click="submit">提交</button>
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
          <div class="selector-tips">选择成本中心类别</div>
          <ul class="option-list">
            <li class="option" :class="{active: activeCenterCode === item.a}" v-for="(item,i) in centerList" :key="'center-'+i" @click="redirect(item.a, item.c)">{{item.a}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="base-main-panel">
      <report-edit-table ref="reportTable" :is-preview="isPreview" :year="year" :month="month" :company="company" :center-code="activeCenterCode" :center-class="activeCenterClass"></report-edit-table>
    </div>
  </div>
</template>

<script>
import ReportEditTable from '@/components/FillCenterReason/ReportEditTable'
export default {
  props: {
    isPreview: {
      type: Boolean,
      default: false
    },
    year: Number | String,
    month: Number | String,
    company: Number | String,
    center: {
      type: String,
      default: ''
    },
    centerClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      centerList: [],
      activeCenterCode: '',
      activeCenterClass: ''
    }
  },
  watch: {
    center: {
      handler (v) {
        this.activeCenterCode = v
        this.$nextTick(() => {
          this.loadReportList({})
        })
      },
      immediate: true
    },
    centerClass: {
      handler (v) {
        this.activeCenterClass = v
      },
      immediate: true
    }
  },
  methods: {
    loadCenterList () {
      return this.$services.manage
        .getPreviewDataList({
          config_id: 8
        })
        .then(res => {
          this.centerList = res.data.data
        })
    },
    loadReportList () {
      this.$refs.reportTable.load()
    },
    redirect (center, centerClass) {
      this.$router.replace({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          center: center,
          centerClass: centerClass
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
      this.$services.manage
        .updateData({
          work: 'wentisubmit',
          params: {
            year: this.year,
            month: this.month < 10 ? '0' + this.month : this.month,
            company: this.company,
            chengben: this.activeCenterCode,
            chenglei: this.activeCenterClass
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
    }
  },
  mounted () {
    console.log('mount')
    this.loadCenterList()
  },
  components: {
    ReportEditTable
  }
}
</script>

<style lang="scss" src="./Edit.scss" scoped></style>

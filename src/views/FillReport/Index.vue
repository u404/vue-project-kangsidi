<template>
  <div class="fill-report-wrap">
    <div class="base-main-title">问题清单&gt;</div>
    <div class="base-main-panel">
      <div class="control-bar">
        <div class="time-filter-box flex">
          <base-select class="year-select" placeholder="请选择年" :options="selectYearCount" :base-number="selectYearBase"></base-select>
          <base-select class="month-select" placeholder="请选择月" :options="12"></base-select>
          <base-select class="company-select" placeholder="请选择公司" :options="companyList"></base-select>
          <span class="tips">提示：请同时选择年、月份和公司后进行筛选</span>
        </div>
        <div class="btn-box flex">
          <button class="base-btn base-line-btn query-btn">查阅</button>
          <button class="base-btn report-btn" @click="buildConfirmDisplay=true">生成问题清单</button>
        </div>
      </div>
      <filter-table></filter-table>
      <base-pager :count="10"></base-pager>
    </div>
    <!-- <base-alert :show="true">
      <p>请同时选择三个条件后</p>
      <p>再进行“查阅”或“生成问题清单”操作</p>
    </base-alert> -->
    <!-- <base-alert :show="true">
      <div class="input-error-tips">
        <div class="tips-title">请输入正确的数字！</div>
        <div class="tips-content-wrap">
          <div class="tips-label">注意：</div>
          <div class="tips-content">
            <p>variance输入框数字为非负数，</p>
            <p>且小于全局variance；</p>
            <p>variance%输入框数字在0-100之间，</p>
            <p>且小于全局variance%</p>
          </div>
        </div>
      </div>
    </base-alert> -->

    <base-confirm class="build-dialog" title="生成问题清单" :show="buildConfirmDisplay" @cancel="buildConfirmDisplay=false" @sure="sure">
      <div class="form-item">
        <span class="form-label">variance</span>
        <input class="base-input form-input" type="text" placeholder="请输入数字" />
      </div>
      <div class="form-item">
        <span class="form-label">variance%</span>
        <input class="base-input form-input" type="text" placeholder="请输入数字" />
        <span class="form-text">%</span>
      </div>
    </base-confirm>

    <base-dialog class="confirm-dialog" :show="recoverConfirmDisplay" title="提示" :x="true" @close="recoverConfirmDisplay=false">
      <div class="confirm-dialog-msg">
        <p>问题清单已存在，</p>
        <p>是否继续生成并覆盖原始的问题清单结果？</p>
      </div>
      <template slot="footer">
        <div class="base-btn base-line-btn dialog-multi-btn" @click="recover">
          是
        </div>
        <div class="base-btn dialog-multi-btn" @click="recoverConfirmDisplay=false">
          否
        </div>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import FilterTable from '@/components/FillReport/FilterTable'
export default {
  data () {
    return {
      buildConfirmDisplay: false,
      recoverConfirmDisplay: false,
      companyList: [
        { value: '001', text: 'A公司' },
        { value: '002', text: 'B公司' }
      ]
    }
  },
  computed: {
    selectYearBase () {
      return this.$config.selectBeginDate.getFullYear() - 1
    },
    selectYearCount () {
      return this.$config.selectEndDate.getFullYear() - this.selectYearBase
    }
  },
  methods: {
    sure () {
      this.buildConfirmDisplay = false
      this.recoverConfirmDisplay = true
    },
    recover () {
      this.recoverConfirmDisplay = false
      this.$loading({
        title: '生成问题清单',
        msg: '正在覆盖旧的数据...'
      })
      setTimeout(() => {
        this.$loading.close()
        this.$dialog.alert({ msg: '生成成功', type: 'success' })
      }, 3000)
    }
  },
  components: {
    FilterTable
  }
}
</script>

<style lang="scss" src="./Index.scss" scoped>
</style>

<template>
  <div class="edit-wrap">
    <div class="base-main-title">问题清单&gt;</div>
    <div class="base-main-panel control-panel">
      <div class="control-bar">
        <div></div>
        <div class="btn-box">
          <button class="base-btn base-line-btn save-btn">保存</button>
          <button class="base-btn submit-btn">提交</button>
        </div>

      </div>
      <div class="detail-box">
        <div class="budget-table-box">
          <budget-preview-table class="budget-table" :table-class="'view-table'" :scroll-pager="true" max-height="158px"></budget-preview-table>
        </div>
        <div class="journal-table-box">
          <journal-preview-table class="journal-table" :table-class="'view-table'" :scroll-pager="true" max-height="158px"></journal-preview-table>
        </div>
      </div>
      <div class="filter-box">
        <div class="input-box">
          <div class="form-item">
            <span class="form-label">variance</span>
            <input class="base-input form-input" type="text" />
          </div>
          <div class="form-item">
            <span class="form-label">variance%</span>
            <input class="base-input form-input" type="text" />
          </div>
        </div>
        <div class="selector-box">
          <div class="selector-tips">选择成本中心编码</div>
          <ul class="option-list">
            <li class="option" v-for="i in 30" :key="i">1203</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="base-main-panel">
      <report-edit-table></report-edit-table>
    </div>
    <!-- <base-loading :show="true" title="正在加载" msg="正在上传中，请稍后..."></base-loading> -->
  </div>
</template>

<script>
import BudgetPreviewTable from '@/components/BudgetPreviewTable'
import JournalPreviewTable from '@/components/JournalPreviewTable'
import ReportEditTable from '@/components/FillReport/ReportEditTable'
export default {
  components: {
    BudgetPreviewTable,
    JournalPreviewTable,
    ReportEditTable
  }
}
</script>

<style lang="scss" src="./Edit.scss" scoped></style>

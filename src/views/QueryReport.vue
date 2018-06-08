<template>
  <div class="query-report-wrap">
    <div class="base-main-title">查询报告&gt;</div>
    <div class="base-main-panel">
      <query-config-table></query-config-table>
    </div>
    <div class="base-main-panel">
      <div class="panel-title">查询报告</div>
      <div class="query-box">
        <div class="form-item select-group">
          <select class="base-select">
            <option>请选择开始</option>
          </select>
          <select class="base-select">
            <option>请选择开始</option>
          </select>
          <span class="split-line">--</span>
          <select class="base-select">
            <option>请选择开始</option>
          </select>
          <select class="base-select">
            <option>请选择开始</option>
          </select>
        </div>
        <div class="btn-group">
          <button class="base-btn export-btn">导出报表</button>
        </div>
      </div>
      <div class="report-iframe-box">
        <div class="report-warning-tips">
          暂不支持可视化查询报告功能，请在BI下查看报告！
        </div>
        <iframe class="report-iframe" :src="iframeSrc" frameborder="1" v-show="iframeSrc"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import QueryConfigTable from '@/components/QueryConfigTable'
export default {
  data () {
    return {
      iframeSrc: ''
    }
  },
  components: {
    QueryConfigTable
  }
}
</script>
<style lang="scss" scoped>
.query-report-wrap {
  .base-main-panel {
    padding: 10px;
    .panel-title {
      margin-top: 5px;
      margin-bottom: 15px;
      padding-left: 10px;
      font-size: $font-h6;
      font-weight: bold;
      line-height: 1;
      color: $color-active-light;
      border-left: 5px solid $color-active-light;
    }
    .query-box {
      margin-bottom: 8px;
      @include flex;
      .select-group {
        @include flex;
        width: 404px;
        .split-line {
          color: $color-input-border;
        }
        .base-select {
          width: 90px;
          height: 22px;
          font-size: 12px;
        }
      }
      .btn-group {
        .export-btn {
          @include btn-size(110px, 25px);
        }
      }
    }
    .report-iframe-box {
      @include flex($jus: center);
      width: 100%;
      height: 625px;
      border: 1px solid $color-input-border;
      .report-warning-tips {
        line-height: 32px;
        padding-left: 42px;
        font-size: $font-h6;
        font-weight: bold;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          background: url(../assets/images/icons.png) 0 -145px no-repeat;
        }
      }
      .report-iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
}
</style>

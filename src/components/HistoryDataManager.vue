<template>
  <div class="history-data-manager">
    <div class="base-main-title">{{title}}&gt;</div>
    <div class="base-main-panel">
      <div class="control-bar">
        <div>
        </div>
        <div class="btn-box flex">
          <button class="base-btn base-line-btn clear-btn" @click="clearDataDialogDisplay=true">清空</button>
          <button class="base-btn add-btn" @click="addDataDialogDisplay=true">添加</button>
        </div>
      </div>
      <div class="table-title-box">
        <div class="table-title">数据预览</div>
        <div class="table-count-box">
          <span class="total-count">共 {{total}} 条</span>
          <span class="update-time">&nbsp;&nbsp;更新时间 {{updateTime.format('yyyy.MM.dd')}}</span>
        </div>
      </div>
      <slot></slot>
    </div>
    <base-dialog class="dialog clear-data-dialog" title="清空数据" :show="clearDataDialogDisplay" @close="clearDataDialogDisplay=false">
      <div class="select-tips">选择清空哪一时间段数据</div>
      <date-from-to-select class="form-item" :only-year-select="onlyYearSelect" :selected="selectedDate" @change="v=>{selectedDate=v}"></date-from-to-select>
      <div class="bottom-box">
        <div class="clear-tips">提示：清空后数据将不可恢复</div>
        <div class="btn-group">
          <button class="base-btn sure-btn" @click="checkSelectedData($event) && clearTips()">确认清空</button>
          <button class="base-btn base-line-btn cancel-btn" @click="this.clearDataDialogDisplay = false">取消</button>
        </div>
      </div>
    </base-dialog>
    <base-dialog class="dialog add-data-dialog" title="添加数据" :show="addDataDialogDisplay" @close="addDataDialogDisplay=false">
      <div class="select-tips">请选择上传哪一时间段的数据</div>
      <date-from-to-select class="form-item" :only-year-select="onlyYearSelect" :selected="selectedDate" @change="v=>{selectedDate=v}"></date-from-to-select>
      <div class="bottom-box">
        <div class="base-btn upload-btn">
          <span class="btn-text">上传本地文件</span>
          <input type="file" @change="upload" @click="checkSelectedData" />
        </div>
        <div class="upload-tips">仅支持xls(excel2003)文件格式<br/>单个文件建议控制在50MB以内</div>
      </div>
    </base-dialog>
  </div>
</template>

<script>
import DateFromToSelect from './DateFromToSelect'
export default {
  props: {
    // clearDataHandle: {
    //   type: Function,
    //   default: function (doSuccess, doFail) {}
    // },
    // addDataHandle: {
    //   type: Function,
    //   default: function (doSuccess, doFail, showRecoverTips) {}
    // },
    id: Number,
    title: {
      type: String,
      default: '问题清单'
    },
    onlyYearSelect: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    updateTime: {
      type: Date,
      default () {
        return new Date()
      }
    }
  },
  data () {
    return {
      clearDataDialogDisplay: false,
      addDataDialogDisplay: false,
      addDataId: null,
      selectedDate: {}
    }
  },
  methods: {
    clearSuccess (count) {
      this.clearDataDialogDisplay = false
      this.$dialog.alert({
        type: 'success',
        msg: `成功清除数据${count}条！`
      })
    },
    clearFail () {
      this.clearDataDialogDisplay = false
      this.$dialog.alert({
        type: 'error',
        msg: '清除数据失败！请重新清除！'
      })
    },
    clear () {
      this.$services.manage
        .deleteData({
          config_id: this.id,
          filter: {
            start:
              this.selectedDate.fromYear +
              '-' +
              (this.selectedDate.fromMonth < 10
                ? '0' + this.selectedDate.fromMonth
                : this.selectedDate.fromMonth) +
              '-01',
            end:
              this.selectedDate.toYear +
              '-' +
              (this.selectedDate.toMonth < 10
                ? '0' + this.selectedDate.toMonth
                : this.selectedDate.toMonth) +
              '-31'
          }
        })
        .then(res => {
          this.clearSuccess(res.data.DataCnt)
          this.$emit('change', { action: 'clear' })
        })
        .catch(err => {
          console.log(err)
          this.clearFail()
        })
    },
    clearTips () {
      this.$dialog.confirm({
        msg:
          `确认要清空` +
          (this.onlyYearSelect
            ? `${this.selectedDate.fromYear}年-${this.selectedDate.toYear}年`
            : `${this.selectedDate.fromYear}年${
              this.selectedDate.fromMonth
            }月-${this.selectedDate.toYear}年${
              this.selectedDate.toMonth
            }月`) +
          `的数据？<br/>清空后数据将不可恢复。`,
        onSure: () => {
          this.clear()
        },
        onCancel: () => {}
      })
    },
    checkSelectedData (e) {
      if (
        (this.onlyYearSelect &&
          (!this.selectedDate.fromYear || !this.selectedDate.toYear)) ||
        (!this.onlyYearSelect &&
          (!this.selectedDate.fromYear ||
            !this.selectedDate.toYear ||
            !this.selectedDate.fromMonth ||
            !this.selectedDate.toMonth))
      ) {
        e.preventDefault()
        this.$dialog.alert({
          type: 'error',
          msg: '请选择时间段！'
        })
        return false
      }
      return true
    },
    upload (e) {
      if (!e.target.files.length) {
        return
      }
      var formData = new FormData()
      formData.append('config_id', this.id)
      formData.append(
        'filter[start]',
        this.selectedDate.fromYear +
          '-' +
          (this.selectedDate.fromMonth < 10
            ? '0' + this.selectedDate.fromMonth
            : this.selectedDate.fromMonth) +
          '-01'
      )
      formData.append(
        'filter[end]',
        this.selectedDate.toYear +
          '-' +
          (this.selectedDate.toMonth < 10
            ? '0' + this.selectedDate.toMonth
            : this.selectedDate.toMonth) +
          '-31'
      )
      formData.append('excel_file', e.target.files[0])
      this.addDataDialogDisplay = false
      this.$loading({
        title: '正在上传',
        msg: '正在上传中，请稍后...'
      })
      this.$services.manage
        .uploadExcel({}, formData)
        .then(res => {
          this.$loading.close()
          this.alertSuccess()
          this.$emit('change', { action: 'add' })
        })
        .catch(err => {
          this.$loading.close()
          if (err.code === 2107) {
            this.recoverTips()
          } else {
            this.addFail(err.msg)
          }
        })
    },
    recover () {
      this.$loading({
        title: '正在上传',
        msg: '正在写入数据，请稍后...'
      })
      this.$services.manage
        .forceRecoverData({
          config_id: this.id,
          filter: null
        })
        .then(res => {
          this.$loading.close()
          this.alertSuccess()
          this.$emit('change', { action: 'add' })
        })
        .catch(err => {
          this.addFail(err.msg)
        })
    },
    recoverTips () {
      this.$dialog.confirm({
        msg:
          (this.onlyYearSelect
            ? `${this.selectedDate.fromYear}年-${this.selectedDate.toYear}年`
            : `${this.selectedDate.fromYear}年${
              this.selectedDate.fromMonth
            }月-${this.selectedDate.toYear}年${
              this.selectedDate.toMonth
            }月`) + `数据已存在，<br/>是否继续上传并覆盖原有数据？`,
        onSure: () => {
          this.recover()
        },
        onCancel: () => {}
      })
    },
    addSuccess () {
      this.addDataDialogDisplay = false
      this.$dialog.alert({
        type: 'success',
        msg: '添加数据成功！'
      })
    },
    addFail (msg) {
      this.addDataDialogDisplay = false
      this.$dialog.alert({
        type: 'error',
        msg: msg || '添加数据失败！'
      })
    }
  },
  components: {
    DateFromToSelect
  }
}
</script>

<style lang="scss" scoped>
.history-data-manager {
  .control-bar {
    @include flex();
    height: 72px;
    padding: 0 $margin-default;
    .btn-box {
      .clear-btn {
        @include btn-size(80px, 25px);
      }
      .add-btn {
        @include btn-size(80px, 25px);
        margin-left: $margin-default;
      }
    }
  }
  .table-title-box {
    margin-top: -20px;
    padding: 0 2px 8px;
    line-height: 1;
    .table-title {
      font-size: $font-h6;
      font-weight: bold;
    }
    .table-count-box {
      text-align: right;
    }
  }
  .dialog {
    /deep/ .dialog-main {
      width: 430px;
      .dialog-header {
        padding-left: 16px;
      }
      .dialog-body {
        padding: 0;
      }
    }
    .select-tips {
      margin: 14px 16px;
      text-align: left;
      line-height: 1;
    }

    /deep/ .select-group {
      margin: 0 15px 24px;
    }

    .bottom-box {
      height: 135px;
      @include flex(column);
      background: $color-bg-light;
    }

    &.clear-data-dialog {
      .bottom-box {
        padding: 40px 16px;
        .clear-tips {
          line-height: 1;
          font-size: 12px;
          color: $color-warning;
        }
        .btn-group {
          @include flex($jus: center);
          .base-btn {
            margin: 0 5px;
          }
          .sure-btn {
            @include btn-size(75px, 22px);
          }
          .cancel-btn {
            @include btn-size(60px, 22px);
          }
        }
      }
    }
    &.add-data-dialog {
      .bottom-box {
        padding: 28px 16px 30px;
        .upload-btn {
          @include btn-size(145px, 40px, 14px);
          @include upload-btn;
        }
        .upload-tips {
          line-height: 1.2;
          font-size: 12px;
          color: $color-warning;
        }
      }
    }
  }
}
</style>

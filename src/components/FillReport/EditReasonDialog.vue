<template>
  <base-dialog class="confirm-dialog reason-edit-dialog" :show="show" title="报表项差异原因编辑" :x="true" @close="triggerCancel">
    <table class="base-table">
      <tr>
        <th style="width: 1%;">选择</th>
        <th style="width: 8%;">差异原因</th>
        <th style="width: 2%;">影响金额</th>
      </tr>
      <tr v-for="(item,index) in list" :key="'table-row-' + index">
        <td>
          <base-check :single="false" :checked="isChecked(item)" @click="check(item)" :text="' '"></base-check>
        </td>
        <td>
          {{item.b}}
        </td>
        <td>
          <!-- <input class="base-input amount-input" :disabled="!isChecked(item)" @input="fixAmountInput($event, item)" @blur="fixAmountInput($event, item, true)" :value="item.amount||0" /> -->
          <input class="base-input amount-input" :disabled="!isChecked(item)" @focus="focusInput(item)" @input="fixInput($event)" @blur="blurInput($event)" :value="focusItem===item?editAmount:item.amount" />
        </td>
      </tr>
      <tr>
        <td>
          <base-check :single="false" :checked="customReasonChecked" :disabled="true" :text="' '"></base-check>
        </td>
        <td><input class="base-input reason-input" type="text" ref="reasonInput" v-model="customReasonText" placeholder="请输入自定义差异原因" /></td>
        <td>{{customReasonAmount}}</td>
      </tr>
    </table>
    <template slot="footer">
      <div class="base-btn base-line-btn dialog-multi-btn dialog-cancel-btn" @click="triggerCancel">
        取消
      </div>
      <div class="base-btn dialog-multi-btn dialog-sure-btn" @click="triggerSure">
        确认
      </div>
    </template>
  </base-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    },
    dataList: Array
  },
  data () {
    return {
      list: [],
      checkedList: [],
      customReasonText: '',
      inputTimer: null,

      focusItem: null,
      editAmount: 0
    }
  },
  computed: {
    totalAmount () {
      if (this.item) {
        return this.item.variance
      } else {
        return 0
      }
    },
    customReasonAmount () {
      let amount =
        this.totalAmount -
        this.checkedList.reduce((s, o) => s + (+o.amount || 0), 0)
      return Math.round(amount * 100) / 100
    },
    customReasonChecked () {
      return this.customReasonAmount > 0
    }
  },
  watch: {
    item: {
      immediate: true,
      handler () {
        this.updateData()
      }
    },
    dataList: {
      immediate: true,
      handler () {
        this.list = [...this.dataList]
        this.asyncReferenceListAndCheckedList()
      }
    }
  },
  methods: {
    check (item) {
      var index = this.checkedList.findIndex(o => o.a === item.a)
      if (index > -1) {
        this.checkedList[index].amount = 0
        this.checkedList.splice(index, 1)
      } else {
        this.checkedList.push(item)
      }
    },
    isChecked (item) {
      return !!this.checkedList.find(o => o.a === item.a)
    },
    focusInput (item) {
      this.focusItem = item
      this.editAmount = item.amount
    },
    fixInput (e) {
      // 输入框规则：
      // 默认值为0，允许为空，为空时实际值为0，失去焦点时变为0
      // 只允许输入合法的正负数字，允许两位小数
      // 输入框中值为0时，跟随输入数字或-号，会把原始的0替换掉
      // 当差异金额为正数时，每个输入框输入时，都会（防抖）校验所有输入框的总和不大于差异金额，否则，当前输入框会被替换为差值的临界值
      // 当差异金额为负数时，每个输入框输入时，都会（防抖）校验所有输入框的总和不小于差异金额，否则，当前输入框会被替换为差值的临界值
      if (this.inputTimer) {
        clearTimeout(this.inputTimer)
        this.inputTimer = null
      }
      var val = e.target.value
      if (val !== '' && val !== '-' && val !== '0-' && isNaN(+val)) {
        e.target.value = this.editAmount
      } else {
        e.target.value = this.editAmount = val
          .replace(/^(-?)0(\d|-)/, '$1$2')
          .replace(/(?<=\.\d{2})\d+/, '')
        this.focusItem.amount = +this.editAmount || 0
        this.inputTimer = setTimeout(() => {
          this.list = [...this.list]
          this.checkedList = [...this.checkedList]
          if (
            (this.totalAmount > 0 && this.customReasonAmount < 0) ||
            (this.totalAmount < 0 && this.customReasonAmount > 0)
          ) {
            let max =
              Math.round(
                (this.focusItem.amount + this.customReasonAmount) * 100
              ) / 100
            e.target.value = this.editAmount = max
            this.focusItem.amount = +this.editAmount
            this.list = [...this.list]
            this.checkedList = [...this.checkedList]
          }
        }, 300)
      }
    },
    blurInput (e) {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer)
        this.inputTimer = null
      }
      this.list = [...this.list]
      this.checkedList = [...this.checkedList]
      if (
        (this.totalAmount > 0 && this.customReasonAmount < 0) ||
        (this.totalAmount < 0 && this.customReasonAmount > 0)
      ) {
        let max =
          Math.round((this.focusItem.amount + this.customReasonAmount) * 100) /
          100
        e.target.value = this.editAmount = max
        this.focusItem.amount = +this.editAmount
      }
      this.focusItem = null
    },

    fixAmountInput (e, item, toNum) {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer)
        this.inputTimer = null
      }
      var val = e.target.value
      if (val !== '' && (isNaN(+val) || +val < 0)) {
        e.target.value = item.amount || 0
      } else {
        e.target.value = val.replace(/^0(\d)/, '$1')
        if (toNum) {
          item.amount = +val
          this.list = [...this.list]
          this.checkedList = [...this.checkedList]
        } else {
          item.amount = e.target.value
          this.inputTimer = setTimeout(() => {
            this.list = [...this.list]
            this.checkedList = [...this.checkedList]
          }, 300)
        }
      }
    },
    triggerCancel () {
      this.$emit('cancel')
    },

    triggerSure () {
      if (
        this.customReasonAmount !== 0 &&
        /^\s*$/.test(this.customReasonText)
      ) {
        this.$dialog.alert({
          msg: '剩余影响金额不为0，请填写其差异原因！',
          onSure: () => {
            this.$refs.reasonInput.focus()
          }
        })
        return
      }
      this.$emit('sure', {
        preReasonList: this.checkedList,
        customReason: this.customReasonChecked
          ? {
            text: this.customReasonText,
            amount: this.customReasonAmount
          }
          : null
      })
    },
    asyncReferenceListAndCheckedList () {
      // 同步list和checkedList中的元素的引用，初始化list中的amount值
      this.checkedList = this.list.filter(o => {
        let checked = this.checkedList.find(p => p.a === o.a)
        o.amount = (checked && checked.amount) || 0
        return !!checked
      })
    },
    updateData () {
      if (this.item) {
        let report = JSON.parse(this.item.report || null) || {}
        this.checkedList = report.preReasonList || []
        this.asyncReferenceListAndCheckedList()
        this.customReasonText =
          (report.customReason && report.customReason.text) || ''
      } else {
        this.checkedList = []
        this.customReasonText = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reason-edit-dialog {
  .base-table {
    tr {
      td {
        /deep/ .base-check {
          display: flex;
        }
        .base-input {
          border-top: none;
          border-left: none;
          border-right: none;
          background: transparent;
          text-align: center;
          &.amount-input {
            width: 100%;
          }
          &.reason-input {
            width: 100%;
          }
          &:disabled {
            border-bottom: 1px solid transparent;
          }
        }
      }
    }
  }
}
</style>

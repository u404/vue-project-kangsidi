<template>
  <div class="report-edit-wrap">
    <div class="report-total-tips">待解释{{unexplained}}条</div>
    <div class="base-table-box report-edit-table" style="max-height: 500px;">
      <div class="base-header-table-box" ref="headerBox">
        <table class="base-table base-header-table" :class="tableClass" ref="headerTable">
          <tr>
            <th style="width:2%;">报表项</th>
            <th>Budget</th>
            <th>Actual</th>
            <th>Variance</th>
            <th>Variance%</th>
            <th style="width: 2.4%;">差异原因</th>
          </tr>
        </table>
      </div>
      <div class="base-body-table-box" ref="bodyBox" @scroll.passive="onScroll">
        <table class="base-table base-body-table" :class="tableClass" ref="bodyTable">
          <tr>
            <th style="width:2%;"></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th style="width: 2.4%;"></th>
          </tr>
          <template v-for="(item1, index1) in list">
            <tr class="level-1" :key="'table-tr-'+index1" @click="toggleActive(index1)">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>
                <div class="flex">
                  <i class="icon-state" :class="!item1.state?'icon-state-error':'icon-state-success'"></i>
                  <span>-40%</span>
                </div>
              </td>
              <td></td>
            </tr>
            <template v-for="(item2,index2) in item1.children">
              <tr class="level-2" v-show="active[index1]" :key="'table-tr-' + index1 + '-'+index2" @click="toggleActive(index1, index2)">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <div class="flex">
                    <i class="icon-state" :class="!item2.state?'icon-state-error':'icon-state-success'"></i>
                    <span>-40%</span>
                  </div>
                </td>
                <td></td>
              </tr>
              <template v-for="(item3,index3) in item2.children">
                <tr class="level-3" v-show="active[index1] && active[index1][index2]" :key="'table-tr-' + index1 + '-' + index2 + '-' + index3">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>
                    <div class="flex">
                      <i class="icon-state" :class="item3.state?'icon-state-error':'icon-state-success'"></i>
                      <span>-40%</span>
                    </div>
                  </td>
                  <td v-if="isPreview">{{item3.reason}}</td>
                  <td class="reason-wrap" v-if="!isPreview">
                    <input class="reason-input" :class="{warning: !item3.reason}" type="text" v-model="item3.reason" />
                  </td>
                </tr>
              </template>
            </template>
          </template>
          <tr>
            <td colspan="6"></td>
          </tr>
        </table>
      </div>

      <div class="base-footer-table-box" ref="footerBox">
        <table class="base-table base-footer-table" :class="tableClass" ref="footerTable">
          <tr>
            <th style="width:2%;">总计</th>
            <th>Budget</th>
            <th>Actual</th>
            <th>variance</th>
            <th>variance%</th>
            <th style="width: 2.4%;"></th>
          </tr>
        </table>
      </div>

    </div>
  </div>

</template>

<script>
import utils from '@/assets/scripts/utils'
export default {
  props: {
    maxHeight: {
      type: Number,
      default: 500
    },
    tableClass: {
      type: String | Object | Array,
      default: null
    },
    triggerOffset: {
      type: Number,
      default: 80
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      list: [
        {
          children: [
            {
              children: [{}, {}, {}, {}]
            },
            {},
            {
              children: [
                {},
                {
                  reason: 'afadsfadsfasdf'
                },
                {},
                {
                  reason: 'afadsfadsfasdf'
                }
              ]
            }
          ]
        },
        {
          children: [
            {},
            {
              children: [{}, {}, {}, {}]
            }
          ]
        },
        {
          children: [
            {
              children: [{}, {}, {}, {}]
            },
            {
              children: [{}, {}, {}, {}]
            },
            {
              children: [{}, {}, {}, {}]
            },
            {}
          ]
        }
      ],
      active: {},
      unexplained: 0
    }
  },
  mounted () {
    this.activeChildren(this.list, this.active)
    this.active = { ...this.active } // 这里就为了强制进行一次数据绑定更新，否则监听不到对象内部的变更
    this.$nextTick(() => {
      this.autoSetHeaderPadding()
    })
  },
  watch: {},
  methods: {
    activeChildren (list, parentActive) {
      if (!list) {
        return
      }
      for (let i = 0, length = list.length; i < length; i++) {
        if (list[i].children) {
          parentActive[i] = {}
          this.activeChildren(list[i].children, parentActive[i])
        }
      }
    },
    autoSetHeaderPadding () {
      let scrollWidth =
        this.$refs.bodyBox.offsetWidth - this.$refs.bodyTable.offsetWidth
      this.$refs.headerBox.style.paddingRight = this.$refs.footerBox.style.paddingRight =
        scrollWidth + 'px'
    },
    toggleActive (index1, index2) {
      console.log(index1, index2)
      if (index2 === undefined) {
        if (this.active[index1]) {
          this.$set(this.active, index1, false)
        } else {
          this.$set(this.active, index1, {})
        }
      } else {
        var active1 = this.active[index1] || (this.active[index1] = {})
        if (active1[index2]) {
          active1[index2] = false
        } else {
          active1[index2] = true
        }
        this.$set(this.active, index1, { ...active1 })
      }
      this.$nextTick(() => {
        this.autoSetHeaderPadding()
      })
    },
    onScroll (e) {
      console.log('scroll')
      let scrollBottom =
        e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop

      if (scrollBottom < this.triggerOffset) {
        this.triggerScrollBottom()
      }
    },
    triggerScrollBottom: (function () {
      return utils.throttle(function () {
        // 节流方式触发事件
        console.log('滚动到底部了，触发事件')
        this.$emit('scrollBottom')
      }, 300)
    })()
  }
}
</script>

<style lang="scss" scoped>
.report-edit-wrap {
  padding-top: 8px;
  .report-total-tips {
    margin: 8px 0;
    padding: 0 4px;
    text-align: right;
    line-height: 1;
    color: $color-error-2;
  }
  .report-edit-table {
    .base-table {
      td {
        overflow: hidden;
      }
      tr.level-1 {
        td {
          background: $color-table-bg-3;
        }
      }
      tr.level-2 {
        td {
          background: $color-table-bg-2;
        }
      }
      tr.level-3 {
        td {
          background: $color-table-bg;

          &.reason-wrap {
            padding: 0;
            .reason-input {
              display: block;
              padding: 0 18px;
              width: 100%;
              height: 100%;
              border: none;

              &.warning {
                background: $color-table-bg-warning;
              }
              &:focus {
                background: $color-table-bg-1;
              }
            }
          }
        }
        // &:nth-of-type(2n + 1) {
        //   td {
        //     background: $color-table-bg-1;
        //   }
        // }
      }
      tr.level-1,
      tr.level-2 {
        cursor: pointer;
      }
      tr.level-2,
      tr.level-3 {
      }
    }
    .icon-state {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url(../../assets/images/icons.png) no-repeat;
      vertical-align: center;
      &.icon-state-error {
        background-position: -36px -40px;
      }
      &.icon-state-success {
        background-position: -54px -40px;
      }
    }
  }
}
</style>

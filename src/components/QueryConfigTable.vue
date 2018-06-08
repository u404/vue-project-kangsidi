<template>
  <base-table class="query-config-table" :list="tableList">
    <template slot="header" slot-scope="i">
      <th>汇总层级</th>
      <th>数字单位（阈值）</th>
      <th>单位名称</th>
    </template>
    <template slot-scope="slotData">
      <td>{{slotData.item.title}}</td>
      <td class="base-center config-col" :class="{active: editIndex===slotData.index}">
        <span class="num-input-box">
          <input :ref="'numInput' + slotData.index" class="base-input num-input" :style="{width: (1.5 + String(slotData.item.value).length*0.6 + 'em')}" v-model="editValue" @blur="editIndex=-1" />
        </span>
        <span class="num-text">
          {{slotData.item.value}}
          <i class="edit-icon" @click="edit(slotData.index)"></i>
        </span>
      </td>
      <td class="base-center">元</td>
    </template>
  </base-table>

</template>
<script>
export default {
  data () {
    return {
      tableList: [
        {
          title: '报表项一级',
          value: 1000,
          unit: '元'
        },
        {
          title: '报表项二级',
          value: 1000,
          unit: '元'
        },
        {
          title: '成本中心',
          value: 1000,
          unit: '元'
        },
        {
          title: '成本中心类别',
          value: 1000,
          unit: '元'
        },
        {
          title: '公司',
          value: 1000,
          unit: '元'
        },
        {
          title: '月份',
          value: 1000,
          unit: '元'
        }
      ],
      editIndex: -1,
      editValue: null
    }
  },
  watch: {
    editValue (v, ov) {
      if (v !== '' && isNaN(+v)) {
        this.editValue = ov
      } else {
        this.tableList[this.editIndex].value = +v
      }
    },
    editIndex (val) {
      console.log(val)
    }
  },
  methods: {
    edit (index) {
      this.editIndex = index
      this.editValue = this.tableList[index].value
      this.$nextTick(() => {
        this.$refs['numInput' + index].focus()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.query-config-table {
  .config-col {
    .num-input-box {
      display: none;
      min-width: 140px;
      line-height: 20px;
      border-bottom: 1px solid $color-active-dark;
      .num-input {
        min-width: 4em;
        width: 4em;
        padding: 0 0.5em;
        height: 16px;
        border: none;
        background: $color-active-lighter;

        font-size: 12px;
        text-align: center;
      }
    }

    .num-text {
      position: relative;
      .edit-icon {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 50%;
        margin-top: -9px;
        left: 100%;
        margin-left: 14px;
        cursor: pointer;
        background: url(../assets/images/icons.png) -18px -40px no-repeat;
        display: none;
      }
    }
    &:not(.active):hover {
      background: $color-bg-table-hover;
      .num-text {
        .edit-icon {
          display: block;
        }
      }
    }
    &.active {
      .num-input-box {
        display: inline-block;
      }
      .num-text {
        display: none;
      }
    }
  }
}
</style>

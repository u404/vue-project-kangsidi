<template>
  <div class="table-wrap">
    <base-table class="journal-data-table" v-bind="$attrs" style="min-width: 500px;" :style="maxHeight?'max-height:'+maxHeight:''" :list="tableList">
      <template slot="header" slot-scope="i">
        <th>凭证号</th>
        <th>科目名称</th>
        <th>摘要</th>
        <th>金额</th>
        <th>借贷</th>
        <th>订单编号</th>
      </template>
      <template slot-scope="iData">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </template>
    </base-table>
  </div>

</template>
<script>
export default {
  props: {
    inheritAttrs: false,
    maxHeight: {
      type: String,
      defualt: ''
    }
  },
  data () {
    return {
      tableList: [{}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

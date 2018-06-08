<template>
  <div class="table-wrap">
    <base-table class="budget-data-table" v-bind="$attrs" :style="maxHeight?'max-height:'+maxHeight:''" :list="tableList">
      <template slot="header" slot-scope="i">
        <th>预算科目全称</th>
        <th>金额</th>
      </template>
      <template>
        <td></td>
        <td></td>
      </template>
    </base-table>
  </div>

</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    maxHeight: {
      type: String,
      defualt: ''
    }
  },
  data () {
    return {
      tableList: [{}]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

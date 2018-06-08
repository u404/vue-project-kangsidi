<template>
  <div class="table-wrap">
    <base-table class="preview-table" :list="tableList">
      <template slot="header" slot-scope="i">
        <th v-for="item in thList" :key="item">{{item}}</th>
      </template>
      <template>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </template>
    </base-table>
    <base-pager :count="10"></base-pager>
  </div>

</template>
<script>
export default {
  props: {
    id: Number,
    thList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tableList: [{}]
    }
  },
  beforeMount () {
    if (this.id) {
      this.$services.manage.getPreviewDataList({
        config_id: this.id
      })
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

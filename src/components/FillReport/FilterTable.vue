<template>
  <base-table class="filter-data-table" :list="tableList">
    <template slot="header" slot-scope="i">
      <th style="width: 1.5%;">成本中心类别</th>
      <th style="width: 1.5%;">成本中心编码</th>
      <th style="width: 1.5%;">中心名称</th>
      <th>bugdet</th>
      <th>actual</th>
      <th>variance</th>
      <th>variance%</th>
      <th>需解释</th>
      <th>待解释</th>
      <th>创建时间</th>
      <th>状态</th>
      <th style="width: 1.5%;">操作</th>
    </template>
    <template>
      <td>成本中心类别</td>
      <td>成本中心编码</td>
      <td>中心名称</td>
      <td>bugdet</td>
      <td>actual</td>
      <td>variance</td>
      <td>variance%</td>
      <td>需解释</td>
      <td>待解释</td>
      <td>创建时间</td>
      <td>状态</td>
      <td class="base-center">
        <span class="base-table-btn">预览</span>
        <router-link class="base-table-btn" to="/FillReport/Edit">编辑</router-link>
      </td>
    </template>
  </base-table>
</template>

<script>
export default {
  props: {
    year: Number,
    month: Number,
    company: Number,
    variance: Number,
    variancePer: Number,
    builded: Boolean
  },
  data () {
    return {
      tableList: [{}]
    }
  }
}
</script>

<style>
</style>

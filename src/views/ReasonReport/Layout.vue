<template>
  <div class="reason-report-wrap">
    <div class="base-main-title">原因润色&gt;</div>
    <div class="base-tab">
      <ul class="tab-list">
        <li class="tab" :class="{active: checkTabIsActive(item)}" v-for="item in viewTypeConfigs" :key="item.key" @click="goViewType(item)">{{item.title}}</li>
      </ul>
      <ul class="content-list">
        <li class="content">
          <router-view></router-view>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import viewTypeHelper, { viewTypeConfigs } from './viewTypeHelper.js'
export default {
  props: {
    dataType: String,
    viewType: String
  },
  data () {
    return {
      viewTypeConfigs: viewTypeConfigs
    }
  },
  computed: {
    viewTypeLower () {
      return this.viewType.toLowerCase()
    }
  },
  methods: {
    checkTabIsActive (item) {
      return item.key.toLowerCase() === this.viewTypeLower
    },
    goViewType (item) {
      this.$router.push({
        name: 'ReasonReportIndex',
        params: {
          ...this.$route.params,
          viewType: item.key
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    to.params.viewType ||
      (to.params.viewType = viewTypeHelper.getDefaultConfig().key)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    to.params.viewType ||
      (to.params.viewType = viewTypeHelper.getDefaultConfig().key)
    next()
  }
}
</script>

<style>
</style>

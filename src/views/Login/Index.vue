<template>
  <div class="page page-center-wrap login-page">
    <div class="login-wrap">
      <div class="login-title">
        <div class="logo"></div>
      </div>
      <div class="form-row form-input-row">
        <span class="form-label">账号：</span>
        <div class="form-input-box">
          <i class="form-icon form-icon-user"></i>
          <input type="text" class="base-input form-input" v-model="account" placeholder="请输入账号" />
        </div>
        <div class="form-error" v-show="accountError">{{accountError}}</div>
      </div>
      <div class="form-row form-input-row">
        <span class="form-label">密码：</span>
        <div class="form-input-box">
          <i class="form-icon form-icon-lock"></i>
          <input type="password" class="base-input form-input" v-model="pwd" placeholder="请输入密码" @input="checkPwd" @blur="checkPwd" />
        </div>
        <div class="form-error" v-show="pwdError">{{pwdError}}</div>
      </div>
      <div class="form-row form-btn-row">
        <button class="base-btn form-btn flex-1" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['action', 'redirectUrl'],
  data () {
    return {
      account: '',
      pwd: '',
      accountError: '',
      pwdError: ''
    }
  },
  computed: {},
  watch: {
    account (val) {
      this.checkAccount()
    },
    pwd (val) {
      this.checkPwd()
    }
  },
  methods: {
    login () {
      if (this.checkAccount() && this.checkPwd()) {
        this.$store
          .dispatch('userLogin', {
            username: this.account,
            password: this.pwd
          })
          .then(() => {
            this.error = ''
            if (this.action === 'back') {
              this.$router.back()
            } else if (this.redirectUrl) {
              this.$router.replace(this.redirectUrl)
            } else {
              this.$router.replace('/')
            }
          })
          .catch(err => {
            this.pwdError = err.msg
          })
      }
    },
    checkAccount () {
      if (this.account === '') {
        this.accountError = '请输入账号'
        return false
      } else {
        this.accountError = ''
        this.pwdError = ''
        return true
      }
    },
    checkPwd () {
      if (this.pwd === '') {
        this.pwdError = '请输入密码'
        return false
      } else {
        this.pwdError = ''
        return true
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {})
  }
}
</script>

<style lang="scss" scoped src="./Index.scss">
</style>

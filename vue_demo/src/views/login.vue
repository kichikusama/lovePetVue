<template>
  <div style="width:400px;margin:100px auto">
    <h1>登录</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form label-width="80px">
      <el-form-item label="手机号：">
        <el-input
          placeholder="请输入账号"
          v-model="username"
          oninput="if(value.length>11)value=value.slice(0,11)"
          ref="gain"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          placeholder="请输入密码"
          show-password
          v-model="password"
          oninput="if(value.length>20)value=value.slice(0,20)"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="storeManagement_login"
          round
          :loading="isBtnLoading1"
          style="width:100%;"
        >门店管理员 登录</el-button>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="management_login"
          round
          :loading="isBtnLoading2"
          style="width:100%;background-color:green;"
        >平台管理员 登录</el-button>
      </el-form-item>
      <span type="primary" @click="register">没有账号？立即注册</span>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      showTishi: false,
      tishi: "",
      isBtnLoading1: false, //设置登录成功是跳转页面按钮的加载效果
      isBtnLoading2: false
    };
  },
  methods: {
    storeManagement_login() {
      this.$refs.gain.focus() //input框自动获取焦点
      let data1 = { username: this.username, password: this.password };
      if (!this.username || !this.password) {
        //输入为空判断
        this.$message.error("请输入用户名或密码");
      } else if (!/^1[3456789]\d{9}$/.test(data1.username)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data1.username == 0) {
        this.$message.error("该用户不存在");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data1.password)) {
        // 密码格式判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else if (data1.password == 0) {
        this.$message.error("密码不正确");
      } else {
        this.isBtnLoading1 = true;
        this.tishi = "登录成功";
        this.showTishi = true;
        // 跳转 门店管理员
        setTimeout(
          function() {
            this.showTishi = false;
            this.$router.push("/storeManagement");
          }.bind(this),
          1500
        );
      }
    },
    management_login() {
      this.$refs.gain.focus() //input框自动获取焦点
      let data2 = { username: this.username, password: this.password };
      if (!this.username || !this.password) {
        //输入为空判断
        this.$message.error("请输入用户名或密码");
      } else if (!/^1[3456789]\d{9}$/.test(data2.username)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data2.username == 0) {
        this.$message.error("该用户不存在");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data2.password)) {
        // 密码格式判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else if (data2.password == 0) {
        this.$message.error("密码不正确");
      } else {
        this.isBtnLoading2 = true;
        this.tishi = "登录成功";
        this.showTishi = true;
        // 跳转 平台管理员
        setTimeout(
          function() {
            this.showTishi = false;
            this.$router.push("/management");
          }.bind(this),
          1500
        );
      }
    },
    // 跳转 注册
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

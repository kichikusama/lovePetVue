<template>
  <div style="width:400px;margin:100px auto">
    <h1>注册</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form label-width="80px">
      <el-form-item label="用户名：">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="storeManagement_register"
          style="width:100%;"
          round
          :loading="isBtnLoading1"
        >门店管理员 注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="management_register"
          style="width:100%;"
          round
          :loading="isBtnLoading2"
        >平台管理员 注册</el-button>
      </el-form-item>
      <span type="primary" @click="login">已有账号？立即登录</span>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      showTishi: false,
      tishi: "",
      isBtnLoading1: false,
      isBtnLoading2: false,
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
    // 门店管理员 注册
    storeManagement_register() {
      if (!this.username || !this.password) {
        this.$message.error("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        console.log(data);
        if (data.username == 1 || data.password == 1) {
          this.tishi = "注册成功";
          this.showTishi = true;
          this.username = "";
          this.password = "";
          this.isBtnLoading1 = true;
          /*注册成功之后再跳回登录页*/
          setTimeout(
            function() {
              this.showTishi = false;
              this.$router.push("/");
            }.bind(this),
            1500
          );
        }
      }
    },
    // 平台管理员 注册
    management_register(){
       if (!this.username || !this.password) {
        this.$message.error("请输入用户名或密码");
      } else {
           let data = { username: this.username, password: this.password };
        console.log(data);
        if (data.username == 1 || data.password == 1) {
          this.tishi = "注册成功";
          this.showTishi = true;
          this.username = "";
          this.password = "";
          this.isBtnLoading2 = true;
          /*注册成功之后再跳回登录页*/
          setTimeout(
            function() {
              this.showTishi = false;
              this.$router.push("/");
            }.bind(this),
            1500
          );
        }

      }
    }
  }
};
</script>

<template>
  <div style="width:400px;margin:100px auto">
    <h1>登录</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form label-width="80px">
      <el-form-item label="用户名：">
        <el-input placeholder="请输入账号" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input placeholder="请输入密码" show-password v-model="password"></el-input>
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

      <el-form-item >
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
      isBtnLoading1: false,
      isBtnLoading2: false
    };
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  methods: {
    storeManagement_login() {
      if (!this.username || !this.password) {
        this.$message.error("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        console.log(data);
        if (data.username == 0) {
          this.$message.error("该用户不存在");
        } else if (data.password == 0) {
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
      }
    },
    management_login() {
      if (!this.username || !this.password) {
        // this.$message.error("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        console.log(data);
        if (data.username == 0) {
          this.$message.error("该用户不存在");
        } else if (data.password == 0) {
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
      }
    },
    // 跳转 注册
    register() {
      this.$router.push("/register"); 
    }
  }
};
</script>

<template>
  <div style="width:400px;margin:100px auto">
    <h1>注册</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form label-width="80px">
      <el-form-item label="手机号：">
        <el-input
          v-model="username"
          placeholder="请输入账号"
          oninput="if(value.length>11)value=value.slice(0,11)"
          ref="gain"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          v-model="password"
          placeholder="请输入密码"
          show-password
          oninput="if(value.length>20)value=value.slice(0,20)"
         
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="storeManagement_register"
          style="width:100%;"
          round
          :loading="isBtnLoading1"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >门店管理员 注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="management_register"
          style="width:100%;background-color:green;"
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
      isBtnLoading1: false, //设置注册成功时跳转页面按钮的加载效果
      isBtnLoading2: false
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
   
    // 门店管理员 注册
    storeManagement_register() {
      this.$refs.gain.focus() //input框自动获取焦点
      let data1 = { username: this.username, password: this.password };
      if (!this.username || !this.password) {
        //判断输入是否为空
        this.$message.error("请输入用户名或密码");
      } else if (!/^1[3456789]\d{9}$/.test(data1.username)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data1.username == 0) {
        //判断用户是否存在
        this.$message.error("改账号已注册");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data1.password)) {
        // 密码判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else {
        console.log(data1);
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
    },
    // 平台管理员 注册
    management_register() {
       this.$refs.gain.focus() //input框自动获取焦点
      let data2 = { username: this.username, password: this.password };
      if (!this.username || !this.password) {
        //判断输入是否为空
        this.$message.error("请输入用户名或密码");
      } else if (!/^1[3456789]\d{9}$/.test(data2.username)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data2.username == 0) {
        //判断用户是否存在
        this.$message.error("改账号已注册");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data2.password)) {
        //密码判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else {
        console.log(data2);

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
};
</script>

<template>
  <div style="width:400px;margin:100px auto" >
      <h1>login</h1>
    <el-form label-width="80px">
      <el-form-item label="用户名：">
        <el-input :value="this.$route.params.username" ></el-input>
      </el-form-item>
     <el-form-item label="密码：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="chooseServe_login">门店管理员 登录</el-button>
         <el-button type="primary" @click="management_login">平台管理员 登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    management_login() {
      this.$router.push(`/management`); // 跳转 平台管理员
    },
     chooseServe_login() {
      this.$router.push(`/chooseServe`); // 跳转 选择界面(新增门店，进入门店，进货管理)
    },
    register() {
      //   console.log(this);
      this.$router.push("/register");// 跳转 注册
    }
  }
};
</script>

<template>
  <div style="width:400px;margin:100px auto" >
      <h1>register</h1>
    <el-form label-width="80px">
      <el-form-item label="用户名：">
        <el-input v-model="username"></el-input>
      </el-form-item>
     <el-form-item label="密码：">
        <el-input v-model="password"></el-input>
      </el-form-item>
     
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data(){
      return {
          username:'',
          password:''
      }
  },
  methods: {
    login() {
      this.$router.push({ path: `/login/${this.username}/${this.password}`}) // 跳转
      console.log(this);
      
    }
  }
};
</script>

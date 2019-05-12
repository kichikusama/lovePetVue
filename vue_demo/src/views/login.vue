
<template>
  <div style="width:400px;margin:100px auto">
    <h1>登录</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form label-width="80px">
      <el-form-item label="手机号：">
        <el-input
          placeholder="请输入手机号"
          v-model="userPhone"
          oninput="if(value.length>11)value=value.slice(0,11)"
          ref="gain"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          placeholder="请输入密码"
          v-model="userPwd"
          oninput="if(value.length>20)value=value.slice(0,20)"
          show-userPwd
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="storeManagement_login({userPhone,userPwd})"
          round
          :loading="isBtnLoading"
          style="width:100%;background-color:green;"
        >登录</el-button>
      </el-form-item>

      <span type="primary" ><a href="#" @click.prevent="register">没有账号？立即注册</a></span>
      <!-- <el-button
          type="primary"
          @click="checkCookie"
          round
          :loading="isBtnLoading"
          style="width:100%;"
        >cookie</el-button> -->
    </el-form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("users");

export default {
  name: "login",
  data() {
    return {
      userPhone: "",
      userPwd: "",
      showTishi: false,
      tishi: "",
      isBtnLoading: false //设置登录成功是跳转页面按钮的加载效果
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    //  ...mapMutations(["storeManagement_login", "management_login"]),
    ...mapActions(["loginAsync"]),
    // 门店管理员 登录
    storeManagement_login(user) {
      this.$refs.gain.focus(); //input框自动获取焦点
      let data = { userPhone: this.userPhone, userPwd: this.userPwd };
      if (!this.userPhone || !this.userPwd) {
        //输入为空判断
        this.$message.error("请输入用户名或密码");
      } else if (!/^1[356789]\d{9}$/.test(data.userPhone)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data.userPhone == -1) {
        this.$message.error("该用户不存在");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data.userPwd)) {
        // 密码格式判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else if (data.userPwd == 0) {
        this.$message.error("密码不正确");
      } else {
        this.isBtnLoading = true;

        // this.showTishi = true;
        // 跳转 门店管理员
        this.loginAsync(user).then(res => {
          console.log(res);
          if (res.length > 0) {
            this.tishi = "登录成功";
            document.cookie = "id=" + res[0]._id;
            // this.checkCookie(res[0]._id); // 创建cookie
            if(res[0].userType == "1"){
              this.$router.push("/management"); // 跳转 平台管理 页面
            }else if(res[0].userType == "0"&&res[0].userStatus == "1"){
               this.$router.push("/chooseServe"); // 跳转页面
            }else{
              alert("账号审核中，请耐心等待...");
            }
          }
        });
      }
    },
    // 跳转 注册
    register() {
      this.$router.push("/register");
    }
    // cookie
  }
};
</script>

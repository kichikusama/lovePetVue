<template>
  <div style="width:400px;margin:100px auto">
    <h1>注册</h1>
    <p v-show="showTishi" style="color:red">{{tishi}}</p>
    <el-form :label-position="labelPosition" label-width="80px">
      <!-- <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>-->
      <el-form-item label="姓名：">
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input
          v-model="username"
          placeholder="请输入账号"
          oninput="if(value.length>11)value=value.slice(0,11)"
          ref="gain"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="mailbox" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="登录名：">
        <el-input v-model="acount" placeholder="请输入登录名"></el-input>
        <span style="font-size:12px">为你的账号取一个昵称吧</span>
      </el-form-item>
      <el-form-item label="证件照：">
        <div class="input">
        
          <el-upload
            action="/users/addUser"
            list-type="picture-card"
            :on-success="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img width="100%" :src="add.image" alt>
          </el-dialog>
        </div>
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
          style="width:100%;background-color:green;"
          round
          :loading="isBtnLoading"
        >提交</el-button>
      </el-form-item>

      <span type="primary">
        <a href="#" @click.prevent="login">已有账号？立即登录</a>
      </span>
    </el-form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);
export default {
  name: "Register",
  data() {
    return {
      labelPosition: "right",
      add: {
        userName: "",
        userPhone: "",
        userMail: "",
        userAcount: "",
        userPwd: "",
        image:"",
      },
      username: "", //账号
      password: "", //密码
      name: "", //姓名
      mailbox: "", //邮箱
      acount: "",

      showTishi: false,
      tishi: "",
      isBtnLoading: false //设置注册成功时跳转页面按钮的加载效果
    };
  },
  methods: {
    ...mapActions(["addUserAsync"]),
    login() {
      this.$router.push("/");
    },
   handleRemove(file, fileList) {
      console.log(file, fileList);
    },
   handlePictureCardPreview(file,a) {
     console.log(a);
     
      this.add.image = a.name;
    },
    //  heardPictureCardPreview(file) {
    //    this.add.image = file.data.url;
    // },
    // 门店管理员 注册
    storeManagement_register() {
      // console.log("in");
      let add = {
        userName: this.name,
        userPhone: this.username,
        userMail: this.mailbox,
        userAcount: this.acount,
        userPwd: this.password,
        image:this.add.image
      };

      this.$refs.gain.focus(); //input框自动获取焦点
      let data = {
        username: this.username,
        password: this.password,
        name: this.name,
        mailbox: this.mailbox
      };
      if (!this.username || !this.password || !this.name || !this.mailbox) {
        //判断输入是否为空
        this.$message.error("填写信息不能为空");
      } else if (!/^1[356789]\d{9}$/.test(data.username)) {
        //手机号判断
        this.$message.error("电话号格式错误");
      } else if (data.username == 0) {
        //判断用户是否存在
        this.$message.error("改账号已注册");
      } else if (!/^[0-9a-zA-Z]{6,20}$/.test(data.password)) {
        // 密码判断
        this.$message.error("密码格式错误，密码由6-20位数字，字母组成");
      } else if (!/^([\u4E00-\u9FA5A-Za-z]{2,20})+$/.test(data.name)) {
        // 姓名判断
        this.$message.error("姓名格式错误，只能输入中文名和英文名");
      } else if (
        // 邮箱判断
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          data.mailbox
        )
      ) {
        this.$message.error("邮箱格式错误");
      } else {
        console.log(data);
        this.tishi = "注册成功";
        // this.showTishi = true;
        this.username = "";
        this.password = "";
        this.isBtnLoading = true;
        this.addUserAsync(add).then(res => {
          if (res) {
            alert("审核中，请耐心等待...");
            //  this.showTishi = false;
            this.$router.push("/");
          }
        });
        /*注册成功之后再跳回登录页*/
        // setTimeout(
        //   function() {

        //   }.bind(this),
        //   1500
        // );
      }
    }
  }
};
</script>


<template>
  <el-container>
    <el-header>爱宠邦</el-header>

    <el-main>
      <div style=" display: flex;justify-content: space-around;">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <el-select v-model="value" clearable placeholder="请选择门店">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="storeManagement_login">进入门店</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <div style="height:40px"></div>
                <div>
                  <h2>{{userId}}</h2>
                </div>
                <el-button type="text" class="button" @click="addStore">门店管理</el-button>
               
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <div style="height:40px"></div>
                <el-button type="text" class="button" @click="stock">进货管理</el-button>
              </div>
            </div>
          </el-card>
        </el-col>>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      userId: "",  // 保存 cookie 
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "黄金糕"
    };
  },
  methods: {
    storeManagement_login() {
      this.$router.push(`/storeManagement`); // 跳转到门店页面
    },
    addStore() {
      this.$router.push(`/manageStore`);
    },
    stock() {
      this.$router.push("/stock");
    },
  },
  mounted() {
    var ca = document.cookie.split("=");  // cookie
    this.userId = ca[1];
  }
};
</script>
<style>
.el-header {
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
  height: 670px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
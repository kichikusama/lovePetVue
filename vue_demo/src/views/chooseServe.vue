
<template>
  <el-container>
    <el-header style="font-size:40px; color:white;height:80px;font-weight:bold;background-color:green;">爱宠邦</el-header>

    <el-main>
      <div style="display: flex;justify-content: space-around;">
        <el-col :span="6">
          <el-card  shadow="always" style="width:100%;height:100%;">
            <img
              src="../../img/进入门店.jpg"
              class="image"
              style="width:100%;height:100%"
            >
            
            <div style="padding: 14px;" >
              <el-select v-model="value" clearable>
                <el-option
                  v-for="item in shops"
                  :key="item._id"
                  :label="item.shopName"
                  :value="item._id"
                ></el-option>
              </el-select>
              <div style="height:40px"></div>
              <div class="bottom clearfix;" >
                <el-button type="primary" class="button" @click="storeManagement_login"  style="font-size:20px;background-color:green;">进入门店</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card  shadow="always" style="width:100%;height:100%;" >
            <img
              src="../../img/门店管理.jpg"
              class="image"
             style="width:100%;height:100%"
            >
            <div style="height:100px"></div>
            <div style="padding: 14px;">
              <div class="bottom clearfix" style="display: flex;justify-content: space-around;" >
              
                <el-button type="primary" class="button" @click="addStore"  style="font-size:20px;background-color:green;">门店管理</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card  shadow="always" style="width:100%;height:100%;">
            <img
              src="../../img/进货管理.jpg"
              class="image"
              style="width:100%;height:100%"
            >
            <div style="height:147px"></div>
            <div style="padding: 14px;">
              <div class="bottom clearfix" style="display: flex;justify-content: space-around;">
                <el-button type="primary" class="button" @click="stock"  style="font-size:20px;background-color:green;">进货管理</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState,mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
   data() {
      return {
         userId: "",  // 保存 cookie 
        value: '选择门店',
        useId:'',
      }
    },
  computed: {
    ...mapState(["shops"]),
  },
  methods: {
    ...mapActions(["getAllShopsAsync"]),
    storeManagement_login() {
      this.$router.push(`/storeManagement`); // 跳转到门店页面
      document.cookie = "shopId=" + this.value;
    },
    addStore() {
      this.$router.push(`/manageStore`);
    },
    stock() {
      this.$router.push("/stock");
    },

  },
  mounted() {
    let userId;
    for(let item of document.cookie){
      if(item==';'){
       var ca= document.cookie.split(';');
        userId=ca[0].split('=')[1];
        break
      }else if(item=='='){
        userId=document.cookie.split('=')[1]
      }
    }
    this.userId=userId
    // console.log(this.userId)
    //  var ca = document.cookie.split('=');
    // this.userId=ca[1];
    // for(var i=0; i<ca.length; i++) {
    //     var c = ca[i].trim();
    //     if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    // }



    // var ca = document.cookie;  // cookie   .split("=")
    // this.userId = ca;//[1]
     this.getAllShopsAsync({userId:this.userId})
  }
};
</script>
<style scope>
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
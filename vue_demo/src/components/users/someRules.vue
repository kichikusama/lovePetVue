<template>
  <div class="main">
    <h3>管理须知</h3>
    <div id="box" class="textStyle">
      <p>你好，编号<b>{{userId}}</b></p>
      <p>为了爱宠邦平台的健康发展，作为平台管理员，我们有义务以身作则，为商家提供一个优质的服务环境，为众用户提供一个温馨的购买渠道。</p>
      <p>这里有一些规则，你可能需要知道:</p>
      <p>
        <b>1.杜绝假货</b>
      </p>
      <p>
        <b>2.杜绝刷单</b>
      </p>
      <p>
        <b>3.杜绝恶劣态度</b>
      </p>
      <p>一旦在您的监督下，发现商家有以上行为，平台将赋予你一些权限，来有效遏制这些违规操作</p>

      <el-radio v-model="isRead" label="1" @change="disabledButton">我已阅读</el-radio>
      <p style="text-align:right;padding-right:450px">
        <el-button
          type="primary"
          :disabled="isDisbled"
          style="width:150px;height:50px;line-height:10px;"
          @click="readed"
        >开始你的表演</el-button>
      </p>
    </div>
  </div>
</template>
  

<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);
export default {
  name: "SomeRules",
  data() {
    return {
      isRead: "0",
      isDisbled: true,
      userId:""
    };
  },
  computed: {
    ...mapState(["rulesRead"])
  },
  methods: {
     ...mapMutations(["setRulesRead"]), 
    disabledButton() {
      this.isDisbled = false;
    },
    readed(){
      this.setRulesRead();
      this.$router.push({ path: `/management/users` }); // 跳转  /${userNow}

    }
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
    this.userId = userId;
  },
};
</script>
<style scope>
.main {
  width: 80%;
}
.textStyle {
  box-sizing: border-box;
  padding-left: 20px;
}
#box p {
  text-align: left;
}
</style>
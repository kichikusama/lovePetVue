<template>
  <div class="box">
      <div class="show">
         <p v-for="item in messages" :key="item._id" class="pStyle">
           <b class="nameStyle">{{item.name}}:</b><span>{{item.content}}</span>
         </p>
      </div>
    <div class="messageArea">
      <el-form ref="form" label-width="80px">
        <el-form-item label="姓名：" v-model="newName">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="留言：">
          <el-input type="textarea" v-model="newContent"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">留言</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "messages"
);
export default {
  name: "messages",
  data() {
    return {
      newName: "",
      newContent:'',
    };
  },
  computed:{
      ...mapState(['messages'])
  },
    methods:{
      ...mapActions(["messagestAsync","addMessageAsync"]),
     
  },
  mounted() {
    // 生命周期函数
    this.messagestAsync();
    this.addMessageAsync();
    // console.log(this.films);

    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
  },

};
</script>
<style>
.show{
    width: 100%;
    height: 200px;
    border:1px solid;
}
.box {
  width: 70%;
    border:1px solid;
  margin: 100px auto;
}
.messageArea{
    width: 50%;
    margin-bottom: 20px;
}
.nameStyle{
  display: inline-block;
     width:100px;
     text-align: right;
     margin-right: 20px;
}
.pStyle{
  height: 50px;
  border-bottom: 1px solid gray;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>


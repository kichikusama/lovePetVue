<template>
  <div class="main">
    <el-container>
     <h3 style="background-color:white;text-align:center">所有门店</h3>
      <el-main>
        <div>
          <div>
           <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#C0C4CC"
            active-text-color="#ffd04b"
            text-color="#fff"
          >
            <!-- <el-menu-item index="1">新增用户</el-menu-item> -->
            <el-submenu index="2">
              <template slot="title">
                <span @mouseenter="auditingShops">处理中心</span>
              </template>
              <el-menu-item index="/management/shopsAuditing" @click="skipToShopsAuditing">
                待审核门店
                <!-- <b style="color:red;font-size:10px">+{{auditingUsers.length}}</b> -->
              </el-menu-item>
              <!-- <el-menu-item index="/management/disabledUsers" @click="skipToDisabled">违规用户</el-menu-item> -->
            </el-submenu>
            <!-- <el-menu-item index="3">
             
              <el-badge :value="rulesRead" class="iconItem">
                 <a href="#/management/someRules">管理须知</a>
              </el-badge>
            </el-menu-item> -->
          </el-menu>
         </div>
          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" class="input-with-select" v-model="text">
              <el-select v-model="type" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="门店名称" value="shopName"></el-option>
                <el-option label="电话" value="shopTel"></el-option>
                <el-option label="营业地址" value="shopAdd"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search" @click="getShopsAsync({type,text})"></el-button>
            </el-input>
          </div>

          <el-table :data="shops" center="all" style="width: 100%;text-align:center;" border>
            <el-table-column prop="shopName" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="shopLicenceNum" label="营业执照号码" width="100"></el-table-column>
            <!-- <el-table-column prop="shopLicenceImg" label="营业执照照片" width="100">
              <template slot-scope="scope">
                <img :src="scope.row.shopLicenceImg" alt style="width:100px;height:100px">
              </template>
            </el-table-column> -->
            <el-table-column prop="shopAdd" label="营业地址" width="100"></el-table-column>
            <el-table-column prop="shopLocation" label="定位" width="100"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="100"></el-table-column>
            <el-table-column prop="shopTel" label="联系电话" width="100"></el-table-column>
            <el-table-column prop="shopFeature" label="特色" width="100"></el-table-column>
            <el-table-column prop="shopCommission" label="佣金比例" width="100"></el-table-column>
            <el-table-column label="店员组成" width="100" fixed="right">
              <template slot-scope="scope">
                <a href="#"
                  size="mini"
                  type="primary"
                  circle
                  class="aStyle"
                  icon="el-icon-search"
                  @click.prevent="member(scope.row.shopEmployee)"
                >详情</a>
                <!-- <el-table-column
                  prop
                  label="店员"
                  width="120"
                  v-for="item in scope.row.shopEmployee"
                  :key="item.empLevel"
                >{{item.empName}}/{{item.empLevel}}/{{item.empPhone}}</el-table-column>-->
              </template>
            </el-table-column>
            <el-table-column label="操作" width="150" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="revision(scope.row._id)">修改</el-button>
                <el-button size="mini" type="danger" @click="deteleShopsAsync(scope.row._id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            @size-change="setEachPage"
            @current-change="setCurPage"
            :current-page.sync="currentPage"
            :page-sizes="[5, 15, 20, ]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>

          <el-dialog title="门店信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="门店名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="营业地址" :label-width="formLabelWidth">
                <el-input v-model="form.site" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            
          </el-dialog>

          <el-dialog title="店员信息" :visible.sync="dialog">
            <el-table :data="members">
              <el-table-column property="empName" label="姓名" width="150"></el-table-column>
              <el-table-column property="empLevel" label="等级" width="200"></el-table-column>
              <el-table-column property="empPhone" label="电话"></el-table-column>
            </el-table>
          </el-dialog>


        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "shops" // 从状态机中获取 数据
);

export default {
  name: "Stores",
  data() {
    return {
      type: "", // 搜索条件
      text: "",
      dialogFormVisible: false,
      dialog: false,
      shopId: "",
      members:[],
      form: {
        name: "",
        site: "",
        phone: ""
      },
      formLabelWidth: "120px"
    };
  },
  watch: {
    eachPage() {
      this.getShopsAsync({ type: this.type, text: this.text,shopType:"1" });
    },
    currentPage() {
      this.getShopsAsync({ type: this.type, text: this.text,shopType:"1" });
    }
  },
  computed: {
    ...mapState(["shops", "total"]),
    // ...mapMutations(["setEachPage", "setCurPage"])
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurPage"]).setCurPage
    },
    // userId: {
    //   get: mapState(["userId"]).userId,
    //   set: mapMutations(["setUserId"]).setUserId
    // }
  },
  methods: {
    member(data) {
      this.dialog = true;
      this.members=data;
    }, //查看店铺成员
    ...mapActions(["getShopsAsync", "deteleShopsAsync", "revisionAsync"]),
    ...mapMutations(["setEachPage", "setCurPage", "setUserId"]),
    // add(){
    //   this.getShopsAsync({select:select,text:text});
    // }
    auditingShops() {
      // console.log("in");
      this.getShopsAsync({shopType:"0"}); // 请求 待审核门店数据
    },
    skipToShopsAuditing(){
      this.$router.push({ path: `/management/shopsAuditing` }); // 跳转 审核门店 组件

    },
    revision(id) {
      this.dialogFormVisible = true;
      this.shopId = id;
    },
   
  },
  mounted() {
    // 生命周期函数
    let userId;
    for (let item of document.cookie) {
      if (item == ";") {
        var ca = document.cookie.split(";");
        userId = ca[0].split("=")[1];
        break;
      } else if (item == "=") {
        userId = document.cookie.split("=")[1];
      }
    }
    this.userId = userId;

    this.getShopsAsync({shopType:"1"});
  }
};
</script>
<style scope>
.aStyle:hover{
   color:tomato;
   cursor: pointer;
}
.headerStyle,
.el-footer {
  background-color:white;
  color: #333;
  text-align: center;
  line-height: 70px;
}
.main {
  width: 80%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 380px; */
}
.el-select .el-input {
  width: 150px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
<template>
  <div class="main">
    <el-container>
     <h3 style="background-color:white;text-align:center">所有宠主</h3>
      <el-main>
        <div>
          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" class="input-with-select" v-model="text">
              <el-select v-model="type" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="姓名" value="memberName"></el-option>
                <el-option label="电话" value="memberPhone"></el-option>
                <el-option label="昵称" value="memberAcount"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search" @click="getShopsAsync({type,text})"></el-button>
            </el-input>
          </div>

          <el-table :data="shops" center="all" style="width: 100%;text-align:center;" border>
            <el-table-column prop="memberName" label="姓名" width="100"></el-table-column>
            <el-table-column prop="memberAcount" label="昵称" width="100"></el-table-column>
            <el-table-column prop="memberPhone" label="手机号" width="100"></el-table-column>
            <el-table-column prop="memberCard" label="会员卡" width="100"></el-table-column>
            <el-table-column prop="memberArea" label="区域" width="100"></el-table-column>
            <el-table-column prop="memberPoint" label="积分" width="100"></el-table-column>
            <el-table-column label="宠物" width="100" fixed="right">
              <template slot-scope="scope">
                <a href="#"
                  size="mini"
                  type="primary"
                  circle
                  class="aStyle"
                  icon="el-icon-search"
                  @click.prevent="member(scope.row.shopEmployee)"
                >详情</a>
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

          <el-dialog title="宠物信息" :visible.sync="dialogFormVisible">
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

          <el-dialog title="宠物信息" :visible.sync="dialog">
            <el-table :data="members">
              <el-table-column property="petName" label="宠物名" width="150"></el-table-column>
              <el-table-column property="petSpecies" label="品类" width="200"></el-table-column>
              <el-table-column property="petType" label="种类"></el-table-column>
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
  "members" // 从状态机中获取 数据
);

export default {
  name: "MembersList",
  data() {
    return {
      type: "", // 搜索条件
      text: "",
      dialogFormVisible: false,
      dialog: false,
      merberId: "",
      pets:[],
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
      this.getShopsAsync({ type: this.type, text: this.text });
    },
    currentPage() {
      this.getShopsAsync({ type: this.type, text: this.text });
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
    revision(id) {
      this.dialogFormVisible = true;
      this.merberId = id;    // 根据宠主 id 修改信息
    },
   
  },
  mounted() {
    // 生命周期函数
    this.getShopsAsync();
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
<template>
  <div class="main">
    <el-container>
      <el-header>门店列表</el-header>
      <el-main>
        <div>
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
            <el-table-column prop="shopLicenceImg" label="营业执照照片" width="100">
              <template slot-scope="scope">
                <img :src="scope.row.shopLicenceImg" alt style="width:100px;height:100px">
              </template>
            </el-table-column>
            <el-table-column prop="shopAdd" label="营业地址" width="100"></el-table-column>
            <el-table-column prop="shopLocation" label="定位" width="100"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="100"></el-table-column>
            <el-table-column prop="shopTel" label="联系电话" width="100"></el-table-column>
            <el-table-column prop="shopImg" label="头图" width="100">
              <template slot-scope="scope">
                <img :src="scope.row.shopImg" alt style="width:100px;height:100px">
              </template>
            </el-table-column>
            <el-table-column prop="shopFeature" label="特色" width="100"></el-table-column>
            <el-table-column prop="shopCommission" label="佣金比例" width="100"></el-table-column>
            <el-table-column label="店员组成" width="100" fixed="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  circle
                  icon="el-icon-search"
                  @click="member(scope.row.shopEmployee)"
                >查看</el-button>
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
            :page-sizes="[5,4,3,2,1 ]"
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
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="arrpush">确 定</el-button>
            </div>
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
  name: "shops",
  data() {
    return {
      type: "", // 搜索条件
      text: "",
      dialogFormVisible: false,
      dialog: false,
      shopId: "",
      members: [],
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
    ...mapState(["shops", "total", "userId"]),
    // ...mapMutations(["setEachPage", "setCurPage"])
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurPage"]).setCurPage
    },
    userId: {
      get: mapState(["userId"]).userId,
      set: mapMutations(["setUserId"]).setUserId
    }
  },
  methods: {
    member(data) {
      this.dialog = true;
      this.members = data;
    }, //查看店铺成员
    ...mapActions(["getShopsAsync", "deteleShopsAsync", "revisionAsync"]),
    ...mapMutations(["setEachPage", "setCurPage", "setUserId"]),
    // add(){
    //   this.getShopsAsync({select:select,text:text});
    // }
    revision(id) {
      this.dialogFormVisible = true;
      this.shopId = id;
    },
    arrpush() {
      this.dialogFormVisible = false;
      this.revisionAsync({
        _id: this.shopId,
        shopName: this.form.name,
        shopAdd: this.form.site,
        shopTel: this.form.phone
      });
    }
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

    this.getShopsAsync();
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #545c64;
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
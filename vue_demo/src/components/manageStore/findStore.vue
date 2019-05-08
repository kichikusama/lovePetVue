<template>
  <div class="main">
    <el-container>
      <el-header>门店管理员列表</el-header>
      <el-main>
        <div>

          <div class="box-card" id="card">
            <el-dialog title="新增用户" :visible="isShow" center>
              <el-form label-width="100px" size="small" el-class="form-demo">
                <el-form-item label="城市">
                  <el-input formControlName="city"></el-input>
                </el-form-item>
                <el-form-item label="配送日期">
                  <el-date-picker formControlName="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="配送方式">
                  <el-radio-group formControlName="express">
                    <el-radio label="eleme">蜂鸟配送</el-radio>
                    <el-radio label="shop">商家配送</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="发票">
                  <el-checkbox formControlName="invoice">需要发票</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">提交</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="门店名称" value="1"></el-option>
                <el-option label="电话" value="2"></el-option>
                <el-option label="营业地址" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <el-table :data="rows" center="all" style="width: 100%;text-align:center;">
            <el-table-column prop="userName" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="userPhone" label="营业执照号码" width="100"></el-table-column>
            <el-table-column prop="userMail" label="营业执照照片" width="100"></el-table-column>
            <el-table-column prop="userType" label="营业地址" width="100"></el-table-column>
            <el-table-column prop="goodsId" label="定位" width="100"></el-table-column>
            <el-table-column prop="serviceId" label="法人" width="100"></el-table-column>
            <el-table-column prop="petId" label="联系电话" width="100"></el-table-column>
            <el-table-column label="门店">
              <el-table-column prop label="门店1" width="120"></el-table-column>
              <el-table-column prop label="门店2" width="120"></el-table-column>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="deleteUserAsync(scope.row)">修改</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteUserAsync(scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            :current-page="currentPage-0"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="eachPage - 0"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count-0"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);

export default {
  name: "Users",
  data() {
    return {
      isShow: false, // 弹窗是否显示
      select: "" // 搜索条件
    };
  },
  watch: {
    eachPage() {
      //   console.log(eachPage);
      this.usersListAsync();
    },
    currentPage() {
      this.usersListAsync();
      //  console.log(currentPage);
    },
    // rows(){
    //   this.deleteUserAsync();
    // }
  },
  computed: {
    ...mapState(["rows", "totalPage", "count", "eachPage", "currentPage"])
    // eachPage: {
    //   get: mapState(["eachPage"]).eachPage,
    //   set: mapMutations(["setEachPage"]).setEachPage
    // },
    //  currentPage: {
    //   get: mapState(["currentPage"]).currentPage,
    //   set: mapMutations(["setCurrentPage"]).setCurrentPage
    // }
  },
  methods: {
    ...mapActions(["usersListAsync","deleteUserAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage","handleUpdate"]), //,"handleDelete"
    // pageChange(e) {
    //   // 修改 currentPage来更改数据的请求
    //   // console.log(e.target.value);
    //   this.setCurrentPage(e.target.value);
    //   this.usersListAsync();
    // }
    // clickCurrentPage(newPage){
    //   this.setCurrentPage(newPage);
    //   this.usersListAsync();
    // }
    show() {
      this.isShow = true;
      console.log(this.isShow);
    },
    // handleDelete:(index,row)=>{
    //   console.log(index);
    //   console.log(row);
      
    // }
  },
  mounted() {
    // 生命周期函数
    this.usersListAsync();
    // console.log(this.films);

    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
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
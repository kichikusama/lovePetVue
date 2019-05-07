<template>
  <div class="main">
    <el-container>
      <el-header>门店管理员列表</el-header>
      <el-main>
        <div>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            active-text-color="#ffd04b"
            text-color="#fff"
          >
            <el-menu-item index="1" @click="show">新增用户</el-menu-item>
            <el-submenu index="2" title="处理中心">
              <el-menu-item index="2-1">待审核</el-menu-item>
              <el-menu-item index="2-2">已审核</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <a href="https://github.com/eleme/element-angular" target="_blank">GITHUB</a>
            </el-menu-item>
          </el-menu>

          <div class="box-card" id="card">
            <el-dialog title="新增用户" :visible="isShow" center>
              <el-form label-width="100px" size="small" el-class="form-demo">
                <el-form-item label="城市">
                  <el-input formControlName="city"></el-input>
                </el-form-item>

                <!-- <el-form-item label="规格">
                  <el-cascader formControlName="spec"></el-cascader>
                </el-form-item>-->

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

                <!-- <el-form-item label="使用折扣">
                  <el-checkbox-group formControlName="discount">
                    <el-checkbox label="discount1">折扣1</el-checkbox>
                    <el-checkbox label="discount2">折扣2</el-checkbox>
                    <el-checkbox label="discount3">折扣3</el-checkbox>
                    <el-checkbox label="禁用">vip 折扣</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>-->

                <!-- <el-form-item
                  label="配送时间"
                >
                  <el-select placeholder="请选择" formControlName="time">
                    <el-option label="尽快配送" value="now"></el-option>
                    <el-option label="夜间配送" value="night"></el-option>
                  </el-select>
                </el-form-item>-->

                <el-form-item>
                  <el-button type="primary">提交</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="姓名" value="1"></el-option>
                <el-option label="电话" value="2"></el-option>
                <el-option label="门店" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <el-table :data="rows" center="all" style="width: 100%;text-align:center;">
            <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
            <el-table-column prop="userPhone" label="联系方式" width="100"></el-table-column>
            <el-table-column prop="userMail" label="邮箱" width="100"></el-table-column>
            <el-table-column prop="userType" label="角色" width="100"></el-table-column>
            <el-table-column prop="goodsId" label="商品" width="100"></el-table-column>
            <el-table-column prop="serviceId" label="服务" width="100"></el-table-column>
            <el-table-column prop="petId" label="宠物" width="100"></el-table-column>
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
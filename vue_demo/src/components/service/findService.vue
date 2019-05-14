<template>
  <div style="width:100%;">
    <el-container>
      <el-header style="text-align: center; background-color: #B3C0D1;height:100px">
            <h3>服务列表</h3>
          </el-header>
        <el-main style="background-color:#e9eef3;">
          
          <el-dialog title="修改服务" :visible.sync="dialogFormVisible">
            <el-form :model="form" class="updateForm">
              <el-form-item label="服务名称" style="width:500px" :label-width="formLabelWidth">
                <el-input v-model="form.serviceName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="服务类别" style="width:500px" :label-width="formLabelWidth">
                <el-input v-model="form.serviceType" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="服务规格" style="width:500px" :label-width="formLabelWidth">
                <el-input v-model="form.serviceDetial" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="服务价格" style="width:500px" :label-width="formLabelWidth">
                <el-input v-model="form.servicePrice" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible= false">取 消</el-button>
              <el-button type="primary" @click="comfire(form._id)">确 定</el-button>
            </div>
          </el-dialog>
          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" class="input-with-select" v-model="text">
              <el-select v-model="type" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="名称" value="serviceName"></el-option>
                <el-option label="类别" value="serviceType"></el-option>
                <el-option label="服务员等级" value="serviceLevel"></el-option>
                <el-option label="服务规格" value="serviceDetial"></el-option>
              </el-select>
              <el-button
                slot="append"
                @click="getAllServiceAsync({type,text})"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </div>
          <el-table :data="gg" border style="width: 100%">
            <el-table-column fixed prop="serviceName" label="名称" width="140"></el-table-column>
            <el-table-column prop="serviceType" label="服务类别" width="140"></el-table-column>
            <el-table-column prop="serviceSchedule" label="排期" width="220"></el-table-column>
            <el-table-column prop="serviceCanFor" label="适用规格" width="100"></el-table-column>
            <el-table-column prop="serviceDetial" label="服务规格" width="140"></el-table-column>
            <el-table-column prop="serviceTime" label="耗时" width="140"></el-table-column>
            <el-table-column prop="serviceLevel" label="服务员等级" width="140"></el-table-column>
            <el-table-column prop="servicePrice" label="价格" width="140"></el-table-column>
            <el-table-column fixed="right" label="操作" width="110">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="deleteServiceByPageAsync({_id:scope.row._id})"
                >删除</el-button>
                <el-button type="text" @click="update(scope.row)" size="small">更改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="setEachPage"
            @current-change="setCurPage"
            :current-page="currentPage-0"
            :page-sizes="[5, 3, 1, ]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service" // 从状态机中获取 数据
);
export default {
  data() {
    return {
      type: "",
      text: "",
      id: "",
      formLabelWidth: "120px",
      dialogFormVisible: false
      // userId:"",
      // shopsId:"",
    };
  },

  watch: {
    eachPage() {
      this.getAllServiceAsync({
        text: this.text,
        type: this.type
      });
    },
    currentPage() {
      this.getAllServiceAsync({
        text: this.text,
        type: this.type
      });
    }
  },
  computed: {
    ...mapState(["gg", "count", "total", "form"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurPage"]).setCurPage
    }
  },
  methods: {
    ...mapMutations(["setEachPage", "setCurPage", "getServiceById"]),
    ...mapActions([
      "getServiceAsync",
      "getAllServiceAsync",
      "deleteServiceByPageAsync",
      "updateServiceByIdAsync",
      "getServiceByIdAsync"
    ]),

    update(payload) {
      this.dialogFormVisible = true;
      this.getServiceByIdAsync(payload);
    },
    comfire(id) {
      this.updateServiceByIdAsync(id);
      this.dialogFormVisible = false;
    }
  },
  mounted() {
    let userId;
    let shopsId;
    for (let item of document.cookie) {
      if (item == ";") {
        var ca = document.cookie.split(";");
        userId = ca[0].split("=")[1];
        shopsId = ca[1].split("=")[1];
        break;
      } else if (item == "=") {
        userId = document.cookie.split("=")[1];
      }
    }
    this.userId = userId;
    this.shopsId = shopsId;
    this.getAllServiceAsync({ shopId: shopsId });
  }
};
</script>

<style scoped>
.updateForm {
  padding-left: 160px;
}
</style>
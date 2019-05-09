<template>
  <div style="width:85%;padding:20px">
    <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" class="updateForm">
        <el-form-item label="商品名称" style="width:500px" :label-width="formLabelWidth">
          <el-input disabled v-model="form.goodsName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品规格" style="width:500px" :label-width="formLabelWidth">
          <el-input v-model="form.goodsSize" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" style="width:500px" :label-width="formLabelWidth">
          <el-input v-model="form.goodsSupplier" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" style="width:500px" :label-width="formLabelWidth">
          <el-input v-model="form.goodsPrice" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible= false">取 消</el-button>
        <el-button type="primary" @click="comfire(form._id)">确 定</el-button>
      </div>
    </el-dialog>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="text" class="input-with-select">
        <el-select v-model="type" slot="prepend" placeholder="请选择">
          <el-option label="名称" value="goodsName"></el-option>
          <el-option label="产地" value="goodsRegion"></el-option>
          <el-option label="价格" value="goodsPrice"></el-option>
        </el-select>
        <el-button slot="append" @click="getGoodsByPageAsync({text,type})" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="goods" border style="width: 100%">
      <el-table-column fixed prop="goodsName" label="名称" width="150"></el-table-column>
      <el-table-column prop="goodsType" label="品类" width="120"></el-table-column>
      <el-table-column prop="goodsMaterial" label="材质" width="120"></el-table-column>
      <el-table-column prop="goodsCanFor" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="goodsOnlyFor" label="专属规格" width="120"></el-table-column>
      <el-table-column prop="goodsSize" label="包装规格" width="120"></el-table-column>
      <el-table-column prop="goodsTaste" label="口味" width="120"></el-table-column>
      <el-table-column prop="goodsSpecial" label="特殊功能" width="120"></el-table-column>
      <el-table-column prop="goodsRegion" label="产地" width="120"></el-table-column>
      <el-table-column prop="goodsDate" label="出产日期" width="120"></el-table-column>
      <el-table-column prop="goodsTime" label="保质期" width="120"></el-table-column>
      <el-table-column prop="goodsSupplier" label="供应商" width="120"></el-table-column>
      <el-table-column prop="goodsIntro" label="特色说明" width="300"></el-table-column>
      <el-table-column prop="goodsPrice" label="价格" width="120"></el-table-column>
      <el-table-column prop="goodsImg" label="商品图片" width="120">
        <template slot-scope="scope">
          <img style="width:80px;height:80px" :src="scope.row.goodsImg" alt>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleUpdate(scope.row._id)" size="mini">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteGoodsByPageAsync(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage-0"
      :page-sizes="[5,4,3,2,1]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count-0"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "goodsList"
);
export default {
  watch: {
    eachPage() {
      this.getGoodsByPageAsync({ text: this.text, type: this.type });
    },
    currentPage() {
      this.getGoodsByPageAsync({ text: this.text, type: this.type });
    }
  },
  data() {
    return {
      type: "",
      text: "",
      id: "",
      formLabelWidth: "120px",
      dialogFormVisible: false
    };
  },
  computed: {
    ...mapState(["totalPage", "count", "goods", "form"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setEachPage"]).setCurrentPage
    }
  },
  methods: {
    ...mapActions([
      "getGoodsByPageAsync",
      "deleteGoodsByPageAsync",
      "getGoodsByIdAsync",
      "updateGoodsByIdAsync"
    ]),
    ...mapMutations(["setEachPage", "setCurrentPage", "getGoodsById"]),
    handleUpdate(payload) {
      this.dialogFormVisible = true;
      this.getGoodsByIdAsync(payload);
    },
    comfire(id) {
      this.updateGoodsByIdAsync(id);
      this.dialogFormVisible = false;
    }
  },
  mounted() {
    let userId;
    let shopsId;
    for(let item of document.cookie){
      if(item==';'){
       var ca= document.cookie.split(';');
        userId=ca[0].split('=')[1];
        shopsId=ca[1].split('=')[1]
        break
      }else if(item=='='){
        userId=document.cookie.split('=')[1]
      }
    }
    console.log(shopsId)
    // this.userId=userId
    this.getGoodsByPageAsync();
  }
};
</script>


<style scoped>
.updateForm {
  padding-left: 160px;
}
</style>

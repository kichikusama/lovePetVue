<template>
  <div style="width:90%;padding:20px">
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
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteGoodsByPageAsync(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage-0"
      :page-sizes="[1,2,3,4,5]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count-0"
    ></el-pagination>
    <el-button size="mini" type="danger" @click="add">删除</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "goodsList"
);
export default {
  data() {
    return {
      id:""
    }
  },
  watch: {
    eachPage() {
      this.getGoodsByPageAsync();
    },
    currentPage() {
      this.getGoodsByPageAsync();
    }
  },
  computed: {
    ...mapState(["totalPage", "count", "goods"]),
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
    ...mapActions(["getGoodsByPageAsync", "deleteGoodsByPageAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage"]),
    add(){
      console.log(this.id)
    }
  },
  mounted() {
    this.getGoodsByPageAsync();
    this.id=document.querySelector("#id").getAttribute("v-model")
    console.log(this.$route.params.storeId)
  },
  
};
</script>
<template>
  <div style="width:85%;padding:20px">
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="text" class="input-with-select">
        <el-select v-model="type" slot="prepend" placeholder="请选择">
          <el-option label="宠主" value="memberId"></el-option>
          <el-option label="总价" value="orderTotal"></el-option>
          <el-option label="时间" value="orderDate"></el-option>
        </el-select>
        <el-button slot="append" @click="getOrdersByPageAsync({text,type})" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="orders" border style="width: 100%">
      <el-table-column fixed prop="memberId" label="宠主" width="150"></el-table-column>
      <el-table-column prop="petsId" label="购买宠物信息" width="120"></el-table-column>
      <el-table-column prop="serviceId" label="购买服务信息" width="120"></el-table-column>
      <el-table-column prop="goodsId" label="购买商品信息" width="120"></el-table-column>
      <el-table-column prop="orderTotal" label="总价" width="120"></el-table-column>
      <el-table-column prop="orderDate" label="时间" width="120"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="deleteOrdersByIdAsync({_id:scope.row._id})"
          >删除</el-button>
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
  "orders"
);
export default {
  watch: {
    eachPage() {
      this.getOrdersByPageAsync({
        text: this.text,
        type: this.type
      });
    },
    currentPage() {
      this.getOrdersByPageAsync({
        text: this.text,
        type: this.type
      });
    }
  },
  data() {
    return {
      text: "",
      type: ""
    };
  },
  computed: {
    ...mapState(["totalPage", "count", "orders", "form"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setEachPage"]).setCurentPage
    }
  },
  methods: {
    ...mapActions(["getOrdersByPageAsync","deleteOrdersByIdAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage", "getGoodsById"])
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
    this.getOrdersByPageAsync({ shopId: shopsId });
  }
};
</script>

<style scoped>
.updateForm {
  padding-left: 160px;
}
</style>

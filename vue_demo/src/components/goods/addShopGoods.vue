<template>
  <el-card class="box-card">
    <div>
      <el-select v-model="goodsIds" multiple placeholder="请选择门店商品">
        <el-option v-for="item in goods" :key="item._id" :label="item.goodsName" :value="item._id"></el-option>
      </el-select>
    </div>
    <div>
      <el-button type="primary" @click="addShopIdToGoodsAsync({goodsIds,shopId})" round>确认新增</el-button>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "addShopGoods"
);
export default {
  data() {
    return {
      shopId: "",
      userId: ""
    };
  },
  computed: {
    ...mapState(["goods"]),
    goodsIds: {
      get: mapState(["goodsIds"]).goodsIds,
      set: mapMutations(["setGoodsIds"]).setGoodsIds
    }
  },
  methods: {
    ...mapMutations(["setGoodsIds"]),
    ...mapActions(["getGoodsByUserIdAsync", "addShopIdToGoodsAsync"])
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
    this.shopId = shopsId;
    this.userId = userId;
    this.getGoodsByUserIdAsync({userId:this.userId,shopId:this.shopId});
  }
};
</script>

<style scope>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
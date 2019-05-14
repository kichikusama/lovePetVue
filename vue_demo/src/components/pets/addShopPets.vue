<template>
  <el-card class="box-card">
    <div>
      <el-select v-model="petsIds" multiple placeholder="请选择门店宠物">
        <el-option v-for="item in pets" :key="item._id" :label="item.petsSpecies" :value="item._id"></el-option>
      </el-select>
    </div>
    <div>
      <el-button size="mini" style="margin: 100px 0 0 30px;"  @click="addShopIdToPetsAsync({petsIds,shopId})">确认新增</el-button>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "addShopPets"
);
export default {
  data() {
    return {
      shopId: "",
      userId: ""
    };
  },
  computed: {
    ...mapState(["pets"]),
    petsIds: {
      get: mapState(["petsIds"]).petsIds,
      set: mapMutations(["setPetsIds"]).setPetsIds
    }
  },
  methods: {
    ...mapMutations(["setPetsIds"]),
    ...mapActions(["getPetsByUserIdAsync", "addShopIdToPetsAsync"])
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
    this.getPetsByUserIdAsync({userId:this.userId,shopId:this.shopId});
  }
};
</script>

<style scope>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
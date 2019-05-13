<template>
  <el-card class="box-card">
    <div>
      <el-select v-model="serviceIds" multiple placeholder="请选择门店服务">
        <el-option v-for="item in service" :key="item._id" :label="item.serviceName" :value="item._id"></el-option>
      </el-select>
    </div>
    <div>
      <el-button type="primary" @click="addShopIdToServiceAsync({serviceIds,shopId})" round>确认新增</el-button>
    </div>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "addShopService"
);
export default {
  data() {
    return {
      shopId: "",
      userId: ""
    };
  },
  computed: {
    ...mapState(["service"]),
    serviceIds: {
      get: mapState(["serviceIds"]).serviceIds,
      set: mapMutations(["setServiceIds"]).setServiceIds
    }
  },
  methods: {
    ...mapMutations(["setServiceIds"]),
    ...mapActions(["getServiceByUserIdAsync", "addShopIdToServiceAsync"])
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
    this.getServiceByUserIdAsync({userId:this.userId,shopId:this.shopId});
  }
};
</script>

<style scope>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
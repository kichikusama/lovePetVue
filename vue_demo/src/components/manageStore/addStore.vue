<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-card class="box-card">
        <el-form :model="state">
          <div class="input">
            <span>门店名称：</span>
            <el-input v-model="state.shopName" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照号码：</span>
            <el-input v-model="state.shopLicenceNum" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照照片：</span>
            <el-input v-model="state.shopLicenceImg" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业地址：</span>
            <el-input v-model="state.shopAdd" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>定位：</span>
            <el-input v-model="state.shopLocation" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>法人：</span>
            <el-input v-model="state.shopCorporate" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>联系电话：</span>
            <el-input v-model="state.shopTel" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>头图：</span>
            <el-input v-model="state.shopImg" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>特色：</span>
            <el-input v-model="state.shopFeature" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>佣金比例：</span>
            <el-input v-model="state.shopCommission" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>店员姓名：</span>
            <el-input v-model="state.shopEmployee" placeholder="请输入内容"></el-input>
          </div>
          <div class="primary">
            <el-button type="primary" @click="applyStoreAsync">主要按钮</el-button>
          </div>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  computed: {
    ...mapState(["state"])
  },
  methods: {
    ...mapActions(["applyStoreAsync"])
  }
};
</script>
  
<style>
.box-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 600px;
  display: flex;
  margin-top: 30px;
}
span {
  width: 150px;
  text-align: right;
  line-height: 40px;
}
.primary {
  margin-top: 30px;
}
</style>
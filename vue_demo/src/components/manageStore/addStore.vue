<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-card class="box-card">
        <div class="input">
          <span>门店名称：</span><el-input v-model="shopName" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>营业执照号码：</span><el-input v-model="shopLicenceNum" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>营业执照照片：</span><el-input v-model="shopLicenceImg" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>营业地址：</span><el-input v-model="shopAdd" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>定位：</span><el-input v-model="shopLocation" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>法人：</span><el-input v-model="shopCorporate" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>联系电话：</span><el-input v-model="shopTel" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>头图：</span><el-input v-model="shopImg" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>特色：</span><el-input v-model="shopFeature" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>佣金比例：</span><el-input v-model="shopCommission" placeholder="请输入内容"></el-input>
        </div>
        <div class="input">
          <span>店员姓名：</span><el-input v-model="shopEmployee" placeholder="请输入内容"></el-input>
        </div>
         <div class="primary">
           <el-button type="primary">主要按钮</el-button>
         </div>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
   data() {
    return {
      shopName: '',
      shopLicenceNum:'',
      shopLicenceImg:'',
      shopAdd:'',
      shopLocation:'',
      shopCorporate:'',
      shopTel:'',
      shopImg:'',
      shopFeature:'',
      shopCommission:'',
      shopEmployee:'',
    }
  }
};
</script>
  
<style>
.box-card{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input{
  width: 600px;
  display: flex;
  margin-top: 30px;
}
span{
  width: 150px;
  text-align: right;
  line-height: 40px;
}
.primary{
  margin-top: 30px;
}
</style>
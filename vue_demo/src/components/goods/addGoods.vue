<template>
  <el-form v-model="goods" class="common" ref="form" label-width="80px" size="mini">
    <div class="container">
      <div style="padding:20px">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="goods.goodsName" clearable></el-input>
        </el-form-item>
        <el-form-item label="商品品类" prop="type">
          <el-input v-model="goods.goodsType" clearable></el-input>
        </el-form-item>
        <el-form-item label="商品材质" prop="material">
          <el-input v-model="goods.goodsMaterial" clearable></el-input>
        </el-form-item>
        <el-form-item label="适用规格" prop="canFor">
          <el-select v-model="goods.goodsCanFor" placeholder="请选择使用规格">
            <el-option label="6个月以下" value="6个月以下"></el-option>
            <el-option label="6个月以上" value="6个月以上"></el-option>
            <el-option label="所有" value="所有"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专属规格" prop="onlyFor">
          <el-radio-group v-model="goods.goodsOnlyFor">
            <el-radio label="贵宾">贵宾</el-radio>
            <el-radio label="柯基">柯基</el-radio>
            <el-radio label="哈士奇">哈士奇</el-radio>
            <el-radio label="所有">所有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="包装规格" prop="size">
          <el-input v-model="goods.goodsSize" clearable></el-input>
        </el-form-item>

        <el-form-item label="商品口味" prop="taste">
          <el-radio-group v-model="goods.goodsTaste">
            <el-radio :label="3">牛肉味</el-radio>
            <el-radio :label="6">鸡肉味</el-radio>
            <el-radio :label="9">混合口味</el-radio>
            <el-radio :label="12">所有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="特殊功能" prop="special">
          <el-radio-group v-model="goods.goodsSpecial">
            <el-radio-button label="美毛" name="type"></el-radio-button>
            <el-radio-button label="去泪痕" name="type"></el-radio-button>
            <el-radio-button label="去体味" name="type"></el-radio-button>
            <el-radio-button label="无" name="type"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </div>
      <div style="padding:20px">
        <el-form-item label="商品产地" prop="region">
          <el-input v-model="goods.goodsRegion" clearable></el-input>
        </el-form-item>
        <el-form-item label="出产日期" prop="date">
          <el-date-picker v-model="goods.goodsDate" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
        </el-form-item>
        <el-form-item label="保质期" prop="time">
          <el-select v-model="goods.goodsTime" placeholder="请选择使用规格">
            <el-option label="3个月" value="kid"></el-option>
            <el-option label="3-6个月" value="adult"></el-option>
            <el-option label="6-12个月" value="no"></el-option>
            <el-option label="1-3年" value="no"></el-option>
            <el-option label="3年以上" value="no"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="供应商" prop="supplier">
          <el-input v-model="goods.goodsSupplier" clearable></el-input>
        </el-form-item>
        <el-collapse>
          <el-collapse-item title="特殊说明" name="1" prop="intro">
            <el-input v-model="goods.goodsIntro" clearable></el-input>
          </el-collapse-item>
        </el-collapse>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="goods.goodsPrice" clearable></el-input>
        </el-form-item>
      </div>
      <div>
        <el-upload
          action="/goods/addImage"
          list-type="picture-card"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="goodsFlag.dialogVisible">
          <img width="100%" :src="goodsFlag.dialogImageUrl" alt>
        </el-dialog>
      </div>
    </div>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即新增</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("goods");

export default {
  computed: {
    ...mapState(["goods", "goodsFlag"])
  },
  methods: {
    ...mapMutations(["onSubmit", "handleRemove", "uploadSuccess"])
  }
};
</script>

<style scope>
.common {
  width: 100%;
}
.container {
  display: flex;
}
.container > div {
  width: 33%;
}
</style>

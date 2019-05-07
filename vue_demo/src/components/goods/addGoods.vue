<template>
  <el-form class="common" ref="form" label-width="80px" size="mini">
    <div class="container">
      <div style="padding:20px">
        <el-form-item label="商品名称">
          <el-input v-model="goods.name"></el-input>
        </el-form-item>
        <el-form-item label="商品品类">
          <el-input v-model="goods.type"></el-input>
        </el-form-item>
        <el-form-item label="商品材质">
          <el-input v-model="goods.material"></el-input>
        </el-form-item>
        <el-form-item label="适用规格">
          <el-select v-model="goods.canFor" placeholder="请选择使用规格">
            <el-option label="6个月以下" value="kid"></el-option>
            <el-option label="6个月以上" value="adult"></el-option>
            <el-option label="所有" value="no"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专属规格">
          <el-checkbox-group v-model="goods.onlyFor">
            <el-checkbox-button label="贵宾" name="type"></el-checkbox-button>
            <el-checkbox-button label="柯基" name="type"></el-checkbox-button>
            <el-checkbox-button label="哈士奇" name="type"></el-checkbox-button>
            <el-checkbox-button label="所有" name="type"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="包装规格">
          <el-input v-model="goods.size"></el-input>
        </el-form-item>
        <el-form-item label="商品口味">
          <el-checkbox-group v-model="goods.taste">
            <el-checkbox-button label="牛肉味" name="type"></el-checkbox-button>
            <el-checkbox-button label="鸡肉味" name="type"></el-checkbox-button>
            <el-checkbox-button label="混合口味" name="type"></el-checkbox-button>
            <el-checkbox-button label="其他" name="type"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊功能">
          <el-checkbox-group v-model="goods.special">
            <el-checkbox-button label="美毛" name="type"></el-checkbox-button>
            <el-checkbox-button label="去泪痕" name="type"></el-checkbox-button>
            <el-checkbox-button label="去体味" name="type"></el-checkbox-button>
            <el-checkbox-button label="无" name="type"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
      </div>
      <div style="padding:20px">
        <el-form-item label="商品产地">
          <el-input v-model="goods.region"></el-input>
        </el-form-item>
        <el-form-item label="出产日期">
          <el-col :span="24">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="goods.date"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="保质期">
          <el-select v-model="goods.time" placeholder="请选择使用规格">
            <el-option label="3个月" value="kid"></el-option>
            <el-option label="3-6个月" value="adult"></el-option>
            <el-option label="6-12个月" value="no"></el-option>
            <el-option label="1-3年" value="no"></el-option>
            <el-option label="3年以上" value="no"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="goods.supplier"></el-input>
        </el-form-item>
        <el-collapse>
          <el-collapse-item title="特殊说明" name="1">
            <el-input v-model="goods.intro"></el-input>
          </el-collapse-item>
        </el-collapse>
        <el-form-item label="商品价格">
          <el-input v-model="goods.price"></el-input>
        </el-form-item>
      </div>
      <div>
        <el-upload
          action="/goods/addGoodsImage"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="goods.dialogVisible">
          <img width="100%" :src="goods.dialogImageUrl" alt>
        </el-dialog>
      </div>
    </div>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即新增</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


// <script>
export default {
  data() {
    return {
      goods: {
        name: "",
        type: "",
        material: "",
        canFor: "",
        onlyFor: [],
        size: "",
        taste: [],
        special: [],
        region: "",
        date: "",
        time: "",
        supplier: "",
        intro: "",
        price: "",
        img: "",
        src: "",
        dialogImageUrl: "",
        dialogVisible: false
      }
    };
  },
  methods: {
    onSubmit() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadSuccess(msg){
      console.log(msg);
    }
  }
};
</script>

<style>
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

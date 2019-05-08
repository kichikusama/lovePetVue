<template>
    <el-form :model="pets" :rules="rules" ref="pets" label-width="100px" class="demo-pets">
      <el-upload
        action="/pets/addImage"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-form-item label="品称" prop="petsSpecies">
        <el-input v-model="pets.petsSpecies"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="petsType">
        <el-input v-model="pets.petsType"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="petsWeight">
        <el-input v-model="pets.petsWeight"></el-input>
      </el-form-item>
      <el-form-item label="颜色" prop="petsColor">
        <el-input v-model="pets.petsColor"></el-input>
      </el-form-item>
      <el-form-item label="规格" prop="petsLevel">
        <el-input v-model="pets.petsLevel"></el-input>
      </el-form-item>
      <el-form-item label="性格" prop="petCharacter">
        <el-input v-model="pets.petCharacter"></el-input>
      </el-form-item>
      <el-form-item label="生日" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="出生日期" v-model="pets.petsBirth" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      
      <!-- <el-form-item label="规格" prop="type">
        <el-checkbox-group v-model="pets.petsLevel">
          <el-checkbox label="幼犬" name="type"></el-checkbox>
          <el-checkbox label="成犬" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="性格" prop="resource">
        <el-radio-group v-model="pets.petCharacter">
          <el-radio label="温顺"></el-radio>
          <el-radio label="凶猛"></el-radio>
        </el-radio-group>
      </el-form-item> -->
      
      <el-form-item>
        <el-button type="primary" @click="submitForm('pets')">添加</el-button>
        <el-button @click="resetForm('pets')">重置</el-button>
      </el-form-item>
</el-form>
</template>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("pets");
  export default {
    computed: {
    ...mapState(["pets"])
  },
    data() {
      return {
        
        rules: {
          petsSpecies: [
            { required: true, message: '请输入宠物品称', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          petsType: [
           { required: true, message: '请输入宠物种类', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          petsWeight: [
            { required: true, message: '请输入宠物体重', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          petsColor: [
            { required: true, message: '请输入宠物体重', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          petsLevel: [
            { required: true, message: '请输入宠物体重', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          petCharacter: [
            { required: true, message: '请输入宠物体重', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一一种规格', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      ...mapActions(["getPetsByPageAsync"]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.getPetsByPageAsync(this.pets)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(msg){
        console.log(msg);
      }
    }
  }
</script>

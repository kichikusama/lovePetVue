<template>
    <el-form :model="petsData" :rules="rules" ref="petsData" label-width="100px" class="demo-pets">
      <el-upload
        action="/pets/addImage"
        list-type="picture-card"
        :on-remove="handleRemove"
        :on-success="handleSuccess">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-form-item label="品称" prop="petsSpecies">
        <el-input v-model="petsData.petsSpecies"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="petsType">
        <el-input v-model="petsData.petsType"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="petsWeight">
        <el-input v-model="petsData.petsWeight"></el-input>
      </el-form-item>
      <el-form-item label="颜色" prop="petsColor">
        <el-input v-model="petsData.petsColor"></el-input>
      </el-form-item>
      <el-form-item label="规格" prop="petsLevel">
        <el-input v-model="petsData.petsLevel"></el-input>
      </el-form-item>
      <el-form-item label="性格" prop="petCharacter">
        <el-input v-model="petsData.petCharacter"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="petsBirth">
        <el-input v-model="petsData.petsBirth"></el-input>
      </el-form-item>
      <!-- <el-form-item label="生日" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="出生日期" v-model="pets.petsBirth" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item> -->
      
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
        <el-button type="primary" @click="submitForm('data')">添加</el-button>
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
    ...mapState(["petsData"])
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
          petsBirth: [
            { required: true, message: '请输入宠物体重', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          
        },
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      ...mapMutations(["handleRemove","handleSuccess","submitForm"]),
      
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //       console.log(this.pets);
            
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // }
    }
  }
</script>

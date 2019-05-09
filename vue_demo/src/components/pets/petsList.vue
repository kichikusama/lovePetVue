<template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;">
      <h1>宠主列表</h1>
    </el-header>

    <el-main>
      <div>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <template>
        <el-table :data="data" border style="width: 100%">
          
          <el-table-column fixed prop="petsImg" label="图片" width="100">
            <template slot-scope="scope">
            <img style="width:80px;height:80px" :src="scope.row.petsImg" alt>
          </template>
          </el-table-column>
          <el-table-column prop="petsSpecies" label=" 品称" width="120"></el-table-column>
          <el-table-column prop="petsType" label="种类" width="120"></el-table-column>
          <el-table-column prop="petsColor" label="颜色" width="120"></el-table-column>
          <el-table-column prop="petsBirth" label="出生日期" width="120"></el-table-column>
          <el-table-column prop="petsLevel" label="规格" width="300"></el-table-column>
          <el-table-column prop="petCharacter" label="性格" width="120"></el-table-column>
          <el-table-column prop="petsWeight" label="体重" width="120"></el-table-column>

          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleDelete()" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("pets");
export default {
  computed: {
    ...mapState(["data","pets"])
  },
  data() {
    return {
     
    };
  },
  methods: {
    ...mapMutations(["handleClick", "mounted","getPetsByPage","handleDelete"])
  },
  mounted(){
    this.getPetsByPage()
  }
};
</script>

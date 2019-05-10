<template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;">
      <h1>宠主列表</h1>
    </el-header>

    <el-main>
      <div>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="text">
          <el-select v-model="type" slot="prepend" placeholder="请选择搜索条件">
            <el-option label="品称" value="petsSpecies"></el-option>
            <el-option label="种类" value="petsType"></el-option>
            <el-option label="颜色" value="petsColor"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="getPetsByAllPageAsync({type,text})"
          ></el-button>
        </el-input>
      </div>
      <template>
        <el-table :data="pets" border style="width: 100%">
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
              <el-button @click="deletePetByPageAsync(scope.row._id)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="setEachPage"
          @current-change="setCurPage"
          :current-page="currentPage-0"
          :page-sizes="[1, 2, 3, ]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </template>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("pets");
export default {
  data() {
    return {
      search: "",
      select: "",
      text:"",
      type:""
    };
  },
  watch: {
    eachPage() {
      this.getPetsByAllPageAsync({ type: this.type, text: this.text });
    },
    currentPage() {
      this.getPetsByAllPageAsync({ type: this.type, text: this.text });
    }
  },
  computed: {
    ...mapState(["pets", "total"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurPage"]).setCurPage
    }
  },

  methods: {
    ...mapMutations([
      "handleClick",,
      "setEachPage",
      "setCurPage"
    ]),
    ...mapActions([
      "deletePetByPageAsync",
      "getPetsByPageAsync",
      "getPetsByAllPageAsync"
    ])
  },
  mounted() {
    this.getPetsByAllPageAsync();
  }
};
</script>

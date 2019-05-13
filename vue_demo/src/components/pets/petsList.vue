<template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;height:100px">
      <h3>宠主列表</h3>
    </el-header>

    <el-main>
      <div>
        <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
          <el-form :model="data">
            <el-form-item label="品称"  style="width:500px" :label-width="formLabelWidth">
              <el-input v-model="data.petsSpecies" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="种类"  style="width:500px" :label-width="formLabelWidth">
              <el-input v-model="data.petsType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="颜色"  style="width:500px" :label-width="formLabelWidth">
              <el-input v-model="data.petsColor" autocomplete="off"></el-input>
            </el-form-item>
            
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="comfire(data._id)">确 定</el-button>
          </div>
        </el-dialog>

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

          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="handleUpdate(scope.row._id)" >编辑</el-button>
              <el-button @click="deletePetByPageAsync(scope.row._id)" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="setEachPage"
          @current-change="setCurPage"
          :current-page="currentPage-0"
          :page-sizes="[3, 8, 10]"
          :page-size="3"
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
      text: "",
      type: "",
      dialogFormVisible: false,
      form: {
        name: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
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
    ...mapState(["data","pets", "total"]),
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
    ...mapMutations(["handleClick", , "setEachPage", "setCurPage"]),
    ...mapActions([
      "deletePetByPageAsync",
      "getPetsByPageAsync",
      "getPetsByAllPageAsync",
      "getPetsByIdAsync",
      "updatePetsByIdAsync"
    ]),
    handleUpdate(payload) {
      this.dialogFormVisible = true;
      this.getPetsByIdAsync(payload);
    },
    comfire(id) {
      this.updatePetsByIdAsync(id);
      this.dialogFormVisible = false;
    }
  },
  mounted() {
    this.getPetsByAllPageAsync();
  }
};
</script>

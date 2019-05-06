<template>
  <div style="width:94%;float:right">
    <el-table :data="films" border style="width: 100%;text-align:center">
      <el-table-column prop="cName" label="中文名" width="150"></el-table-column>
      <el-table-column prop="eName" label="英文名" width="300"></el-table-column>
      <el-table-column prop="actors" label="主演" width="300"></el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="country" label="国家" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="setEachPage"
        @current-change="setCurrentPage"
        :current-page="currentPage-0"
        :page-sizes="[3, 4, 5, 6]"
        :page-size="eachPage - 0"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count-0"
      ></el-pagination>
    </div>

    <!-- <table>
      <thead>
        <th>中文名</th>
        <th>英文名</th>
        <th>主演</th>
        <th>类型</th>
        <th>国家</th>
      </thead>
      <tbody>
        <tr v-for="item in films" :key="item._id">
          <td>{{item.cName}}</td>
          <td>{{item.eName}}</td>
          <td>{{item.actors}}</td>
          <td>{{item.type}}</td>
          <td>{{item.country}}</td>
        </tr>
      </tbody>
    </table>-->
    <!-- <br>
    <br>
    <div>
      <span>当前页：</span>
      <select name id @change="pageChange">
        <option
          v-for="n in totalPage"
          :value="n"
          :key="n"
          :selected="n==currentPage?true:false"
        >{{n}}</option>
      </select>
      <span>每页显示条数:</span>
      <input type="text" v-model="eachPage">
    </div>
    <div>
      <button value="1" @click="pageChange">首页</button>
      <button :value="currentPage-1 >1?(currentPage-1):1" @click="pageChange">上一页</button>
      <button :value="currentPage+1 >totalPage?totalPage:(currentPage+1)" @click="pageChange">下一页</button>
      <button :value="totalPage" @click="pageChange">尾页</button>
    </div>-->
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "students"
);

export default {
  name: "students",
  data() {
    return {
      a: 0
    };
  },
  watch: {
    eachPage() {
      //   console.log(eachPage);
      this.filmListAsync();
    },
    currentPage() {
      this.filmListAsync();
      //  console.log(currentPage);
    }
  },
  computed: {
    ...mapState(["films", "totalPage", "count", "eachPage", "currentPage"])
    // eachPage: {
    //   get: mapState(["eachPage"]).eachPage,
    //   set: mapMutations(["setEachPage"]).setEachPage
    // },
    //  currentPage: {
    //   get: mapState(["currentPage"]).currentPage,
    //   set: mapMutations(["setCurrentPage"]).setCurrentPage
    // }
  },
  methods: {
    ...mapActions(["filmListAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage"])
    // pageChange(e) {
    //   // 修改 currentPage来更改数据的请求
    //   // console.log(e.target.value);
    //   this.setCurrentPage(e.target.value);
    //   this.filmListAsync();
    // }
    // clickCurrentPage(newPage){
    //   this.setCurrentPage(newPage);
    //   this.filmListAsync();
    // }
  },
  mounted() {
    // 生命周期函数
    this.filmListAsync();
    // console.log(this.films);

    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
  }
};
</script>

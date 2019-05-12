<template>
    <el-container>
    <el-header style="text-align: center; ">
      <h1>宠主列表</h1>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-image
      style="width: 100px; height: 100px"
      :src="url"
      prop="url"
      :fit="fit"></el-image>
        <el-table-column prop="memberImg" label="头图" width="120">
        </el-table-column>
        <el-table-column prop="memberAcount" label="昵称" width="120">
        </el-table-column>
        <el-table-column prop="memberName" label="真实姓名" width="120">
        </el-table-column>
        <el-table-column prop="memberPhone" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="memberCard" label="会员卡" width="120">
        </el-table-column>
        <el-table-column prop="memberAdd" label="送货地址" width="120">
        </el-table-column>
        <el-table-column prop="memberArea" label="区域" width="120">
        </el-table-column>
        <el-table-column prop="memberPoint" label="积分" width="120">
        </el-table-column>
        <el-table-column prop="memberPets" label="XXXXXXX" width="120">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
      const item = {
        memberImg: '2016-05-02',
        memberAcount: '王小虎',
        memberAdd: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(8).fill(item)
      }
    }
};
</script>

<template>
  <div class="main">
    <el-container>
      <el-header>门店列表</el-header>
      <el-main>
        <div>
          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="姓名" value="1"></el-option>
                <el-option label="电话" value="2"></el-option>
                <el-option label="门店" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <el-table :data="tableData" style="width: 100%;text-align:center;">
            <el-table-column prop="shopName" label="门店名称" width="150"></el-table-column>
            <el-table-column prop="shopLicenceNum" label="营业执照" width="150"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="150"></el-table-column>
            <el-table-column prop="shopTel" label="电话" width="150"></el-table-column>
            <el-table-column prop="shopCommission" label="佣金比例" width="150"></el-table-column>        
            <el-table-column prop="shopAdd" label="地址" width="150"></el-table-column>
           
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Stores",
  data() {
    return {
      tableData: [
        {
          shopName: "爱宠邦-青羊店", // 名称
          shopLicenceNum: "112384455422F", // 营业执照号码
          shopLicenceImg: "", // 营业执照照片
          shopAdd: "青羊区", // 营业地址
          shopLocation: "", // 定位
          shopCorporate: "goumin", // 法人
          shopTel: "13111882937", // 联系电话
          shopImg: "", // 头图
          shopFeature: "", // 特色
          shopCommission: "20%", // 佣金比例，
          shopEmployee: [
            {
              empName: 'zhangsan', // 店员姓名
              empLevel: 'A', // 店员等级
              empPhone: '13345345653' // 店员电话
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 70px;
}
.main {
  width: 80%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 380px; */
}
.el-select .el-input {
  width: 150px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
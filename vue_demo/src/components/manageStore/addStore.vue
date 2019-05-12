<<<<<<< HEAD
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-card class="box-card">
        <el-form :model="state">
          <div class="input">
            <span>门店名称：</span>
            <el-input v-model="state.shopName" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照号码：</span>
            <el-input v-model="state.shopLicenceNum" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照照片：</span>
            <el-upload
              action="/shops/addShopsImage"
              list-type="picture-card"
              :on-success="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog>
              <img width="100%" :src="state.shopLicenceImg" alt>
            </el-dialog>
          </div>
          <div class="input">
            <span>营业地址：</span>
            <el-input v-model="state.shopAdd" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>定位：</span>
            <el-input v-model="state.shopLocation" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>法人：</span>
            <el-input v-model="state.shopCorporate" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>联系电话：</span>
            <el-input v-model="state.shopTel" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>头图：</span>
            <el-upload
              action="/shops/addShopsImage"
              list-type="picture-card"
              :on-success="heardPictureCardPreview"
              :on-remove="heardRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog>
              <img width="100%" :src="state.shopImg" alt>
            </el-dialog>
          </div>
          <div class="input">
            <span>特色：</span>
            <el-input v-model="state.shopFeature" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>佣金比例：</span>
            <el-input v-model="state.shopCommission" placeholder="请输入内容"></el-input>
          </div>
          <div class="input member">
            <el-button type="success" @click="dialogFormVisible = true">新增店员</el-button>

            <el-dialog title="店员信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="店员名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店员等级" :label-width="formLabelWidth">
                  <el-input v-model="form.grade" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店员号码" :label-width="formLabelWidth">
                  <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="arrpush">确 定</el-button>
              </div>
            </el-dialog>
            <div class="meber">
              <p v-for="item in arr" :key="item.empName">{{item.empName}}</p>
            </div>
          </div>
          <div class="primary">
            <el-button type="primary" @click="addShop(state)">确认新增</el-button>
          </div>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      arr: [],
      dialogFormVisible: false,
      form: {
        name: "",
        grade: "",
        phone: ""
      },
      formLabelWidth: "120px",
      state: {
        shopName: "",
        shopLicenceNum: "",
        shopLicenceImg: "",
        shopAdd: "",
        shopLocation: "",
        shopCorporate: "",
        shopTel: "",
        shopImg: "",
        shopFeature: "",
        shopCommission: "",
        shopEmployee: [],
        userId:'',
      }
    };
  },
  methods: {
    ...mapActions(["applyStoreAsync"]),
    addShop(data) {
      this.applyStoreAsync(data);
      this.open(this.state.shopName)
    },
    open(name) {
      const h = this.$createElement;
      this.$notify({
        title: name+"门店",
        message: h(
          "i",
          { style: "color: teal" },
          "新增成功！"
        )
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.state.shopLicenceImg = file.data.url;
    },
    heardRemove(file, fileList) {
      console.log(file, fileList);
    },
    heardPictureCardPreview(file) {
      console.log('tupian',file)
      this.state.shopImg = file.data.url;
    },
    arrpush() {
      this.dialogFormVisible = false;
      this.arr.push({
        empName: this.form.name,
        empLevel: this.form.grade,
        empPhone: this.form.phone
      });
      this.state.shopEmployee = this.arr;
    }
  },
  mounted() {
    let userId;
    for(let item of document.cookie){
      if(item==';'){
       var ca= document.cookie.split(';');
        userId=ca[0].split('=')[1];
        break
      }else if(item=='='){
        userId=document.cookie.split('=')[1]
      }
    }
    this.state.userId=userId
  },
};
</script>
  
<style scope>
p {
  text-align: center;
}
.member {
  display: flex;
  justify-content: space-around;
}
.box-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 600px;
  display: flex;
  margin-top: 30px;
}
.meber {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
span {
  width: 150px;
  text-align: right;
  line-height: 40px;
}
.primary {
  margin-top: 30px;
}
=======
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-card class="box-card">
        <el-form :model="state">
          <div class="input">
            <span>门店名称：</span>
            <el-input v-model="state.shopName" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照号码：</span>
            <el-input v-model="state.shopLicenceNum" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>营业执照照片：</span>
            <el-upload
              action="/shops/addShopsImage"
              list-type="picture-card"
              :on-success="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog>
              <img width="100%" :src="state.shopLicenceImg" alt>
            </el-dialog>
          </div>
          <div class="input">
            <span>营业地址：</span>
            <el-input v-model="state.shopAdd" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>定位：</span>
            <el-input v-model="state.shopLocation" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>法人：</span>
            <el-input v-model="state.shopCorporate" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>联系电话：</span>
            <el-input v-model="state.shopTel" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>头图：</span>
            <el-upload
              action="/shops/addShopsImage"
              list-type="picture-card"
              :on-success="heardPictureCardPreview"
              :on-remove="heardRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog>
              <img width="100%" :src="state.shopImg" alt>
            </el-dialog>
          </div>
          <div class="input">
            <span>特色：</span>
            <el-input v-model="state.shopFeature" placeholder="请输入内容"></el-input>
          </div>
          <div class="input">
            <span>佣金比例：</span>
            <el-input v-model="state.shopCommission" placeholder="请输入内容"></el-input>
          </div>
          <div class="input member">
            <el-button type="success" @click="dialogFormVisible = true">新增店员</el-button>

            <el-dialog title="店员信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="店员名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店员等级" :label-width="formLabelWidth">
                  <el-input v-model="form.grade" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店员号码" :label-width="formLabelWidth">
                  <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="arrpush">确 定</el-button>
              </div>
            </el-dialog>
            <div class="meber">
              <p v-for="item in arr" :key="item.empName">{{item.empName}}</p>
            </div>
          </div>
          <div class="primary">
            <el-button type="primary" @click="addShop(state)">确认新增</el-button>
          </div>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      arr: [],
      dialogFormVisible: false,
      form: {
        name: "",
        grade: "",
        phone: ""
      },
      formLabelWidth: "120px",
      state: {
        shopName: "",
        shopLicenceNum: "",
        shopLicenceImg: "",
        shopAdd: "",
        shopLocation: "",
        shopCorporate: "",
        shopTel: "",
        shopImg: "",
        shopFeature: "",
        shopCommission: "",
        shopEmployee: [],
        userId:'',
      }
    };
  },
  methods: {
    ...mapActions(["applyStoreAsync"]),
    addShop(data) {
      this.applyStoreAsync(data);
      this.open(this.state.shopName)
    },
    open(name) {
      const h = this.$createElement;
      this.$notify({
        title: name+"门店",
        message: h(
          "i",
          { style: "color: teal" },
          "新增成功！"
        )
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.state.shopLicenceImg = file.data.url;
    },
    heardRemove(file, fileList) {
      console.log(file, fileList);
    },
    heardPictureCardPreview(file) {
      console.log('tupian',file)
      this.state.shopImg = file.data.url;
    },
    arrpush() {
      this.dialogFormVisible = false;
      this.arr.push({
        empName: this.form.name,
        empLevel: this.form.grade,
        empPhone: this.form.phone
      });
      this.state.shopEmployee = this.arr;
    }
  },
  mounted() {
    let userId;
    for(let item of document.cookie){
      if(item==';'){
       var ca= document.cookie.split(';');
        userId=ca[0].split('=')[1];
        break
      }else if(item=='='){
        userId=document.cookie.split('=')[1]
      }
    }
    this.state.userId=userId
  },
};
</script>
  
<style>
p {
  text-align: center;
}
.member {
  display: flex;
  justify-content: space-around;
}
.box-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 600px;
  display: flex;
  margin-top: 30px;
}
.meber {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
span {
  width: 150px;
  text-align: right;
  line-height: 40px;
}
.primary {
  margin-top: 30px;
}
>>>>>>> a0d9e3fb95e08f48efde6d4f773054a124cf5225
</style>
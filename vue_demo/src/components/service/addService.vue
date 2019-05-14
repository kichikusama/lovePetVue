<template>
  <div style="padding:40px">
    <el-form type="flex" ref="form" v-model="service" label-width="80px">
      <el-form-item label="服务名称">
        <el-input v-model="service.serviceName"></el-input>
      </el-form-item>
      <el-form-item label="耗费时间">
        <el-input v-model="service.serviceTime"></el-input>
      </el-form-item>
      <el-form-item label="基本价格">
        <el-input v-model="service.servicePrice"></el-input>
      </el-form-item>
      <el-form-item label="排列时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="service.serviceSchedule"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="service.serviceSchedule"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="服务类型">
        <el-select v-model="service.serviceType" placeholder="请选择服务类型">
          <el-option label="宠物造型" value="宠物造型"></el-option>
          <el-option label="宠物美容" value="宠物美容"></el-option>
          <el-option label="宠物寄养" value="宠物寄养"></el-option>
          <el-option label="宠物医疗" value="宠物医疗"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="适用规格">
        <el-select v-model="service.serviceCanFor" placeholder="请选择适用规格">
          <el-option label="幼宠" value="幼宠"></el-option>
          <el-option label="成宠" value="成宠"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务规格">
        <el-select v-model="service.serviceDetial" placeholder="请选择服务规格">
          <el-option label="普修" value="普通修理"></el-option>
          <el-option label="精修" value="精细修理"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="服务等级">
        <el-select v-model="service.serviceLevel" placeholder="请选择服务员等级">
          <el-option label="普通" value="普通服务员"></el-option>
          <el-option label="高级" value="高级服务员"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="add">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service" // 从状态机中获取 数据
);
export default {
  computed: {
    ...mapState(["service"])
  },
  methods: {
    ...mapActions(["onSubmit"]),
    add() {
      this.onSubmit()
        
    }
  }
};
</script>
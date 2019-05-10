<template>
  <el-transfer
    v-model="value4"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data3"
  ></el-transfer>
</template>

<script>
export default {
  data() {
    const generateData3 = _ => {
      const data = [];
      for (let i = 1; i <= 6; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
        });
      }
      return data;
    };
    return {
      userId: "",
      shopsId: "",
      data3: generateData3(),
      value4: []
    };
  }
//   mounted() {
//     let userId;
//     let shopsId;
//     for (let item of document.cookie) {
//       if (item == ";") {
//         var ca = document.cookie.split(";");
//         userId = ca[0].split("=")[1];
//         shopsId = ca[1].split("=")[1];
//         break;
//       } else if (item == "=") {
//         userId = document.cookie.split("=")[1];
//       }
//     }
//     console.log(shopsId);
//     this.userId = userId;
//     this.shopsId = shopsId;
//   }
};
</script>
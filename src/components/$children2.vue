<!--
 * @Author: Latte
 * @Date: 2021-10-24 18:11:13
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 18:30:33
 * @FilePath: \vue-component-demo\src\components\$children2.vue
-->
<template>
  <div>
    <div>这是子组件2</div>
  </div>
</template>

<script>
export default {
  name: "son2",
  data() {
    return {
      msg: "这是子组件2的属性",
    };
  },
  methods: {
    getMsg() {
      console.log("这是子组件2的方法");
    },
  },
  created() {
    // 通过$parent获取父组件的方法
    console.log("son2",this.$parent.msg);
  },
};
</script>

<style>
</style>
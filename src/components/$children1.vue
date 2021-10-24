<!--
 * @Author: Latte
 * @Date: 2021-10-24 18:11:03
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 18:36:36
 * @FilePath: \vue-component-demo\src\components\$children1.vue
-->
<template>
  <div>
    <div>这是子组件1</div>
  </div>
</template>

<script>
export default {
  name: "son1",
  data() {
    return {
      msg: "这是子组件1的属性",
    };
  },
  methods: {
    getMsg() {
      console.log("这是子组件1的方法");
    },
  },
  created() {
    // 通过$parent获取父组件的方法
    console.log("son1",this.$parent.msg);
  },
};
</script>

<style>
</style>
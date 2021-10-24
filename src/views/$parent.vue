<!--
 * @Author: Latte
 * @Date: 2021-10-24 02:12:37
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 18:36:39
 * @FilePath: \vue-component-demo\src\views\$parent.vue
-->
<template>
  <div>
    <!-- 给子组件绑定ref -->
    <children-1 ref="son1"></children-1>
    <children-2></children-2>
  </div>
</template>

<script>
import children1 from "../components/$children1.vue";
import children2 from "../components/$children2.vue";

export default {
  name: "father",
  components: {
    children1,
    children2,
  },
  data() {
    return {
      msg: "这是父组件的属性",
    };
  },
  methods: {
    getMsg() {
      console.log("这是父组件的方法");
    },
  },
  mounted() {
    // 通过$refs获取子组件的属性/方法
    console.log("father", this.$refs);
    // 通过$children获取子组件的属性/方法
    console.log("father", this.$children[0].getMsg);
    console.log("father", this.$children[1].msg);
  },
};
</script>

<style>
</style>

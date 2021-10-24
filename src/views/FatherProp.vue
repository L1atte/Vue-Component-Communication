<!--
 * @Author: Latte
 * @Date: 2021-10-24 02:12:37
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 23:29:50
 * @FilePath: \vue-component-demo\src\views\FatherProp.vue
-->
<template>
  <div>
    <div>Father</div>
    <p></p>

    <!-- 接受子组件的传值 -->
    <div>接收子组件的传值： {{ msg }}</div>
    <p></p>

    <!-- 接收孙子组件的传值 -->
    <div>接收孙子组件的传值： {{ msg2 }}</div>
    <!-- 将text1的值绑定给子组件, getMsg接受子组件的传值 -->
    <son-prop :text="text1" :msg="msg" @sendMsg="getMsg" @sendMsg2="getMsg2"></son-prop>
  </div>
</template>

<script>
import SonProp from "@/components/SonProp.vue";

export default {
  name: "Father",
  components: {
    SonProp,
  },
  data() {
    return {
      text1: "text from father",
      msg: "msg",
      msg2: "msg2",
    };
  },
  methods: {
    getMsg(msg) {
      // 接受子组件传递来的值，赋值给data中的属性
      this.msg = msg;
    },
    getMsg2(msg) {
      this.msg2 = msg;
    },
  },
};
</script>

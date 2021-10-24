<!--
 * @Author: Latte
 * @Date: 2021-10-24 13:10:15
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 23:29:01
 * @FilePath: \vue-component-demo\src\components\SonProp.vue
-->
<template>
  <div>
    <div>这是子组件</div>
    <!-- 将父组件传过来的值进行展示 -->
    <div>{{ text }}</div>
    <p></p>
    <!-- 向父组件传值 -->
    <button @click="sendMsg">向父组件传值</button>
    <p></p>
    <!-- $listeners里存放的是父组件中绑定的非原生事件 -->
    <grand-son v-bind="$attrs" v-on="$listeners"></grand-son>
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  components: {
    GrandSon,
  },
  // 通过props接受父组件的传值，这里 text 对应父组件的 :text="text1" 中的text
  props: {
    text: { type: String },
  },
  data() {
    return {
      msg: "text from son",
    };
  },
  methods: {
    sendMsg() {
      // 子组件通过绑定事件 this.$emit('函数名'，传递参数)
      this.$emit("sendMsg", this.msg);
    },
  },
};
</script>

<style>
</style>
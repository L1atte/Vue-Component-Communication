<!--
 * @Author: Latte
 * @Date: 2021-10-25 00:40:29
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-25 00:56:19
 * @FilePath: \vue-component-demo\src\components\inject\GrandSon.VUE
-->
<template>
  <div>
    <div>这是孙组件</div>
    <p></p>
    <input v-model="msg" />
    <button @click="send">对爷组件说</button>
  </div>
</template>

<script>
export default {
  name: "grandSon",
  inject: ["father"],
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    send() {
      this.father.grandSonSay(this.msg);
    },
  },
};
</script>

<style>
</style>
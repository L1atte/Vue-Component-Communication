<!--
 * @Author: Latte
 * @Date: 2021-10-25 00:40:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-25 01:04:06
 * @FilePath: \vue-component-demo\src\components\inject\son.vue
-->
<template>
  <div>
    <div>这是子组件</div>
    <p></p>
    <input v-model="msg" />
    <button @click="send">对父组件说</button>
    <p></p>
    <grand-son></grand-son>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue';
export default {
  name: "son",
  components: {
    GrandSon,
  },
  // 引入父组件
  inject: ["father"],
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    send() {
      this.father.sonSay(this.msg);
    },
  },
};
</script>

<style>
</style>
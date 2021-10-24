<!--
 * @Author: Latte
 * @Date: 2021-10-24 21:52:27
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-24 23:28:53
 * @FilePath: \vue-component-demo\src\components\grandson.vue
-->
<template>
  <div>
    <div>这是孙子组件</div>
    <div>{{ msg }}</div>

    <p></p>
    <button @click="sendMsg">向爷组件传值</button>
  </div>
</template>

<script>
export default {

  props: {
    msg: { type: String },
  },
  data() {
    return {
      msg2: 'text from GrandSon'
    }
  },
  methods: {
    sendMsg() {
      this.$emit("sendMsg2",this.msg2)
    },
  },
};
</script>

<style>
</style>
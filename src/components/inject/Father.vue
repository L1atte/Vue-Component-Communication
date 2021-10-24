<!--
 * @Author: Latte
 * @Date: 2021-10-25 00:40:53
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-25 01:03:50
 * @FilePath: \vue-component-demo\src\components\inject\Father.vue
-->
<template>
  <div>
    <div>这是父组件</div>
    <div>子组件对我说： {{ sonMsg }}</div>
    <div>孙子组件对我说： {{ grandSonMsg }}</div>
    <son></son>
  </div>
</template>

<script>
import Son from './Son.vue';
export default {
  name: 'father',
  components: {
    Son,
  },
  provide() {
    return {
      // 将自己暴露给子孙组件，这里声明的名称要于子组件引进的名称保持一致
      father: this
    }
  },
  data() {
    return {
      sonMsg: '', // 来自子组件的信息
      grandSonMsg: '', // 来自孙组件的信息
    }
  },
     methods:{
      /* 接受孙组件信息 */
      grandSonSay(value){
          this.grandSonMsg = value
      },
      /* 接受子组件信息 */ 
      sonSay(value){
          this.sonMsg = value
      },
   },
};
</script>

<style>
</style>
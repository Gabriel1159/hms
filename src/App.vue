<template>
  <!-- <ManagerView /> -->
  <demo />
</template>

<script>
import ManagerView from './manager/ManagerView.vue'
import demo from './demo.vue'
export default {
  name: 'App',
  components: {
   ManagerView,
    demo
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <xxgXxg/>
    <router-view/>
  </div>
</template>

<script>
import xxgXxg from '@/components/xxgXxg.vue'; // 
export default ({
  name:'App',
  components: {
    xxgXxg,
  },
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<template>
  <cube/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cube from './components/cube.vue'

export default defineComponent({
  name: 'App',
  components: { 
    cube
  }
})
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 236, 236);
}
</style>

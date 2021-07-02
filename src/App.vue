<template>
  <!-- <HelloWorld/> -->
  <CubeDark class="cube"></CubeDark>
  <CubeLight class="cube"></CubeLight>
  <CubeRed class="cube"></CubeRed>
  <CubeGreen class="cube"></CubeGreen>
  <CubeBlue class="cube"></CubeBlue>
  <CubeOrange class="cube"></CubeOrange>
  <CubeYellow class="cube"></CubeYellow>
  <CubeTeal class="cube"></CubeTeal>
  <CubePurple class="cube"></CubePurple>
  <CubePink class="cube"></CubePink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import CubeDark from './components/cube/CubeDark.vue'
import CubeLight from './components/cube/CubeLight.vue'
import CubeRed from './components/cube/CubeRed.vue'
import CubeGreen from './components/cube/CubeGreen.vue'
import CubeBlue from './components/cube/CubeBlue.vue'
import CubeOrange from './components/cube/CubeOrange.vue'
import CubeYellow from './components/cube/CubeYellow.vue'
import CubeTeal from './components/cube/CubeTeal.vue'
import CubePurple from './components/cube/CubePurple.vue'
import CubePink from './components/cube/CubePink.vue'
export default defineComponent({
  name: 'App',
  components: { 
    // HelloWorld,
    CubeDark,
    CubeLight,
    CubeRed,
    CubeGreen,
    CubeBlue,
    CubeOrange,
    CubeYellow,
    CubeTeal,
    CubePurple,
    CubePink,
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

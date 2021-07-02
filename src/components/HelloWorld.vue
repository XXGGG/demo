<template>
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
import { ref, defineComponent } from 'vue'
import CubeDark from './cube/CubeDark.vue'
import CubeLight from './cube/CubeLight.vue'
import CubeRed from './cube/CubeRed.vue'
import CubeGreen from './cube/CubeGreen.vue'
import CubeBlue from './cube/CubeBlue.vue'
import CubeOrange from './cube/CubeOrange.vue'
import CubeYellow from './cube/CubeYellow.vue'
import CubeTeal from './cube/CubeTeal.vue'
import CubePurple from './cube/CubePurple.vue'
import CubePink from './cube/CubePink.vue'


export default defineComponent({
  name: 'cube',
  components:{
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
  },
  props: {
    
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
.cube{
  width: 10%;
  height: auto;
  cursor: pointer;
}
</style>

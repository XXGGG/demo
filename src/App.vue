<template>
  <div id="app">
    <xxgXxg v-if="this.$route.path != '/'" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import xxgXxg from '@/components/xxgXxg.vue'; // 
export default ({
  name:'App',
  components: {
    xxgXxg,
  },
  created(){
    console.log(this.$route)
  },
  methods:{
    
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app::-webkit-scrollbar{
  display: none;
}

</style>

<template>
  <div id="app">
    <returnKey v-if="this.$route.path != '/'" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import returnKey from '@/components/returnKey.vue'; 
export default ({
  name:'App',
  components: {
    returnKey,
  },
  created(){
  },
  methods:{
    
  }
})
</script>
<style>
/* #app::-webkit-scrollbar{
  display: none;
} */
</style>

<template>
  <div class="body">

<div class="advertising">
  <div class="top_mid">
    <a class="top_left">教育商城首页</a>
    <a class="top_left">退出商城</a>
    <a class="top_right" href="">广告</a>
  </div>
</div>

<div class="nav">
  <div class="nav_mid">
    
  </div>
</div>
    


  </div>
</template>

<script lang="ts">

export default ({
  name: 'Home',
  data () {
    return {
    }
  },
  created(){
  },
  methods:{
  }
});
</script>

<style scoped>
.body{
  min-width: 320px;
  color: #1d1d1f;
  background-color: #fff;

}
.advertising{
  width: 100%;
  height: 44px;
  position: fixed;
  background-color: #444;
  top: 0;
  z-index: 9999;
  overflow: hidden;
}
.top_mid{
  width: 1034px;
  height: 44px;
  margin: 0 auto;
}

.top_left{
    color: #fff;
    cursor: pointer;
    display: block;
    line-height: 40px;
    overflow: hidden;
    text-decoration: none;
    float: left;
    padding: 2px 10px;
    font-size: 1px;
}
.top_right{
    color: #a8a8aa;;
    cursor: pointer;
    display: block;
    line-height: 40px;
    overflow: hidden;
    text-decoration: none;
    float: right;
    padding: 2px 10px;
    font-size: 10px;
}

.nav{
  width: 100%;
  height: 44px;
  position: fixed;
  top:44px;
  background-color: #0a0a0a;
}
.nav_mid{
  width: 1034px;
  height: 44px;

}
</style>

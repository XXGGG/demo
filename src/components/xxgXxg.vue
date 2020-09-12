<template>
<router-link to="/">
  <div class="ball" title="返回首页">
    
      💠
    
  </div>
  </router-link>
</template>

<script>
export default({
  name: 'xxgXxg',
  props: {
  },
});
</script>

<style scoped>

.ball{
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size:44px;
  position: fixed;
  margin: auto;
  bottom:10px;
  left:0;
  right: 0;
  background-color: #74747480;
  border-radius: 14px;
  box-shadow: 2px 2px 18px -6px #000000;
  cursor: pointer;
  overflow: hidden;
  z-index: 100;
}
.ball:hover{
  box-shadow: 1px 1px 10px -6px #000000;
  background-color: #272727ea;
}
</style>

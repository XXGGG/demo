<template>
  <div class="body">

      <div class="down">往下滑</div>
      <div class="sticky">
        <h1 :style="'background-position-x: calc(100% - ' + scrolled + '% );'">Less bezel,more screen.</h1>
      </div>

  </div>
</template>

<script>
export default {
    name:'text2',
    data() {
        return{
            scrolled:0,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.go_scroll)
    },
    methods:{
        go_scroll(e){
            let top = document.documentElement.scrollTop
            let s_height = document.documentElement.scrollHeight
            let c_height = document.documentElement.clientHeight
            console.log(e)
            console.log(top)
            // 滑动中 - top 距离顶部的高度
            // console.log(top)
            
            // scrollHeight是网页内容实bai际高度 （全部高度）
            // console.log(s_height)

            // 浏览器窗口高度 客户端窗口高度    （窗口高度）
            // console.log(c_height)

            // 这个变量用来保存 移动的距离 占 可以移动距离的 参数 0 ~ 1
            this.scrolled = 100 * top / (s_height - c_height)
            console.log(this.scrolled) 
        }
    },
    beforeRouteLeave(to,from,next){
        this.$destroy();
        next();
    },
    destroyed() {
        console.log('销毁监听')
        window.removeEventListener('scroll',this.go_scroll)
        console.log('销毁完毕')
    }
}
</script>


<style scoped>
.down{
    color: #fff;
    font-size: 30px;
    margin: 100px auto;
}
.body{ 
    background-color: #000;
    position: absolute;
    width: 100%;
    min-height:200%;
    user-select: none;
}
.sticky {
    position: sticky;
    top:0;

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-family: Helvetica;
    font-size: 48px;
    color: #fff;
    /* 文字间隔 👇*/
    letter-spacing: -0.3px;

    background-image: linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 33.33%,rgba(255,255,255,0) 66.67%,rgba(255,255,255,0) 100%);
    background-size: 300% 100%;
    background-position-x: 100%;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

}

</style>
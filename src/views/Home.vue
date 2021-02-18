<template>
  <div class="home" :style="'background-color:#' + bgColor + '05'"  >
    
    <!-- explain 整个展示框 -->
    <div class="frame">
      
      <div class="frame_top">
        前端 - 展示
        <i class="green frame_i" 
           style="right: 100px;" 
           title='随机改变背景颜色' 
           @click="shueijiBGC()"></i>
        <i class="yellow frame_i"
           style="right: 60px;" 
           title=''></i>
        <i class="red frame_i" 
           style="right: 20px;"></i>
      </div>

      <div class="frame_body">
        <div class="content_body" >
            <router-link class="item" :to="item.url" v-for="(item,id) in demoList" :key="id">
              <div class="item_img" :style="'background-image:url(' + item.img + ')' "></div>
              <div class="item_name">{{item.name}}</div>
              <div class="item_describe" :title="item.describe">{{item.describe}}</div>
            </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default ({
  name: 'Home',
  data () {
    return {
      bgColor:'',
      demoList:[],
    }
  },
  created(){
    this.shueijiBGC();//页面随机颜色
    this.getList();//得到demo-test-other列表
  },
  methods:{
    shueijiBGC(){
      this.bgColor =  Math.floor(Math.random() * 100);
    },
    getList(){
      this.axios.get('json/demoList.json').then(res => {
        this.demoList = res.data.demoList
      })
    },
  }
});
</script>


<style lang="scss" scoped>

.home {
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  .frame{
    height: 80vh;
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
    overflow: hidden;
    @media screen and (min-width:600px){
      border-radius: 14px;
      width: 90vw;
      height: 90vh;
    }
    .frame_top{
      width: 100%;
      height: 50px;
      line-height: 50px;
      box-shadow: 1px 1px 8px -6px #000000;
      box-sizing: border-box;
      text-align: center;
      font-size: 30px;
      position: relative;
      overflow: hidden;
      user-select: none;
      .frame_i{
        display: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top:15px;
        cursor: pointer;
        @media screen and (min-width:600px){
          display: block;
        }
      }
      .green{
        background-color: rgb(74, 228, 151);
      }
      .yellow{
        background-color: rgb(233, 230, 84);
      }
      .red{
        background-color: rgb(255, 113, 70);
      }
    }
    .frame_body{
      width: 100%;
      height: calc(100vh - 50px);
      padding: 30px;
      box-sizing: border-box;
      overflow: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      @media screen and (min-width:600px){
          height: calc(90vh - 50px);
      }
      .content_body{
        width: 100%;
        min-height: 10px;
        box-sizing: border-box;
        text-align: center;
        margin-bottom:10px ;
        overflow: hidden; 
        /* 清除浮动👆 */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        @media screen and (min-width:600px){
            display: flex;
            flex-direction: row;
            justify-content: start;
            /* align-content: center; */
            /* align-items: center; */
        }
        }
        .item{
          width: 100%;
          max-width: 300px;
          min-width: 10px;
          margin: 10px;
          min-height: 230px;
          border-radius: 10px;
          float: left;
          overflow: hidden;
        }
        .item_img{
          width: 100%;
          max-width: 300px;
          min-width: 10px;
          height: 200px;
          border-radius: 10px;
          background-image: url('../../public/img/homeImg/demo.png');
          background-repeat: no-repeat;
          background-size:cover;
          background-position: center;
          transition: all .5s;
        }
        .item:hover .item_img{
          transform: scale(0.9);
        }
        .item_name{
          margin: 4px 0;
          font-size: 26px;
        }
        .item_describe{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
      }
    }
  }
</style>
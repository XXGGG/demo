<template>
  <div class="home" :style="'background-color:#' + bgColor + '05'"  >

    <div class="explain">
      
      <div class="apple_nav">
        前端 - 展示
        <i class="green apple_i" title='随机改变背景颜色' @click="shueijiBGC()"></i>
        <i class="yellow apple_i" title=''></i>
        <i class="red apple_i" title='关于我' @click="about()"></i>
      </div>

      <div class="box">
        <!-- demo的东西 -->
        <h1 class="h1">Demo</h1>
        <hr/>
        <div class="area" >
            <router-link class="item" :to="item.url" v-for="item in demoList" :key="item.id">
              <div class="item_img" :style="'background-image:url(' + item.img + ')' "></div>
              <div class="name">{{item.name}}</div>
              <div class="describe" :title="item.describe">{{item.describe}}</div>
            </router-link>
        </div>
        <!-- css的东西 -->
        <h1 class="h1">Css</h1>
        <hr/>
        <div class="area" >
            <router-link class="item" :to="item.url" v-for="item in cssList" :key="item.id">
              <div class="item_img" :style="'background-image:url(' + item.img + ')' "></div>
              <div class="name">{{item.name}}</div>
              <div class="describe" :title="item.describe">{{item.describe}}</div>
            </router-link>
        </div>
        <!-- test的东西 -->
        <h1 class="h1">Test</h1>
        <hr/>
        <div class="area" >
            <router-link class="item" :to="item.url" v-for="item in testList" :key="item.id">
              <div class="item_img" :style="'background-image:url(' + item.img + ')' "></div>
              <div class="name">{{item.name}}</div>
              <div class="describe" :title="item.describe">{{item.describe}}</div>
            </router-link>
        </div>
        <!-- 其他 -->
        <h1 class="h1">Other</h1>
        <hr/>
        <div class="area" >
            <a class="item" :href="item.url" v-for="item in otherList" :key="item.id" target="_brank">
              <div class="item_img" :style="'background-image:url(' + item.img + ')' "></div>
              <div class="name">{{item.name}}</div>
              <div class="describe" :title="item.describe">{{item.describe}}</div>
            </a>
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
      cssList:[],
      testList:[],
      otherList:[],
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
        this.cssList = res.data.cssList
        this.testList = res.data.testList
        this.otherList = res.data.otherList
      })
    },
    about(){
      location.href='https://xxggg.gitee.io'
    }
  }
});
</script>

<style scoped>

.home{
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.explain{
  /* width: 80vw;
  height: 80vh; */
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  border-radius: 14px;
  box-shadow: 5px 5px 20px -10px #000000;
  overflow: hidden;

}
.apple_nav{
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
}
.apple_i{
  display: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top:15px;

  cursor: pointer;
}
.green{
  background-color: rgb(74, 228, 151);
  right: 100px;
}
.yellow{
  background-color: rgb(233, 230, 84);
  right: 60px;
}
.red{
  background-color: rgb(255, 113, 70);
  right: 20px;
}

.box{
  width: 100%;
  height: calc(100vh - 50px);
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;

  
 
}
.box::-webkit-scrollbar{
  display: none;
}
.h1{
  font-size: 30px;
  user-select: none;
}


.area{
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


.name{
  margin: 4px 0;
  font-size: 26px;
}
.describe{
  overflow: hidden;
  /* text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box; */
}



</style>
<style scoped>

@media screen and (min-width:600px){
  .explain{
    width: 90vw;
    height: 90vh;
  }
  .apple_i{
    display: block;
  }
  .box{
    height: calc(90vh - 50px);
  }
  .area{
    display: flex;
    flex-direction: row;
    justify-content: start;
    /* align-content: center; */
    /* align-items: center; */
  }
}
</style>
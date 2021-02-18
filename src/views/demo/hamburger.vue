<template>
  <div>
    <div class="menu_top">
      <input type="checkbox" id="toggler" />
      <label for="toggler">
        <div class="box">
          <span></span>
          <span></span>
        </div>
      </label>

      <div class="nav_items">
          <li>Home</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>Mac</li>
          <li>TV</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hamburger",
};
</script>

<style>
/* 
  
 */


/* 顶部菜单栏 */
.menu_top{
    height: 240px;
    padding: 20px 60px;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
}

/* 汉堡🍔标志的区域盒子 */
.box {
  width: 200px;
  height: 200px;
  margin: auto;
  /* background-color: rgb(165, 106, 106); */
  cursor: pointer;
}
/* 汉堡的线条 */
.box span{
    display: block;
    height: 5px;
    background-color: #fff;
    position: relative;
    top: 60px;

    transition: transform .2s ease-in-out, top .2s ease-in-out .2s;
}
.box span:nth-child(2){
    margin-top:80px;
}
/* 当多选按钮被按下时*/
/* + 是 兄弟元素 就是隔壁的label */
#toggler:checked + label .box span:nth-child(1){
    transform: rotate(45deg);
    top:100px;
    transition: top .2s ease-in-out, transform .2s ease-in-out .2s;
}
#toggler:checked + label .box span:nth-child(2){
    transform: rotate(-45deg);
    top:20px;
    transition: top .2s ease-in-out, transform .2s ease-in-out .2s;
}

/* [试验]当多选按钮被按下时，改变box里的颜色 */
/* #toggler:checked + label .box {
  background-color: aquamarine;
} */
/* 然后隐藏这个按钮 */
#toggler {
  display: none;
}



.nav_items{
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: calc(100vh - 240px);
    position: absolute;
    top:240px;
    left: 0;
    opacity: 0;
    transition: all .2s ease-in-out;
    /* 改变中心点 */
    transform-origin: 50% 0;
}
/* 毛玻璃 */
.nav_items::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: -1;
    filter: blur(50px);
}
/* ~ 相同父元素的另一个元素 */
#toggler:checked ~ .nav_items{
    opacity: 1;
    transform: scaleY(1);
}

li{
    color: #fff;
    list-style-type: none;
    margin: 10px;
    font-size: 50px;
    user-select: none;
}
</style>
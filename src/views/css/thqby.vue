<template>
<div class="thqby">
  <div class="body">
    <!-- thqby 来自 CodingStartup 的“天黑请闭眼” -->
    <div>
      <label for="toggle">
        <input type="checkbox" id="toggle" />
        <span></span>
      </label>
    </div>
    <!-- <div class="box">
        <div class="item">白</div>
        <div class="item">自动</div>
        <div class="item">黑</div>
    </div> -->
  </div>
</div>
</template>

<script>

export default {
    name:'thqby',
    mounted() {
        document.body.addEventListener('touchstart', function () { });
        node.addEventListener('contextmenu', function(e){
            e.preventDefault();
        });
        node.ontouchend = function () {
            throw new Error("NO ERRPR:禁止长按弹出的菜单");
        }
        // 禁止手机移动端长按弹出菜单。。。 没用
    }
};
</script>

<style>
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早起浏览器*/
  -moz-user-select: none; /*火狐浏览器*/
  -ms-user-select: none; /*IE浏览器*/
  user-select: none; /*用户是否能够选中文本*/

  /* 也没用 暂时 */
}

/* 用:root 不能使用scoped  下次写多一次 用scss */
:root {
  --button-width: 50vw;
  --button-height: 29.5vw;
  --toggle-diameter: 25.5vw;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  /* --button-toggle-offset:20px; */
  --toggle-shadow-offset: 0.1vw;
  --toggle-wider: 33.3vw;
  --color-grey: #e9e9e9;
  --color-dark-grey: #39393d;
  --color-green: #30d158;
}

.thqby span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;

  transition: 0.3s all ease-in-out;
}
.thqby span::after {
  content: "";
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);

  transition: 0.3s all ease-in-out;
}
.thqby .body {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}

.thqby input[type="checkbox"]:checked + span {
  background-color: var(--color-green);
}
.thqby input[type="checkbox"]:checked + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
    )
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.thqby input[type="checkbox"] {
  display: none;
}

.thqby input[type="checkbox"]:active + span::after {
  width: var(--toggle-wider);
}
.thqby input[type="checkbox"]:checked:active + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
    )
  );
}

@media (prefers-color-scheme: dark) {
  .thqby .body {
    background-color: #1c1c1e;
  }
  .thqby span {
    background-color: var(--color-dark-grey);
  }
}
</style>

<style scoped>
.thqby .box {
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
}
.thqby .item {
  width: 100px;
  height: 100px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
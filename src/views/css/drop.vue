// 水滴
<template>
<div>
    <div class="container">

        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="collection"></div>
        <p class="text">80%</p>
    </div>
</div>
</template>

<script>
export default({
    name:'drop',
})
</script>

<style scoped>

.container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

/* 重点：对比度10 */
    filter: contrast(10);
    overflow: hidden;
}

.drop{
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;

/* 重点：高斯模糊10 */
    filter: blur(10px);
    position: absolute;
    animation: 2s drop linear infinite;
    opacity: 0;
}

.drop:nth-child(2){
/* 动画延迟 */
    animation-delay: 0.2s;
}
.drop:nth-child(3){
    animation-delay: 0.5s;
}

@keyframes drop{
    0%{
        transform: scale(.7) translateY(-800%);
        opacity: 0;
    }
    50%{
        transform: scale(.5) translateY(-80%);
        opacity: 1;
    }
    100%{
        transform: scale(.3) translateY(0);
    }
}

.collection{
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;

    filter: blur(10px);
    animation:2.8s collection linear infinite;
}

@keyframes collection{
    0%{
        transform:scale(1) rotate(0deg);
    }
    50%{
        transform:scale(1.2)  rotate(180deg);
        width: 105px;
        border-top-left-radius: 42%;
        border-bottom-left-radius: 38%;
    }
    100%{
        transform:scale(1)  rotate(360deg);
    }
}

.text{
    display: block;
    color: #000;
    position: absolute;
    font-size: 28px;
    font-weight: bold;
}
</style>

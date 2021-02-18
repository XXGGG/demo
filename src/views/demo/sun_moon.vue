<template>
    <div>
        <div class="sun" :style="`clip-path: inset(0px ${per}% 0 0);`"></div>
        <div class="moon"></div>
    </div>
</template>

<script>
export default {
    name:'sun_moon',
    data() {
        return {
            per:20
        }
    },
    mounted() {
        window.addEventListener('mousemove',this.move)
    },
    methods:{
        move(e){
            console.log(e)
            console.log(e.clientX)
            console.log(window.innerWidth)
            console.log(e.clientX / window.innerWidth)
            console.log(e.clientX / window.innerWidth *100)
            let per = (100 - e.clientX / window.innerWidth * 100)
            this.per = per
        }
    },

    //重要： 销毁监听
    beforeRouteLeave(to, from, next) {
        this.$destroy();
        next();
    },
    destroyed() {
        console.log('销毁监听')
        window.removeEventListener('mousemove',this.move)
        console.log('销毁完毕')
    }

}

</script>

<style scoped>

.sun{
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: #ffeea2;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;

    clip-path: inset(0px 50% 0 0);
}
.sun::after{
    content: '';
    display: block;
    width: 600px;
    height: 600px;
    background-color: orange;
    border-radius: 50%;
}


.moon{
    position: absolute;
    background-color: #040720;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.moon::after{
    content: '';
    display: block;
    width: 600px;
    height: 600px;
    box-shadow: 140px 140px 0px cyan;
    border-radius: 50%;
    transform: translate(-140px, -140px);
}


</style>

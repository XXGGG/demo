<template>
    <div class="flex-container">
        <div class="box A">A</div>
        <div class="box B">B</div>
        <div class="box C">C</div>
        <div class="box D">D</div>
        <div class="box E">E</div>
    </div>
</template>

<script>
export default {
    name:'Flexbox'
}
</script>

<style scoped>
.box{
    /* width: 60px; */
    width: 16vw;
    /* height: 60px; */
    height: 16vw;
    background-color: #eee;
    text-align: center;
    border-radius: 4px;
    box-shadow: 1px 1px 10px -4px rgba(0, 0, 0, 18);
    font-size: 10vw;
    user-select: none;

    display:flex;
    align-items: center;
    justify-content: center;

    flex: 0 1 auto;
}
.A {background-color: #6DD9BF;}
.B {background-color: #50A18E;}
.C {background-color: #F2D680;}
.D {background-color: #F2916D;}
.E {background-color: #F26E50;}

.flex-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    /* background-color: pink; */
    background-color: #222;
    flex-direction: row;

    /* justify-content:space-around; */
    justify-content:space-evenly;
    align-items:center;
}
</style>


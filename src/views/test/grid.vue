// 练习grid 网格布局
<template>
<div class="container">

    <div class="grid">
        <div class="box A">A</div>
        <div class="box B">B</div>
        <div class="box C">C</div>
        <div class="box D">D</div>
        <div class="box E">E</div>
    </div>

    
        

</div>
</template>

<script>
export default({
    name:'grid',
    data() {
        return {
        }
    },
    computed: {
        
    },
    methods:{

    }
})
</script>

<style scoped>
.container{
    width: 100vw;
    background-color:rgb(71, 166, 230);
    float: left;
}
.grid{
    width: 100vw;
    height: 100vh;
    background-color: lightcoral;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    /* grid-template-columns: 100px 100px 100px ; */
    /* 代表横排 比例 */
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-columns:repeat(auto-fill) ;

    /* column-gap: 10px; */
    /* row-gap: 10px; */
    /* 或者gap 统一设置 */
    /* gap:10px; */

    /* 在竖方向对齐 居中 */
    align-items: center;
    /* align-items: end; */

    /* 在横方向 */
    justify-items: center;

    float: left;
}

.box{
    /* width: 60px; */
    width: 10vw;
    /* height: 60px; */
    height: 10vw;
    background-color: #eee;
    text-align: center;
    border-radius: 4px;
    box-shadow: 1px 1px 10px -4px rgba(0, 0, 0, 18);
    font-size: 6vw;
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


</style>

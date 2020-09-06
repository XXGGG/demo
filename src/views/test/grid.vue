// 练习grid 网格布局
<template>
<div class="container">

    <div class="grid" :style="'grid-template-columns:' + grid_template_columns +';' +
                              'align-items:'+ align_items + ';' +
                              'justify-items:'+ justify_items + ';'
                              " 
    >
        <div v-for="i of quantity" 
            :key='i' 
            class="box" 
            :style="'width:' + box_width + ';' + 
                    'height:' + box_width + ';'"
        ></div>
    </div>

    <div class="control">

        <div class="control_box">
            <div>display: </div>
            <div>grid</div>
        </div>

        <div class="control_box">
            <div>方块大小（width）: </div>
            <select name="count"  v-model="box_width">
                <option  value="50px">50px</option>
                <option  value="100px">100px</option>
                <option  value="10vw">10vw</option>
            </select>
        </div>

        <div class="control_box">
            <div>数量: </div>
            <select name="count"  v-model="count">
                <option v-for="num of numList" :key="num" :value="num">{{num}}</option>
            </select>
        </div>

        <div class="control_box">
            <div>grid-template-columns: </div>
            <select name="grid-template-columns" v-model="grid_template_columns">
                <option value="33% 33% 33%">33% 33% 33%</option>
                <option value="repeat(auto-fill)">repeat(auto-fill)</option>
            </select>
        </div>

        <div class="control_box">
            <div>align-items: </div>
            <select name="align_items" v-model="align_items">
                <option value="start">start</option>
                <option value="end">end</option>
                <option value="center">center</option>
            </select>
        </div>

        <div class="control_box">
            <div>justify-items: </div>
            <select name="justify_items" v-model="justify_items">
                <option value="start">start</option>
                <option value="end">end</option>
                <option value="center">center</option>
            </select>
        </div>
        
    </div>

</div>
</template>

<script>
export default({
    name:'grid',
    data() {
        return {
            align_items:'start',
            justify_items:'start',
            box_width:'50px',
            // quantity:[1,2,3]
            numList:[1,2,3,4,5,6,7,8,9],
            count:5,
            grid_template_columns:'repeat(auto-fill)'
        }
    },
    computed: {
        quantity(){
            let list = []
            for(let i=0; i<this.count ; i++){
                list.push(i)
            }
            return list 
        }
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
    height: 100vw;
    background-color: lightcoral;
    border-radius: 5px;
    overflow: hidden;



    display: grid;
    /* grid-template-columns: 100px 100px 100px ; */
    /* 代表横排 比例 */
    /* grid-template-columns: 1fr 1fr 1fr ; */
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
    width: 100px;
    height: 100px;
    background-color: #333333;
    border-radius: 5px;
}
.control{
    width: 100vw;
    float: left;
}
.control_box{
    box-sizing: border-box;
    width: 96%;
    height: 60px;
    line-height: 40px;
    background-color: rgb(243, 243, 243);
    margin:2%;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;

    overflow: hidden;
}
.control_box div{
    float: left;
}
.control_box select{
    font-size: 20px;
}

@media screen and (min-width:600px){
    .grid{
        width: 100vh;
        height: 100vh;
    }
    .control{
        width: calc(100vw - 100vh);
        min-width: 400px;
    }
}


</style>

<template>
<div class="big_box">
    <div v-if="num > 0">
        <img src="../../../../public/img/shopping/latiao.jpg" class="gwc_img">
        <div class="box">商品数量：{{num}}</div>
        <div class="box" @click="remove_gwc()">清空购物车</div>
    </div>
    <router-link to='vuex' class="go_back">返回购物</router-link>
    <div class="box" @click="pay_gwc()">下单</div>
</div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'
export default ({
    name:"vuex",
    data(){
        return {

        }
    },
    methods:{
        ...mapMutations([
            'subNum'
        ]),
        remove_gwc(){
            this.subNum(0)
            alert('清空了！！！😋')
        },
        pay_gwc(){
            if(this.num>0){
                alert('好了，假装你已经买了~ 😋')
                this.subNum(0)
            }else{
                alert('木有商品~ 😑 请去购物哟');
            }
            
        }
    },
    computed: {
        ...mapState([
            'num',
        ])
    }
})
</script>

<style scoped>
.big_box{
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.box{
    width: 200px;
    height: 100px;
    background-color:rgb(61, 153, 189);
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size:24px;
    user-select: none;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 20px -10px #333;
    float: left;
}
.gwc_img{
    width: 140px;
    height: 100px;
    float: left;
    background-color: rgb(51, 51, 51);
    border-radius: 5px;
    box-shadow: 2px 2px 20px -10px #333;
    overflow: hidden;
    margin: 10px;
}
.go_back{
    display: block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px -5px #333;
    text-align: center;
    font-size: 20px;
    overflow: hidden;
}
</style>

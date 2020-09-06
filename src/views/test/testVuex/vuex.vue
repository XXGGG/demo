<template>
<div class="big_box">
    <div class="shopping">
        <div class="shop_img">
            <img src="../../../../public/img/shopping/latiao.jpg" alt="">
        </div>

        <div class="add_shop">
            <div  @click="sub()"> ➖ </div>
            <div class="box"><input min="0" type="number" v-model="sum"></div>
            <div @click="add()"> ➕ </div>
        </div>
        <div class="addFun" @click="re_sum()">重置</div>
        <div class="addFun" @click="addFun()">加入购物车</div>
        <div class="addFun" @click="go_gwc()">🛒</div>
        
    </div>
    
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default ({
    name:"vuex",
    data(){
        return {
            sum:0,
        }
    },
    methods:{
        ...mapMutations([
            'addNum',
            'subNum'
        ]),
        add(){
            // this.$store.commit('addNum');
            this.sum++
            // this.addNum();
        },
        sub(){
            if(this.sum<=0){
                return;
            }else{
                // this.$store.commit('subNum');
                this.sum--
                // this.subNum();
            }
        },
        addFun(){
            if(this.sum<=0){
                alert('您没有添加商品哦(⊙o⊙)')
                return;
            }else{
                this.addNum(this.sum);
                alert('添加成功！请到购物车查看！')
                this.sum = 0
            }
        },
        go_gwc(){
            this.$router.push("/cart")
        },
        re_sum(){
            this.sum = 0
        }
    },
    computed: {
        ...mapState([
            'num',
        ]),
        
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

.shopping{
    width: 400px;
    height: 520px;
    border-radius: 10px;
    background-color: aliceblue;
    overflow: hidden;
    box-shadow: 1px 1px 10px -5px #333;
}
.shop_img{
    width: 400px;
    height: 240px;
    overflow: hidden;
}
.shopping img{
    width: 100%;
}
.box{
    width: 100px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size:30px;
    user-select: none;
}
.box input{
    width: 100%;
    height: 100%;
    font-size: 30px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
.add_shop{
    width: 400px;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

}
.add_shop div{
    width: 100px;
    height: 40px;
    line-height: 40px;
    float: left;
    border-radius: 5px;
    background-color: rgb(100, 100, 100);
    cursor: pointer;
    user-select: none;
}
.addFun{
    width: 380px;
    height: 50px;
    line-height: 50px;
    margin: 10px;
    border-radius: 5px;
    background-color: rgb(100, 100, 100);
    cursor: pointer;
    font-size: 20px;
    color: rgb(219, 219, 219);
    user-select: none;
}

</style>

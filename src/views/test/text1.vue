<template>
    <div class="box">
        <h1 class="h1">Thank you for watching</h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.box{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

.h1{
    color: transparent;
    /* color: rgba(95, 95, 95, 0.466); */
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(to right,#000,#16d2d8d2,#000);
    -webkit-background-clip: text;
    background-size: 90%;
    background-repeat: no-repeat;
    animation: move 5s linear infinite;

    user-select: none;
}

@keyframes move{
    0%{
        background-position: -400%;
    }
    50%{
        background-position: 400%;
    }
    100%{
        background-position: -400%;
    }
}

</style>
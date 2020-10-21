<template>
<div class="body">
    <div class="card-contaniner">
        <div class="cover">
            COVER
        </div>
        <div class="back">
            BACK
        </div>
    </div>
</div>
</template>

<script>
export default({
    name:'flop'
})
</script>

<style scoped>
.body{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(147,230,241,1) 0%, rgba(145,192,241,1) 45.5% );
}
.card-contaniner{
    width: 300px;
    height: 400px;
    position: relative;

/* 这个是关键：让这个区域有纵深感 */
    perspective: 1000px;
}
.cover, .back{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 40px;
    box-shadow: 1px 1px 10px -5px #333;
    font-weight: bold;
    user-select: none;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(51, 51, 51, 0.376);

/* 这个是关键点 - 让后面不显示 */
    backface-visibility: hidden;

    transition: all .25s ease-in-out;
}
.cover{
    background-image: linear-gradient( 95.2deg,  rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
    transform: rotateY(0deg);
}
.card-contaniner:hover .cover{
    transform: rotateY(180deg);
}

.back{
    background-image: radial-gradient( circle 534px at 7.8% 17.6%,  rgba(254,253,112,1) 1.7%, rgba(248,143,111,1) 91.8% );
    transform: rotateY(-180deg);
}
.card-contaniner:hover .back{
    transform: rotateY(0deg);
}




</style>
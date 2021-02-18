<template>
  <div class="big_box">
    <h1 data-h1="SPOTLIGHT" class="h1">SPOTLIGHT</h1>
  </div>
</template>


<script>
export default {
  name: "SpotLight",
};
</script>

<style scoped>
.big_box{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
}

.h1{
    color: rgb(71, 71, 71);
    font-size: 7rem;
    letter-spacing:20px;
    font-family:Helvetica;
    position: relative;
    font-weight: bold;
}
.h1::after{
    content:attr(data-h1);
    position:absolute;
    top:0;
    left: 0;
    font-weight: bold;
    color: transparent;
    background-image: url(https://images.unsplash.com/photo-1600052927546-d70e9f016ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-clip-path: ellipse(80px 80px at 10% 50%);
    clip-path: ellipse(80px 80px at 10% 50%);

    animation: jgd 5s infinite;
}

@keyframes jgd{
    0%{
        -webkit-clip-path: ellipse(80px 80px at 10% 50%);
        clip-path: ellipse(80px 80px at 10% 50%);
    }
    50%{
        -webkit-clip-path: ellipse(80px 80px at 90% 50%);
        clip-path: ellipse(80px 80px at 90% 50%);
    }
    100%{
        -webkit-clip-path: ellipse(80px 80px at 10% 50%);
        clip-path: ellipse(80px 80px at 10% 50%);
    }
}

</style>
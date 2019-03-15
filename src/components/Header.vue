<template>
    <div>
        <div>
            <div>
                <a href="#" >
                    <img class="logo" src='../assets/logo2.png'/>
                </a>
            </div>
            <div>
                <span class="login">
                    <a style="color:red" href="#" >下载app</a> |
                    <a style="color:red" href="#" >登陆</a>
                </span>
            </div>
        </div>
        <div class="title">
            <ul>
                <li class="title-item"><a>首页</a></li>
                <li class="title-item">课程</li>
                <li class="title-item">就业班</li>
                <li class="title-item">实战</li>
                <li class="title-item">手记</li>
                <li class="title-item">猿问</li>
            </ul>
        </div>
        <div class="banner-content">
            <div class="photo">
                <img  src="../assets/banner1.jpg"/>
                <img  src="../assets/banner2.jpg"/>
                <img  src="../assets/banner3.jpg"/>
                <img  src="../assets/banner4.jpg"/>
                <img  src="../assets/banner5.jpg"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
*{margin:0;padding:0;list-style:none;}
a {
     text-decoration:none;
}
.logo{
  width: 2rem;
  height: 0.6rem;  
}
.login{
    float:right;
    border-radius: 0.2rem;
    background-color: rgba(242,13,13,.06);
    font-size: 0.26rem;
    margin-top: -0.9rem;
    margin-right: 0.05rem;
    padding: 0.1rem;
    font-weight: 700;
    color:rgba(242,13,13,.2);
}
.title{
    color: #71777D;
    padding-left: 0.85rem;
    font-size: 0.27rem;
    font-weight: 700;
    width: 100%;
}
.title-item{
    float: left;
    margin-right: 0.28rem;
    line-height: 0.3rem;
}
.banner-content {
    margin-top:0.5rem;
    width: 7rem;
    overflow: hidden;
}
.photo{
    width: 35rem;
    animation: switch 5s ease-out infinite;
}
.photo > img{
    border-radius: 0.1rem;
    width: 6rem;
    height: 2rem;
    margin-left: 0.05rem;
}
@keyframes switch {
    0% {transform: translate(0,0);}
    15% {transform: translate(0,0);} /* 停留1500ms */

    20% {transform: translate(-16.5%,0);} /* 切换500ms 位移-20% */
    35% {transform: translate(-16.5%,0);}

    40% {transform: translate(-33.7%,0);}
    55% {transform: translate(-33.7%,0);}

    60% {transform: translate(-51%,0);}
    75% {transform: translate(-51%,0);}

    80% {transform: translate(-68.5%,0);}
    95% {transform: translate(-68.5%,0);}  

    100% {transform: translate(0,0);}

     /* 复位到第一张图片 */
    
}
</style>


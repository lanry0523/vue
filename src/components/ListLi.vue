<template>
    <div class="main_list">
        <section>
            <div>
                <p class="title">实战推荐</p>
                <p class="more">查看更多</p>
            </div>
             <div >
                 <a id="" href="#">
                     <div class="main_item">
                        <div class="div_img"><img src="../assets/list_li_1.jpg"/></div>
                        <div class="item-right">
                             <p class="item-name">Vue2.5开发去哪儿网App asdfa从零基础入门到实战项目</p>
                             <p class="box">
                                <span>初级</span>
                                <span>·</span>
                                <span>99999</span>
                            </p>
                        </div>
                        <div class="item-pr">
                            <p>
                            <span>¥266</span><br>
                            <span>分享有礼</span>
                            </p>
                        </div>
                     </div>
                 </a>

                   <a id="" href="#">
                     <div class="main_item">
                        <div class="div_img"><img src="../assets/list_li_2.jpg"/></div>
                        <div class="item-right">
                             <p class="item-name">全面系统 Python3入门+进阶课程 更快上手实际开发</p>
                             <p class="box">
                                <span>中级</span>
                                <span>·</span>
                                <span>99999</span>
                            </p>
                        </div>
                        <div class="item-pr">
                            <p>
                            <span>¥266</span><br>
                            <span>分享有礼</span>
                            </p>
                        </div>
                     </div>
                 </a>
                 <a id="" href="#">
                     <div class="main_item">
                        <div class="div_img"><img src="../assets/list_li_3.jpg"/></div>
                        <div class="item-right">
                             <p class="item-name">玩转数据结构 asdfa从入门到进阶</p>
                             <p class="box">
                                <span>中级</span>
                                <span>·</span>
                                <span>99999</span>
                            </p>
                        </div>
                        <div class="item-pr">
                            <p>
                            <span>¥266</span><br>
                            <span>分享有礼</span>
                            </p>
                        </div>
                     </div>
                 </a>
                 <a id="" href="#">
                     <div class="main_item">
                        <div class="div_img"><img src="../assets/list_li_4.jpg"/></div>
                        <div class="item-right">
                             <p class="item-name">全方位深度剖析PHP7底层源码</p>
                             <p class="box">
                                <span>高级</span>
                                <span>·</span>
                                <span>99999</span>
                            </p>
                        </div>
                        <div class="item-pr">
                            <p>
                            <span>¥266</span><br>
                            <span>分享有礼</span>
                            </p>
                        </div>
                     </div>
                 </a>
                 <a id="" href="#">
                     <div >
                        <div class="div_img"><img src="../assets/list_li_5.jpg"/></div>
                        <div class="item-right">
                             <p class="item-name">深度学习之神经网络（CNN/RNN/GAN）算法原理+实战</p>
                             <p class="box">
                                <span>初级</span>
                                <span>·</span>
                                <span>99999</span>
                            </p>
                        </div>
                        <div class="item-pr">
                            <p>
                            <span>¥266</span><br>
                            <span>分享有礼</span>
                            </p>
                        </div>
                     </div>
                 </a>
             </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
a {
     text-decoration:none;
}
.title{
    font-weight: 500;
    font-size: 0.27rem;
    margin-left: 0.2rem;
    
}
.more{
    color: #B7BBBF;
    font-size: 0.12rem;
    float:right;
    margin-top: -0.6rem;
    margin-right: 0.2rem;
}
.div_img{
    float: left;
    margin-left: 0.17rem;
    margin-right: 0.3rem;
    
}
.div_img > img{
    width: 1.5rem;
    height: 1.2rem;
    border-radius: .16rem;
}

.main_item{ 
 overflow: hidden;
}
.box{
    color: #B7BBBF;
    font-size: 0.12rem;
}
.item-name{
    margin-top: 0.05rem;
    font-size: 0.13rem;
    color: #2B333B;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    width: 2.5rem;
}
.item-pr{
    margin-top: -1.3rem;
    margin-right: 0.2rem;
    float:right;
    color: red;
    font-size: 0.12rem;
    line-height: 0.45rem;
}
</style>


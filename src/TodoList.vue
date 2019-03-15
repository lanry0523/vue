<template>
  <div>
   <!--  <input class="inputClass" v-model="inputValue"/>
    <button class="buttonClass" @click="handleClick">提交</button>
    <ul>
      <todo-item v-for="(item,index) of list" :key="index" :content='item'
      :index='index' @delete='handledelete'>

      </todo-item>
    </ul> -->
    <div class="header">
      <ul class="header-content">
        <li class="header-item">首页</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
      </ul>
    </div>
    <div class="banner">
      <img class="banner_img" src="./assets/banner.png"/>
    </div>

    <div class="title">
      <ul>
        <li class="title-item">
          <div class="item-inner">
            <img class="item-img" src="./assets/猫.png"/>
            <p class="text-item">
              文字测试文字测试文字测试文字测试文字测试文字测试文字测试
              
            </p>
            <span class="time">1小时前</span>
            <span class="count">99</span>
          </div>
        </li>
        <li class="title-item">
          <div class="item-inner">
            <img class="item-img" src="./assets/猫.png"/>
            <p class="text-item">
              文字测试文字测试文字测试文字测试文字测试文字测试文字测试
              
            </p>
            <span class="time">1小时前</span>
            <span class="count">99</span>
          </div>
        </li>
        <li class="title-item">
          <div class="item-inner">
            <img class="item-img" src="./assets/logo2.png"/>
            <p class="text-item">
              文字测试文字测试文字测试文字测试文字测试文字测试文字测试
             
            </p>
            <span class="time">1小时前</span>
            <span class="count">999999</span>
          </div>
        </li>
        
      </ul>
    </div>

    <div class="footer">
      底部
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
  components:{
    'todo-item':TodoItem
  },
  data(){
    return{
      inputValue:"",
      list:[]
    }
  },
  methods:{
    handleClick:function(){
      this.list.push(this.inputValue),
      this.inputValue = ''
    },
    handledelete:function(index){
      this.list.splice(index)
    }
  }
}

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 10 +'px';
window.addEventListener('resize',(e)=>{
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = htmlWidth / 10 +'px'
})
</script>

<style scoped>
html{
  background-color: #f8f8f8;
}
/* .inputClass{
 width:100%;
 border-radius: 4px;
 padding: 10px;
 box-shadow: ridge 0 1px 1px rgba(0,0,0,.075);
 border-color: #66afe9;
}
.buttonClass{
  background: rgb(74, 124, 233);
  width: 80px;
  padding: 10px;
  border-radius: 16px;
  margin-left: 10px;
} */
*{margin:0;padding:0;list-style:none;}

  .header{
    height: 40px;
    width: 100%;
    background-color: red;
    padding-left: 25px;
  }
  .header-item{
    float: left;
    color: #ffcdce;
    font-size: 16px;
    margin-right: 20px;
    
    line-height: 40px;
    
  }
  .banner{
    text-align: center;
    border-bottom: 1px solid #ffcdce;
  }
  .banner_img{
    width: 100%;
    height: 150px;
  }
  .item-inner{
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #ffcdce;
  }
  .title-item{
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .item-img{
    float: left;
    display:block;
    margin: 5px;
  }
  .text-item{
    color: #404040;
    font-size: 14px;
    margin-top: 15px;
    line-height: 20px;
    text-indent:2em;
  }
  .time{
    position:absolute;
    left: 110px;
    bottom: 17px;
    color: #888;
    font-size: 12px;
  }
  .count{
    position:absolute;
    color: #888;
    font-size: 12px;
    right: 4px;
    bottom: 17px;
  }
  .footer{
    border-top:1px solid brown;
    margin-top: 70px;
    height: 50px;
  }
</style>

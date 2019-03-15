<template>
    <div>
        <header-item></header-item>
        <listLi-item></listLi-item>
    </div>
</template>
<script>
import Haeder from './components/Header.vue';
import ListLi from './components/ListLi.vue';
export default {
    components:{
        'header-item':Haeder,
        'listLi-item':ListLi,
    }
}
/* let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 10 +'px';
window.addEventListener('resize',(e)=>{
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = htmlWidth / 10 +'px'
}) */
</script>
<style scoped>

</style>


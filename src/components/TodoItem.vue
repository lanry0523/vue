<template>
  <div>
    <li @click="handleDelete">{{content}}</li>
  </div>
</template>

<script>
export default {
  props:['content','index'],
  methods:{
    handleDelete:function(){
      this.$emit('delete',this.index)
    }
  }
}
</script>

<style scoped>
</style>

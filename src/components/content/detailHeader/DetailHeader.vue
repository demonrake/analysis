<template>
  <div class='detail-header'>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'DetailHeader'
}
</script>

<style scoped>
.detail-header{
  background-color: #eee;
  line-height:40px;
  font-size:14px;
  text-align: left;
  padding-left:10px;
  margin-bottom:10px;
}
</style>
<template>
  <div class="container">
    <el-container>
      <el-header>信息科故障管理系统</el-header>
      <el-container>
        <el-aside ><aside-nav></aside-nav></el-aside>
        <el-container>
          <el-main>
            <router-view>
              </router-view>
          </el-main>
          <el-footer>
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  
</template>

<script>
import AsideNav from 'components/content/asideNav/AsideNav'
export default {
  name:'Container',
  components:{
    AsideNav
  }
}
</script>

<style scoped>
.container{

}
.el-main{
  padding:10px 0 0 10px;
}
.el-header{
  background-color: rgb(19, 21, 26);
  color: rgb(15, 148, 108);
  text-align: left;
  line-height: 48px;
  height:48px;
}
.el-footer {
background-color: #eee;
height:48px;
line-height:48px;
}
.el-aside {
  width:170px;
}

.el-main {
  height:calc(100% - 48px - 48px)
}
</style>
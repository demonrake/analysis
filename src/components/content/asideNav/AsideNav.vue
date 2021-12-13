<template>
     <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color=" rgb(35, 38, 46)"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-sub-menu index="datamanage">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>数据管理</span>
          </template>
            <el-menu-item index="/statistics">故障统计</el-menu-item>
            <el-menu-item index="1-2">添加系统</el-menu-item>
            <el-menu-item index="/entry">故障录入</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="2-1">用户列表</el-menu-item>
            <el-menu-item index="2-2">添加用户</el-menu-item>
            <el-menu-item index="2-3">添加联系方式</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>可视化分析</span>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-col>
</template>

<script>
import { defineComponent } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
export default {
  name:'AsideNav',
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose,
    }
  },

}
</script>

<style scoped>

.el-col{
  width:170px;
  height:calc(100vh - 48px);
  background-color: rgb(35, 38, 46);
}
.el-menu-item{
  background-color: rgb(28, 31, 37);
}
.el-sub-menu .el-menu-item{
  min-width: 170px;
}
.el-menu-item:hover{
  background-color:rgb(5, 54, 70) !important;
}
</style>
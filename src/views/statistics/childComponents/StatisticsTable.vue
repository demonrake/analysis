<template>
  <el-table 
    :data="this.$store.state.tableData" 
    border 
    style="width: 100%;" 
    size='medium'
    max-height='537px'
    :default-sort="{ prop: 'failure_time', order: 'descending' }"
    @selection-change="handleSelectionChange"
    >
    <el-table-column type="selection" width="55"/>
    <el-table-column fixed prop="failure_time" sortable label="发生时间" width="110" />
    <el-table-column prop="sort" label="故障种类" width="80" />
    <el-table-column prop="failure_content" label="故障内容" width="240" show-overflow-tooltip />
    <el-table-column prop="level_name" label="故障等级" width="90" />
    <el-table-column prop="deal_user" label="处理人员" width="120" show-overflow-tooltip='true'/>
    <el-table-column prop="state" label="故障状态" width="120" />
    <el-table-column prop="createAt" label="创建时间" width="180" />
    <el-table-column prop="starttime" label="开始时间" width="180" />
    <el-table-column prop="endtime" label="结束时间" width="180" />
    <el-table-column prop="result" label="处理结果" width="180" show-overflow-tooltip />



    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
    name:'StatisticsTable',
    data(){
      return{
        tableData:[],
      }
    },
  methods: {
    handleClick() {
      console.log('click')
    },
  },
}
</script>

<style>

</style>
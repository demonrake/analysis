<template>
  <div class='statistics'>
    <detail-header>
      <span>故障统计列表</span>
    </detail-header>
    <statistics-table></statistics-table>
    <statistics-page class='statistics-page'></statistics-page>
  </div>
</template>

<script>
import DetailHeader from 'components/content/detailHeader/DetailHeader'

import StatisticsTable from './childComponents/StatisticsTable'
import StatisticsPage from './childComponents/StatisticsPage'
export default {
  name:'Statistics',
  components:{
    DetailHeader,
    StatisticsTable,
    StatisticsPage,
  },
}
</script>

<style>
  .statistics-page{
    margin-top:12px;
  }
</style>
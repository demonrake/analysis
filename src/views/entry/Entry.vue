<template>
    <detail-header>
      <span>故障录入</span>
    </detail-header>
    <failure-entry></failure-entry>
</template>

<script>
import DetailHeader from 'components/content/detailHeader/DetailHeader'

import FailureEntry from 'views/entry/childComponents/FailureEntry'
export default {
  name:'Entry',
  components:{
    DetailHeader,
    FailureEntry,
  }
}
</script>

<style>

</style>
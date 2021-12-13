<template>
	<v-pagination
	:pagesize="query.limit"
	:total="pageTotal"
	:options="query"
	:render="getData">
	</v-pagination>
</template>
<script>
import {ref,reactive,getCurrentInstance} from "vue";

import { useStore } from "vuex";

import { getFailuresInfo,getCountFailures } from "network/statistics";
import vPagination from 'components/common/pagination/Pagination';
export default {
		components: {
			vPagination,
		},
		setup() {
      const store=useStore();
			// const { proxy } = getCurrentInstance(); //获取上下文实例
			const tableData = ref([]),//表格数据
				  pageTotal = ref(0),//总条数
				  query = reactive({//配置对应的查询参数
				  	// appTimeStart:'',
						// appTimeEnd:'',
						page: 1,
						limit:15,//page第几页,limit是一页几个
					});
		 	// 获取表格数据
      const getData= () => {
        getFailuresInfo(query.page,query.limit).then(res=>{
				for(let tableItem of res.data){
					switch(tableItem.state){
					case '0':
						tableItem.state='未接受'
						break;
					case '1':
						tableItem.state='已接受'
						break;
					case '2':
						tableItem.state='已完成'
						break;
					case '3':
						tableItem.state='已反馈'		
				}
				// tableData.value.push(tableItem)
				}
				tableData.value=res.data
        store.dispatch('sendTableData',tableData.value)
				console.log(res)
        })
        getCountFailures().then(res=>{
        pageTotal.value = res;
        })
      }
      	getData();
			return {
				query,
				// shortcuts,
				tableData,
				pageTotal,
				getData,
			};		
		}
}
</script>

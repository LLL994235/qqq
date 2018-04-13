<template>
  <div class="home">
    	<div class="con">
    		 <template>
			    <el-table
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="name"
			        label="星期一"
			        width="100">
			      </el-table-column>
			      <el-table-column
			        prop="data"
			        label="星期二"
			        width="100">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="星期三"
			        width="100">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="星期四"
			        width="100">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="星期五"
			        width="100">
			      </el-table-column>
			    </el-table>
			  </template>
			  {{tableData}}
    	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
  	return{
  		 tableData: []
  	}
  },
  created(){
  	// for(var i=1;i<6;i++){
  	// 	for(var j=1;j<9;j++){
  			this.$http.post('http://localhost:8000/get',{week:1},{emulateJSON:true}).then((e)=>{
  				console.log(e.body)
  				this.tableData=e.body
  			})
  	// 	}
  	// };
  }
}
</script>
<style>
	/*.con{
		width: 500px;
		height: auto;
		margin:0 auto;
	}*/
</style>

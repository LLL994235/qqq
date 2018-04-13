<template>
  <div class="about">
  	<div class="add">
  	<p>输入课程</p>
    	输入课程：<input type="text" class="text" v-model='addd.name'>
		选择星期：<el-select v-model="addd.value" placeholder="请选择">
					    <el-option
					      v-for="item in addd.options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		第几节课：<el-select v-model="addd.list" placeholder="请选择">
					    <el-option
					      v-for="item in addd.options2"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		<button @click='add'>确定</button>
	</div>

	<div class="set">
	<p>更该课程</p>
		输入课程：<input type="text" class="text" v-model='sett.name2'>
		选择星期：<el-select v-model="sett.value2" placeholder="请选择">
					    <el-option
					      v-for="item in sett.options3"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		第几节课：<el-select v-model="sett.list2" placeholder="请选择">
					    <el-option
					      v-for="item in sett.options4"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		<button @click='set'>确定</button>
	</div>
	</div>
</template>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
<script>
  export default {
  	data(){
  		return{
  			addd:{
  				name:'',
	  			value:'',
	  			list:'',
	  			options: [{
			          value: '1',
			          label: '星期一'
			        }, {
			          value: '2',
			          label: '星期二'
			        }, {
			          value: '3',
			          label: '星期三'
			        }, {
			          value: '4',
			          label: '星期四'
			        }, {
			          value: '5',
			          label: '星期五'
			        }],
			    options2: [{
			          value: '1',
			          label: '第一节课'
			        }, {
			          value: '2',
			          label: '第二节课'
			        }, {
			          value: '3',
			          label: '第三节课'
			        }, {
			          value: '4',
			          label: '第四节课'
			        }, {
			          value: '5',
			          label: '第五节课'
			        }, {
			          value: '6',
			          label: '第六节课'
			        }, {
			          value: '7',
			          label: '第七节课'
			        }, {
			          value: '8',
			          label: '第八节课'
			        }],
  			},
  			
		    sett:{
		    		name2:'',
		  			value2 : '',
		  			list2:'',
		  			options3: [{
				          value: '1',
				          label: '星期一'
				        }, {
				          value: '2',
				          label: '星期二'
				        }, {
				          value: '3',
				          label: '星期三'
				        }, {
				          value: '4',
				          label: '星期四'
				        }, {
				          value: '5',
				          label: '星期五'
				        }],
				    options4: [{
				          value: '1',
				          label: '第一节课'
				        }, {
				          value: '2',
				          label: '第二节课'
				        }, {
				          value: '3',
				          label: '第三节课'
				        }, {
				          value: '4',
				          label: '第四节课'
				        }, {
				          value: '5',
				          label: '第五节课'
				        }, {
				          value: '6',
				          label: '第六节课'
				        }, {
				          value: '7',
				          label: '第七节课'
				        }, {
				          value: '8',
				          label: '第八节课'
				        }],
		    }
  			
  		}
  	},
    methods: {
    	add(){
    		
    		if(this.addd.name==''||this.addd.value==''||this.addd.list==''){
    			 this.$message.error('请填写内容');
    			}else{
    				this.$http.post('http://localhost:8000/add',this.addd,{emulateJSON:true}).then((e)=>{
    					this.$message({
				          message: '恭喜你，添加成功',
				          type: 'success'
				        });
				        this.addd.name='';
				        this.addd.value='';
				        this.addd.list='';
    				})
    			}
    	},
    	set(){
    		if(this.sett.name2==''||this.sett.value2==''||this.sett.list2==''){
    			 this.$message.error('请填写内容');
    			}else{
    				this.$http.post('http://localhost:8000/set',this.sett,{emulateJSON:true}).then((e)=>{
    					this.$message({
				          message: '恭喜你，修改成功',
				          type: 'success'
				        });
				        this.sett.name2='';
				        this.sett.value2='';
				        this.sett.list2='';
    				})
    			}
    	}
    }
  }
</script>

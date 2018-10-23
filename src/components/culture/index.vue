<template>
  <div>
     	<mt-button type="default" @click="_login()">default1</mt-button>
  </div>
</template>
<script>
export default {
	methods:{
		_login(){
			var data={
                "title":"",
                "recitation":"",
            }
			this.$apis.test.logon(data).then(res=>{
				console.log(res);
			}).catch(e => {
  			
  			});
		},
	}
}
</script>


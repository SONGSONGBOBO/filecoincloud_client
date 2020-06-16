
export default {
	get: async function(url) {
		let id ;
		let token ;
		let _this = this
		uni.getStorage({
		    key: 'userId',
		    success: function (res) {
		         _this.id = res.data;
		    }
		});
		uni.getStorage({
		    key: 'token',
		    success: function (res) {
		         _this.token = res.data;
		    }
		});
		
		return new Promise((resolve,reject)=>{
				uni.request({
					url: url, //真实接口地址。
					
					method: "GET",
					header:{
						"userId":_this.id,
						"token": _this.token
					},
					// 成功使用resolve
					success: (res) => {
						resolve(res.data)
					},
					
					//时报调用reject
					fail:(err)=>{
						reject(err)
					}
				});
			})
	},
	postform: async function(url, data) {
		return new Promise((resolve,reject)=>{
				uni.request({
					url: url, //真实接口地址。
					
					method: "POST",
					data: data,
					
					header: {
					    'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},	
						
					// 成功使用resolve
					success: (res) => {
						resolve(res.data)
					},
					
					//时报调用reject
					fail:(err)=>{
						reject(err)
					}
				});
			})
		/* var [error, res] = await uni.request({
			url: url, //仅为示例，并非真实接口地址。
		    method: "POST",
			data: data,
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },		
		}); */
		
	},
	postjson: function(url, data) {
		uni.request({
		    url: url, //仅为示例，并非真实接口地址。
		    method: "POST",
			data: data,
		    header: {
		        'content-type': 'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				return res;
		    }
		});
	}
}

export default {
	get: function(url) {
		uni.request({
		    url: url, //仅为示例，并非真实接口地址。
		    method: "GET",
		
		    success: (res) => {
				return res;
		    }
		});
	},
	postform: async function(url, data) {
		let result = '';
		let _this = this;
		/* uni.request({
		    url: url, //仅为示例，并非真实接口地址。
		    method: "POST",
			data: data,
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
				_this.result = res;
				
		    }
		}); */
		var [error, res] = await uni.request({
			url: url, //仅为示例，并非真实接口地址。
		    method: "POST",
			data: data,
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },		
		});
		console.log(res.data)
		result = res.data
		return result;
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
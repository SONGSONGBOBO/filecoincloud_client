import Vue from 'vue'
import App from './App'

import list from './config/request.js'
import uni_request from './config/uni_request.js'
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.uni_request = uni_request;
Vue.prototype.request_list = list;

Vue.prototype.$getStorage = Date.now || function async (name) {  
    return uni.getStorageSync({
    	key: name,
		
    });  
}; 
Vue.prototype.$setStorage = Date.now || function (name, data) {  
    return uni.setStorage({
    	key: name,
		data: data
    })
}; 

var judy = Vue.extend({            
	template:'<p>{{message}}</p>',          
	  data: function () {               
		  return{                   
			  message:'I am Judy'          ,
			  }          
				}      ,
			  });

Vue.filter('formatDate', function (value) {
 var date = new Date(value);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
 var Y = date.getFullYear() + '-';
 var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
 var D = date.getDate() + ' ';
 var h = date.getHours() + ':';
 var m = date.getMinutes() + ':';
 var s = date.getSeconds();
 return Y+M+D+h+m+s;
})
const app = new Vue({
    ...App
})

app.$mount()

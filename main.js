import Vue from 'vue'
import App from './App'

import list from './config/request.js'
import uni_request from './config/uni_request.js'
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.uni_request = uni_request;
Vue.prototype.request_list = list;
var judy = Vue.extend({            
	template:'<p>{{message}}</p>',          
	  data: function () {               
		  return{                   
			  message:'I am Judy'          ,
			  }          
				}      ,
			  });


const app = new Vue({
    ...App
})

app.$mount()

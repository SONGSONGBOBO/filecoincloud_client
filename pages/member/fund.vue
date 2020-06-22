<template>
	<view class="whiteBg">
		<view class="tabContent">
			<view class="tab">
				<view class="tabItem"  v-for="(item, index) in coins" :class="'{activeTabItem:current=='+index+'}'" @click="tab(index)" v-text="item"></view>
				
				<!-- <view class="tabItem" :class="{activeTabItem:current==1}" @click="tab(1)">每日币读</view> -->
			</view>
		</view>
		
		
		<view class="member-menu">
			
			<navigator url="/pages/order/order">
				<view class="menu-item">
					
					<view>filecoin地址</view>
					<view>xxxxx</view>
				</view> 
			</navigator>
			
			
		</view>
		
		
		<view style="height: 80px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "我的地址",
				islogin: false,
				coins: ["filecoin"]
			}
		},
		
		onLoad() {
			this.init()
		},
		onShow() {
			this.init()
		},
		onHide() {
			this.init()
		},
		methods: {  
			
			init(){
				let _this = this;
				uni.getStorage({
					key:"name",
					success:function(res){
						_this.username = res.data
						_this.islogin = true
						console.log(_this.username)
					},
					fail:function (res) {
						_this.islogin = false
							console.log(res)
					}
				})
				uni.setNavigationBarTitle({
				    title: _this.name
				});
			},
			gotoEarnings(){
				if(this.islogin) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					uni.showToast({
					
					
						icon:"none",
						title:"请登录..."
					});
				}
			},
			gotofund(){
				if(this.islogin) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					uni.showToast({
					
					
						icon:"none",
						title:"请登录..."
					});
				}
			},
			user(){
					
				if(this.islogin){
					
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			logout() {
				setTimeout(function(){
					uni.showToast({
						icon:"loading",
						title:"正在退出..."
					});
					uni.clearStorageSync();
					
				},500)
				
				setTimeout(function(){
				
					uni.switchTab({
						url:'/pages/index/index'
					})
				},1500)
				
			}
			
		}
	}
</script>

<style> 

.tabContent image{width: 100%;display: block;}
.tab{height: 80rpx;display: flex;width: 100%;align-items: center;
background: #fff;border-bottom: 1rpx solid #e5e5e5;margin-top:0rpx;}
.tabItem{width: 30%;text-align: center;font-size: 28rpx;}
	
.member-top{height: 236rpx;background: url(../../static/image/member-top.png) no-repeat ;
background-size: 100% 236rpx;position: relative;}
.member-top i{font-style: normal;color: #fff;float:right;margin-left:30rpx;}
.member-set{margin-right:30rpx;text-align: right;line-height: 80rpx;
padding-top:50rpx;}

.ewm{width: 35rpx;height: 35rpx;}
.ewm image{width: 35rpx;height: 35rpx;position: absolute;top:200rpx;right:30rpx}
.member-tx{position: absolute;left:30rpx;bottom:60rpx;display: flex;}
.member-tx image{width: 110rpx;height: 110rpx;border-radius: 50%;}
.member-tx-txt{padding-top:30rpx;margin-left:20rpx;}
.member-tx-txt text{height: 40rpx;line-height: 40rpx;display: block;font-size: 35rpx;
color: #fff;font-weight: bold;}


.member-icon{display: flex;border-bottom:20rpx solid #f5f5f5;}
/* .icon-item{width: 100%;padding:20rpx 0 10rpx;}
.icon-item image{width:70rpx;height: 56rpx;display: block;margin:0 auto;}
.icon-item text{line-height: 80rpx;text-align: center;font-size: 28rpx;display: block} */
.icon-item{width: 100%;padding:20rpx 0 10rpx;margin:0 30rpx;
background: url(../../static/image/more.png) no-repeat right center;
background-size: 27rpx 27rpx;}
.icon-title{line-height: 50rpx;font-size: 31rpx;}
.icon-data{line-height: 80rpx;font-size: 38rpx;text-align: center;}

.member-icon1{display: flex;border-bottom:20rpx solid #f5f5f5;height: 100%;}
.icon-item1{width: 100%;padding:20rpx 0 10rpx;height: 100%;margin:0 30rpx;
background: url(../../static/image/more.png) no-repeat right center;
background-size: 27rpx 27rpx;}
.icon-title1{line-height: 50rpx;font-size: 31rpx;}
.icon-data1{width: 70%;padding: 10rpx 15% 10rpx 15%;height: 100%;}

.menu-item{height: 180rpx;display: flex;align-items: center;
margin:0 30rpx;font-size: 28rpx;border-top:1rpx solid #e5e5e5;
background: url(../../static/image/more.png) no-repeat right center;
background-size: 27rpx 27rpx;
}

.menu-item image{width: 35rpx;height: 35rpx;margin-right:25rpx;}

.member-btn{margin:30rpx 50rpx 0rpx ;padding-bottom: 50rpx;}
.member-btn {border:1rpx solid #e5e5e5;text-align: center;
line-height: 80rpx;height: 40rpx;}
.member-btn-son{
	font-size: 33rpx;
}
</style>

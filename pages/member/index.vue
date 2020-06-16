<template>
	<view class="whiteBg">
		<view class="member-top">
			<!-- <view class="member-set">
				<i class="iconfont">&#xe614;</i>
				<i class="iconfont">&#xe612;</i>
			</view> -->
			<view class="member-tx">
				 <image src="../../static/image/member-tx.png" mode=""></image> 
				<view class="member-tx-txt" @tap="user()">
					
					<text >{{username}}</text>
					<!-- <text>我的资产</text> -->
				</view>
			
			
			</view>
			
			<view class="ewm">
				<!-- <image src="../../static/image/ewm.png" mode=""></image> -->
			</view>
		</view>
		<view class="member-icon">
			<view class="icon-item">
				
				<view >
					
					<text class="icon-title">我的资产: </text>
					<view class="icon-data"> 111 USDT</view>
				</view>
			
			
			</view>
			
		</view>
		<view class="member-icon1">
			<view class="icon-item1">
				
				<view >
					
					<text class="icon-title1">我的收益: </text>
					<view class="icon-data1" >
						<view style="padding: 10rpx 10rpx 10rpx 10rpx;height: 100rpx; " >
							<view style="line-height: 90rpx;float: left;font-size: 38rpx;">FIL</view>
							<view  style="line-height: 40rpx;float: right;font-size: 20rpx;">
								<view>昨日收益: 10000 FIL</view>
								<view>累计收益: 10000 FIL</view>
							</view>
						</view>
						
						<!-- <view style="padding: 10rpx 10rpx 10rpx 10rpx;">
							<view style="line-height: 90rpx;float: left;font-size: 38rpx;">FIL:</view>
							<view  style="line-height: 40rpx;float: right;font-size: 20rpx;">
								<view>昨日收益: </view>
								<view>累计收益:</view>
							</view>
						</view> -->
					</view>
					
				</view>
			
			
			</view>
		</view>
		<view class="member-menu">
			<view class="menu-item">
				<image src="../../static/image/member-menu3.png" mode=""></image>
				<text>我的奖励</text>
			</view> 
			<navigator url="/pages/order/order">
				<view class="menu-item" style="border:none">
					<image src="../../static/image/member-menu1.png" mode=""></image>
					<text>我的订单</text>
				</view>
			</navigator>
			<view class="menu-item">
				<image src="../../static/image/member-menu4.png" mode=""></image>
				<text>安全设置</text>
			</view>
			<view class="menu-item">
				<image src="../../static/image/member-menu2.png" mode=""></image>
				<text>在线客服</text>
			</view>
			<view class="menu-item">
				<image src="../../static/image/member-menu5.png" mode=""></image>
				<text>关于我们</text>
			</view>
			
		</view>
		
		<view class="member-btn" @tap="logout()">
			<view class="member-btn-son">退出登录</view>
		</view>
		<view style="height: 80px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "登录/注册",
				islogin: false
			}
		},
		
		onLoad() {
			//this.init()
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
						console.log(_this.username)
					}
				})
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
						
						title:"正在退出..."
					});
					uni.clearStorageSync();
					uni.setStorage({
						key: "islogin",
						data: false
					})
					uni.setStorage({
						key: "name",
						data: "登录/注册"
					})
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
	
.member-top{height: 336rpx;background: url(../../static/image/member-top.png) no-repeat ;
background-size: 100% 336rpx;position: relative;}
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
.icon-item{width: 100%;padding:20rpx 0 10rpx;}
.icon-title{line-height: 50rpx;font-size: 31rpx;}
.icon-data{line-height: 80rpx;font-size: 38rpx;text-align: center;}

.member-icon1{display: flex;border-bottom:20rpx solid #f5f5f5;height: 100%;}
.icon-item1{width: 100%;padding:20rpx 0 10rpx;height: 100%;}
.icon-title1{line-height: 50rpx;font-size: 31rpx;}
.icon-data1{width: 70%;padding: 10rpx 15% 10rpx 15%;height: 100%;}

.menu-item{height: 90rpx;display: flex;align-items: center;
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

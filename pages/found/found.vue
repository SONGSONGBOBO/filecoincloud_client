<template>
	<view>
		<!-- <swiper class="swiper" :indicator-dots="true" :autoplay="true"
		 :interval="3000" :duration="500" indicator-active-color="#00c3f5">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/dimg1.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="../../static/image/dimg2.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/dimg3.jpg" mode=""></image></view>
			</swiper-item>
		</swiper> -->
		
		
		<view class="shop-content">
			<view class="tab">
				<view class="tabItem" :class="{activeTabItem:current==0}" @click="tab(0)">公告</view>
				<!-- <view class="tabItem" :class="{activeTabItem:current==1}" @click="tab(1)">每日币读</view> -->
			</view>
			<view class="tabContent" v-show="current==1">
				<image src="../../static/image/d1.jpg" mode="widthFix"></image>
				<image src="../../static/image/d2.jpg" mode="widthFix"></image>
				<image src="../../static/image/d3.jpg" mode="widthFix"></image>
			</view>
			<view class="tabContent1" v-show="current==0">
				<view class="paramBox1" v-for="item in messages" @tap="gotodetail(item.fccMessageId)">
					<view class="param-title1">{{item.fccMessageTitle}}</view>
					<view class="param-item1">
						
						<text >{{item.fccMessageTime | formatDate}}</text>
						
					</view>
					
				</view>
				
				<view style="height: 30rpx;"></view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		
		<!-- 服务组件弹窗 -->
		<!-- <serviceDialog @close="closeService" class="hidden" :class="{show:serviceFlag}"></serviceDialog>
		<shopDialog @close="closeShopDialog" class="hidden" :class="{show:shopFlag}" @value="value"></shopDialog> -->
	</view>
</template>

<script>
	import serviceDialog from '../../components/serviceDialog.vue'
	import shopDialog from '../../components/shopDialog.vue'
	import MyNum from '../../components/MyNumfile.vue'
	export default {
		data() {
			return {
				serviceFlag:false,
				shopFlag:false,
				current:0,
				selectAttr:'请选择商品规格尺寸',
				curprice:0,
				messages: ''
			}
		},
		components:{
			serviceDialog,shopDialog,MyNum
		},
		onLoad() {
			this.getmessages();
		},
		created() {
			this.curprice='299.00';
			console.log(this.serviceFlag)
		},
		
	
		methods: {
				gotodetail(id){
					uni.navigateTo({
						url: '/pages/found/detail/detail?id='+id
					})
				},
			getmessages(){
				this.uni_request.get(this.request_list.getmessages).then(res =>{
						if(res.code == 200) {
							this.messages = res.data
							console.log(this.messages)
						} else{
							uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: res.msg
							});
						return;
						}
					})
			},
			gotoindex(){
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			//获取选中完的商品属性
			value(data){
				this.selectAttr=data.text;
				this.curprice=data.price
			},
			//显示和关闭服务弹窗
			showService(){
				this.serviceFlag=true
			},
			closeService(){
				this.serviceFlag=false
			},
			//显示购买弹窗
			showShopDialog(){
				this.shopFlag=true
			},
			closeShopDialog(){
				this.shopFlag=false
			},
			tab(index){
				this.current=index;
			}
		}
	}
</script>

<style scoped>
	.hidden{display: none;}
	.show{display: block;}
	.selectShop{height: 90rpx;background: #fff;margin-top:20rpx;line-height: 90rpx;
	padding:0 30rpx;color: #999;font-size: 28rpx;display: flex;}
	.selectTxt{color: #666;}
	.selectTxt text{color: #999;margin-right:20rpx;}
	.shop-info{border-top:1rpx solid #e5e5e5;padding:20rpx 30rpx 0;background: #fff;}
.shop-title{font-size: 28rpx;line-height: 40rpx;color: #333;}
.shop-title label{display: inline-block;background: #0BBBEF;padding:0 5rpx;margin-right:5px;color: #fff;
border-radius: 1px;}
.shop-summary{font-size: 24rpx;color: #999;margin-top:10rpx;}

.shop-price-sale{height: 80rpx;line-height: 80rpx;display: flex;justify-content: space-between;}
.shop-price{font-size: 36rpx;color: #f0415f;}
.shop-price label{font-size: 28rpx;color: #999;font-weight: normal;margin-left: 10rpx;text-decoration: line-through;}
.shop-price text{font-size: 24rpx;}
.shop-sale{font-size: 28rpx;color: #999;}

.shop-assure{height: 80rpx;font-size: 24rpx;display: flex;border-top:1rpx solid #e5e5e5;
align-items: center;
}
.shop-assure-item{margin-right:20rpx;color: #999;}
.shop-assure-item i{font-style: normal;font-size: 30rpx;color: #00c3f5;margin-right: 5rpx;float:left;}
.shop-assure-more{flex:1;text-align: right;}
.shop-assure-more i{font-style: normal;font-size: 30rpx;color:#999}
.swiper{width:100%;height: 330rpx;background: #fff;}
.swiper-item{display: flex;align-items: center;justify-content: center;}
.swiper-item image{width: 470rpx;height: 470rpx;}
.tabContent image{width: 100%;display: block;}
.tab{height: 80rpx;display: flex;width: 100%;align-items: center;
background: #fff;border-bottom: 1rpx solid #e5e5e5;margin-top:0rpx;}
.tabItem{width: 50%;text-align: center;font-size: 28rpx;}
.activeTabItem{color: #00C3F5;font-weight: bold;}
.detail-bottom{position: fixed;bottom:0;z-index: 9;background: #fff;width: 100%;display: flex;height: 100rpx;}
.buy{height: 100rpx;width: 200rpx;background: #007AFF;text-align: center;color: #fff;font-size: 30rpx;line-height: 100rpx;}
.trolley{height: 100rpx;flex:1;background: #0BBBEF;text-align: center;color: #fff;font-size: 30rpx;line-height: 100rpx;}
.navButton{width:100rpx;font-size: 24rpx;text-align: center;color: #999;}
.navButton image{width: 50rpx;height: 50rpx;display: block;margin:25rpx auto 5rpx;}
.navButton text{font-size: 50rpx; margin-top: 100rpx;}

.navButton1 image{width: 125rpx;height: 50rpx;display: block;margin:25rpx auto 5rpx;}
.navButton1 text{font-size: 50rpx; margin-top: 100rpx;}

.tabContent{background: #fff;overflow: hidden;}
.param-title{background: #f5f5f5;height: 80rpx;line-height: 80rpx;margin:20rpx 30rpx 0;font-size: 28rpx;
text-indent: 30rpx;}
.param-item{height: 80rpx;line-height:80rpx;font-size: 24rpx;border-bottom: 1rpx solid #f5f5f5;margin:0 30rpx;
border-left:1rpx solid #f5f5f5;border-right: 1rpx solid #f5f5f5;padding: 0 30rpx;display: flex;
}
.param-item label{width: 260rpx;color: #999;}

.tabContent1{background: #fff;overflow: hidden;}
.paramBox1{
	 border:2px solid darkslategray;
	
	            border-radius:30px;
	
	box-shadow: 10rpx 10rpx 5rpx #888888;
	background: #f5f5f5;
	
	margin-top: 10rpx;
}
.param-title1{height: 100%;line-height: 50rpx;margin:20rpx 30rpx 0rpx 30rpx;font-size: 30rpx;
text-indent: 0rpx;}
.param-item1{height: 100%;line-height:50rpx;font-size: 24rpx;margin:0 30rpx 30rpx 0;
padding: 0 30rpx;display: flex;width: 100%;
}
</style>

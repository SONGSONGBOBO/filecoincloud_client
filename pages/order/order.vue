<template>
	<view>
		<view class="order-tab">
			<view class="order-item active-order" v-if="tab==0"  @tap="getOrdersByUser(0)">
				全部订单
			</view>
			<view class="order-item " v-if="tab!=0" @tap="getOrdersByUser(0)">
				全部订单
			</view>
			<view class="order-item active-order" v-if="tab==1"  @tap="getOrdersByUserToDo(1)">
				待付款
			</view>
			<view class="order-item" v-if="tab!=1"  @tap="getOrdersByUserToDo(1)">
				待付款
			</view>
			<view class="order-item active-order" v-if="tab==2" @tap="getOrdersByUserCompleted(2)">
				已完成
			</view>
			<view class="order-item" v-if="tab!=2" @tap="getOrdersByUserCompleted(2)">
				已完成
			</view>
			 <view class="order-item active-order" v-if="tab==3" @tap="getOrdersByUserFail(3)">
				已失效
			</view> 
			<view class="order-item" v-if="tab!=3" @tap="getOrdersByUserFail(3)">
				已失效
			</view> 
		</view>
		<view class="order-list" v-for="item in orders">
			<navigator url="detail" >
			<view class="order-title">
				<view class="order-title-time">
					{{item.fccOrderCreateTime | formatDate}}
				</view>
				<!-- <view class="order-title-status">
					卖家已支付
				</view> -->
			</view>
			<view class="order-list">
				<view class="itemlist">
					<view class="buy-shop-info">
						<image src="../static/image/dimg1.jpg" mode=""></image>
						<view class="shop-info-text">
							<view class="shop-title">
								苹果（Apple）ipad2019新款第7代10.2英寸2018款9.7英寸air2更新版平板电脑 金色 19款10.2英寸 32G WLAN版-标配
							</view>
							<!-- <view class="shop-attr">appad,黑色</view> -->
							<view class="shop-price-num">
								<text class="price">￥299.00</text>
								<text class="num">×1</text>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="order-total">
				合计：<text> {{item.fccOrderPrice}} USDT</text>    
			</view>
			</navigator>
		</view>
		
		
		
		</view>
</template>

<script>
	//import shopItem from '../../components/shopItem.vue'
	export default {
		data() {
			return {
				tab: 0,
				orders: '',
				userid: 0
			}
		},
		components:{
			
		},
		onLoad() {
			this.init();
			this.getOrdersByUser();
		},
		methods: {
			init(){
				let _this = this;
				uni.getStorage({
					key:"userId",
					success:function(res){
						_this.userid = res.data
						console.log(_this.userid)
					}
				})
			},
			
				
			getOrdersByUser(id){
				this.tab = id
				let _this = this;
				this.uni_request.get(this.request_list.getOrdersByUser)
				.then(res =>{
					if(res.code == 200) {
						_this.orders = res.data
						console.log(res.data)
					} else{
						
						uni.showToast({
							icon: 'none',
							title: res.msg
						});
					}
					
					})
			},
			getOrdersByUserCompleted(id){
				this.tab = id
				let _this = this;
				this.uni_request.get(this.request_list.getOrdersByUserCompleted)
				.then(res =>{
					if(res.code == 200) {
						_this.orders = res.data
						
					} else{
						
						uni.showToast({
							icon: 'none',
							title: res.msg
						});
						}
					})
			},
			getOrdersByUserFail(id){
				let _this = this;
				this.tab = id
				this.uni_request.get(this.request_list.getOrdersByUserFail)
				.then(res =>{
					if(res.code == 200) {
						_this.orders = res.data
						
					} else{
						
						uni.showToast({
							icon: 'none',
							title: res.msg
						});
						}
					})
			},
			getOrdersByUserToDo(id){
				let _this = this;
				this.tab = id
				this.uni_request.get(this.request_list.getOrdersByUserToDo)
				.then(res =>{
					if(res.code == 200) {
						_this.orders = res.data
						
					} else{
						
						uni.showToast({
							icon: 'none',
							title: res.msg
						});
						}
					})
			}
		}
	}
	
</script>

<style>
	.itemlist .buy-shop-info{border-top:1rpx solid #e5e5e5;}
	.itemlist .buy-shop-info:nth-of-type(1){border-top:none;}
	.buy-shop-info{display: flex;padding:10rpx 0rpx;margin:0 20rpx;background: #fff;}
		.buy-shop-info image{width: 200rpx;height: 200rpx;margin-right:10rpx;}
		.shop-info-text{flex: 1;}
		.shop-title{font-size: 28rpx;overflow: hidden; 
	 text-overflow: ellipsis;
	 display: -webkit-box;color: #333;
	 -webkit-line-clamp: 2; 
	 -webkit-box-orient: vertical;}
	 .shop-attr{font-size: 24rpx;color: #999;line-height: 40rpx;}
	 .shop-price-num{height: 40rpx;font-size: 28rpx;margin-top:10rpx;display: flex;justify-content: space-between;
	 margin-top:20rpx;}
	.shop-price-num .price{color: red;}
	.shop-price-num .num{color: #999;}
	
.order-tab{display: flex;background: #fff;height: 80rpx;line-height: 80rpx;font-size: 28rpx;color: #999;}
.order-item{width: 25%;text-align: center;}
.active-order{color: #00C3F5;font-weight: bold;}
.order-list{background: #fff;margin-top:10rpx;font-size: 28rpx;margin:10rpx 0rpx 0;}
.order-title{height: 80rpx;display: flex;padding:0 30rpx;align-items: center;justify-content: space-between;
border-bottom:1rpx solid #e5e5e5
}
.order-title-time{color: #999;}
.order-title-status{color: #00C3F5;}
.order-total{line-height: 80rpx;height: 80rpx;font-size: 28rpx;border-top:1rpx solid #e5e5e5;text-align: right;padding-right:30rpx;
color: #666;}
.order-total text{color: #00C3F5;}

</style>

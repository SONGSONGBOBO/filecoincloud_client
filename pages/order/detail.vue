<template>
	<view class="">
		<view class="order-status">
			订单状态:<text>买家已付款</text>
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
		<view class="buy-shop-list" style="padding:20rpx 0;">
			<!-- <view class="buy-shop-item">
				<view class="shop-item-left">应付金额</view>
				<view class="shop-item-right">19.00</view>
			</view> -->
			<!-- <view class="buy-shop-item">
				<view class="shop-item-left">配送方式</view>
				<view class="shop-item-right">
					顺丰快递
					
				</view>
			</view> -->
			<view class="buy-shop-item">
				<view class="shop-item-left">订单编号</view>
				<view class="shop-item-right">20180925233333</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">总计</view>
				<view class="shop-item-right">19.00.00 USDT</view>
			</view>
			<view class="buy-shop-item" @click="copy('asd')" >
				<view class="shop-item-left">支付地址<text class="shop-item-left" style="color: #666666;">(点击复制)</text></view>
				<view class="shop-item-right">xcascacascascas</view>
			</view>
			
			<view class="buy-shop-item">
				<view class="shop-item-left">创建时间</view>
				<view class="shop-item-right">2019-10-29 10:20:20</view>
			</view>
		</view>	
		
	
	</view>
</template>

<script>
	
	export default{
		components:{
			
		},
		methods:{
			copy(value){
			  //提示模板
			 /* uni.showModal({
			    content:value,//模板中提示的内容
			    confirmText:'复制内容',
			    success:()=>{//点击复制内容的后调函数
			      //uni.setClipboardData方法就是讲内容复制到粘贴板
			      uni.setClipboardData({
			        data:value,//要被复制的内容
			        success:()=>{//复制成功的回调函数
			          uni.showToast({//提示
			            title:'复制成功'
			          })
			        }
			      });
			    }
			  }); */
			  uni.setClipboardData({
			    data:value,//要被复制的内容
			    success:()=>{//复制成功的回调函数
			      uni.showToast({//提示
			        title:'复制成功'
			      })
			    }
			  });
			}
		}
	}
</script>

<style scoped>
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
	
	
	.order-status{height: 100rpx;background: #fff;font-size: 30rpx;line-height: 100rpx;padding:0 30rpx;
	border-top:1rpx solid #e5e5e5}
	.order-status text{color: #00C3F5;}
	.addressBox{margin-top:20rpx}
	.shoplist{background: #fff;margin-top:20rpx}
	/* 列表信息 */
	.buy-shop-list{background: #fff;border-top:1rpx solid #e5e5e5}
	.buy-shop-item{display: flex;justify-content: space-between;min-height: 80rpx;font-size: 24rpx;
	margin:0 20rpx;align-items: center;}
	.shop-item-left{color: #333;display: flex;align-items: center;}
	.shop-item-right{color: #999;display: flex;align-items: center;}
	.shop-item-right i{font-size: 16px;paddint-top:2px;}
	.shop-item-right radio{transform:scale(0.7)}
	
	.buy-shop-item input{width: 100%;background: #f4f4f4;height: 70rpx;border-radius: 70rpx;font-size: 24rpx;
	text-indent: 30rpx;}
	

</style>

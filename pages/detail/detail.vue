<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true"
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
		</swiper>
		<view class="shop-info">
			<view class="shop-title">
				<label>新品</label>苹果（Apple）ipad2019新款第7代10.2英寸2018款9.
			</view>
			<view class="goodsinfo">
				<view class="goodsinfo-line">
					<text class="goods-info-left">合约矿机</text>
					<text  class="goods-info-right">8卡P106矿机</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">矿机算力</text>
					<text  class="goods-info-right"> 180MH/s±5%</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">矿机功耗 </text>
					<text  class="goods-info-right">  950W(ETH)</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">实时日产币 </text>
					<text  class="goods-info-right"> 0.0000769ETH/MHS</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">电价</text>
					<text  class="goods-info-right">  $0.0570/度</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">维保费</text>
					<text  class="goods-info-right"> 按实际情况收取</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">平台佣金</text>
					<text  class="goods-info-right">  5%</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">单批申购额度</text>
					<text  class="goods-info-right">50台</text>
				</view>
				<view class="goodsinfo-line">
					<text class="goods-info-left">合约生效周期 </text>
					<text  class="goods-info-right">本批次售罄之后15-20天</text>
				</view>
				

			</view>
			<view class="shop-summary">
				
				<view style="text-align: center;font-size: 25rpx;color: #000000;">申购说明</view>

				<view>*本次限量50台售罄后，平台将为用户采买矿机并于15-20天后正式生效。
				</view>
				<view>*若募资额度未达到合约启动要求，合约不生效，平台将于15-20天内全额退款；若矿机采买价格高于用户支付价格，用户可选择在采购期周期内退款或者加价购买</text>
				</view>
				<view>*本次限量50台售罄后，平台将为用户采买矿机并于15-20天后正式生效。
				</view>
				<view>*若募资额度未达到合约启动要求，合约不生效，平台将于15-20天内全额退款；若矿机采买价格高于用户支付价格，用户可选择在采购期周期内退款或者加价购买			</view>
				</view>

			
			
			</view>
		
		<view class="shop-content">
			<view class="tab">
				<!-- <view class="tabItem" :class="{activeTabItem:current==0}" @click="tab(0)">图文详情</view>
				<view class="tabItem" :class="{activeTabItem:current==1}" @click="tab(1)">规格参数</view> -->
				 <view style="width: 100%;text-align: center;font-size: 28rpx;">产品特色</view>
			</view>
			<view class="tabContent" v-show="current==0">
				<image src="../../static/image/d1.jpg" mode="widthFix"></image>
				<image src="../../static/image/d2.jpg" mode="widthFix"></image>
				<image src="../../static/image/d3.jpg" mode="widthFix"></image>
			</view>
			<view class="tabContent" v-show="current==1">
				<view class="paramBox">
					<view class="param-title">基础信息</view>
					<view class="param-item">
						<label>品牌</label>
						<text>魅族</text>
					</view>
					<view class="param-item">
						<label>型号</label>
						<text>魅族16S Pro</text>
					</view>
					<view class="param-item">
						<label>尺寸</label>
						<text>151.9*73.4*7.65mm</text>
					</view>
					<view class="param-item">
						<label>电池容量</label>
						<text>3600mAh</text>
					</view>
					<view class="param-item">
						<label>重量</label>
						<text>166g</text>
					</view>
				</view>
				
				
				<view style="height: 30rpx;"></view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="detail-bottom">
			
			<view class="navButton">
				<!-- <image src="../../static/image/tabbar1.png" mode="" @tap="gotoindex()"></image>
				首页 -->
				<image src="../../static/file/syjs.png" mode=""></image>
			</view>
			<view class="navButton1">
				<!-- <image src="../../static/file/syjs.png" mode=""></image> -->
				<text style="color: #007AFF;">1111USDT</text>
			</view>
			
			<view class="MyNum">
				
				<view class="numBox">
					<view class="MyNumBox">
						<text @click="minus">-</text>
						<view>{{num}}</view>
						<text @click="add">+</text>
					</view>
					
				</view>
				
			</view>
			 
			<view class="buy" style="margin-left:0rpx;" @click="buy(1)">立即购买</view>
		</view>
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
				num:1
			}
		},
		components:{
			serviceDialog,shopDialog,MyNum
		},
		onLoad(option) {
			console.log(option.id)
		},
		created() {
			this.curprice='299.00';
			console.log(this.serviceFlag)
		},
		methods: {
			buy(id){
				uni.navigateTo({
					url: '/pages/buy/filebuy'
				})
			},
			minus(){
				if(this.num==1){
					uni.showToast({
					    title: '数量不能小于1',
						'icon':'none'
					});
					return;
				}
				this.num--
			},
			add(){
			
				this.num++
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
				console.log(this.num)
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
	.goodsinfo{font-size: 24rpx;color: #999;margin-top:10rpx;height: 100%;}
	.goodsinfo-line{font-size: 28rpx;margin: 10rpx auto 10rpx;height: 50rpx;}
	.goods-info-left{float: left;}
	.goods-info-right{float: right;color: #333333;}
	
	.MyNum{clear: both;margin: 0 30rpx;}
		.numBox{display: flex;margin-top:14rpx;}
		.stock{line-height: 70rpx;color: #999;font-size: 24rpx;height: 70rpx;margin-left:20rpx;}
		.stock text{padding:0 5rpx;}
		.MyNum-title{font-size: 28rpx;
	 color: #999;
	}
		.MyNumBox{display: flex;border:1rpx solid #e5e5e5;width: 200rpx;font-size: 28rpx;}
		.MyNumBox text{width: 70rpx;height: 70rpx;text-align: center;line-height: 70rpx;color: #666;}
		.MyNumBox view{flex: 1;border-left:1rpx solid #e5e5e5;border-right: 1rpx solid #e5e5e5;
		text-align: center;line-height: 70rpx;
		}
	
	
	
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
.swiper{width:100%;height: 530rpx;background: #fff;}
.swiper-item{display: flex;align-items: center;justify-content: center;}
.swiper-item image{width: 470rpx;height: 470rpx;}
.tabContent image{width: 100%;display: block;}
.tab{height: 80rpx;display: flex;width: 100%;align-items: center;
background: #fff;border-bottom: 1rpx solid #e5e5e5;margin-top:20rpx;}
.tabItem{width: 50%;text-align: center;font-size: 28rpx;}
.activeTabItem{color: #00C3F5;font-weight: bold;}
.detail-bottom{position: fixed;bottom:0;z-index: 9;background: #fff;width: 100%;display: flex;height: 100rpx;}
.buy{height: 100rpx;width: 200rpx;background: #007AFF;text-align: center;color: #fff;font-size: 30rpx;line-height: 100rpx;}
.trolley{height: 100rpx;flex:1;background: #0BBBEF;text-align: center;color: #fff;font-size: 30rpx;line-height: 100rpx;}
.navButton{width:100rpx;font-size: 24rpx;text-align: center;color: #999;}
.navButton image{width: 50rpx;height: 50rpx;display: block;margin:25rpx auto 5rpx;}
.navButton text{font-size: 50rpx; margin-top: 100rpx;}

.navButton1 {margin:20rpx auto;}
.navButton1 text{font-size: 30rpx;height: 10rpx;}

.tabContent{background: #fff;overflow: hidden;}
.param-title{background: #f5f5f5;height: 80rpx;line-height: 80rpx;margin:20rpx 30rpx 0;font-size: 28rpx;
text-indent: 30rpx;}
.param-item{height: 80rpx;line-height:80rpx;font-size: 24rpx;border-bottom: 1rpx solid #f5f5f5;margin:0 30rpx;
border-left:1rpx solid #f5f5f5;border-right: 1rpx solid #f5f5f5;padding: 0 30rpx;display: flex;
}
.param-item label{width: 260rpx;color: #999;}
</style>

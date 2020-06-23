<template>
	<view class="history-container">
		<!-- 顶部面板 -->
		<view class="top-banner">
			<!-- 导航 -->
			<view class="banner-nav f-row f-jf-between">
				<view class="text-1x">
					<text class="cuIcon-list"></text>
					<text>用户名称</text>
				</view>
				<!-- 选择 -->
				<view class="text-1x">
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker">
							<text>{{picker[index]}}</text>
							<text class="cuIcon-unfold pd-l-10px"></text>
						</view>
					</picker>
				</view>
			</view>
			<!-- 导航 end -->
			<!-- 信息容器 -->
			<view class="banner-info-container">
				<view class="info-row f-row f-jf-between f-al-center">
					<view class="f-col f-al-center">
						<text class="text-1x">过去24小时收益</text>
						<view>
							<text class="text-3x">0.000000</text>
							<text class="text-1x">BTC</text>
						</view>
					</view>
					<view class="f-col f-al-center">
						<text class="text-1x">总收益</text>
						<view>
							<text class="text-3x">3.000000</text>
							<text class="text-1x">BTC</text>
						</view>
					</view>
				</view>
				<view class="info-row f-row f-jf-between f-al-center">
					<view class="f-col f-al-center">
						<text class="text-1x">已支付</text>
						<view>
							<text class="text-3x">3.123412</text>
							<text class="text-1x">BTC</text>
						</view>
					</view>
					<view class="f-col f-al-center">
						<text class="text-1x">账户余额</text>
						<view>
							<text class="text-3x">0.000321</text>
							<text class="text-1x">BTC</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 信息容器 end -->
		</view>
		<!-- 顶部面板 end -->
		<!-- 收益记录容器 -->
		<view class="list-container f-col">
			<view class="f-row f-jf-between f-al-center pd-10px w-per-100">
				<text class="text-1x text-gray w-per-30 text-center">日期</text>
				<text class="text-1x text-gray w-per-30 text-center">金额</text>
			</view>
			<!-- 每一条记录 -->
			<view v-for="(item, index) in 8" :key="index" class="list-row f-row f-jf-between f-al-center">
				<text class="text-2x">2020-6-23</text>
				<view class="f-col f-al-end">
					<text class="text-2x">0.0921231412 BTC</text>
					<text class="text-1x text-gray">存入余额</text>
				</view>
			</view>
			<!-- 每一条记录 end -->
		</view>
		<!-- 收益记录容器 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				picker: ['BTC', 'ZEC', 'DIC'],
			}
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			}
		}
	}
</script>

<style lang="less">
.history-container{
	*{box-sizing: border-box;}
	// 顶部面板
	.top-banner{
		width: 750rpx;
		height: 28vh;
		background:linear-gradient(325deg,rgba(70,182,255,1) 0%,rgba(114,145,255,1) 100%);
		color: #FFFFFF;
		border-radius: 0 0 15% 15%;
		padding: 4vh 25rpx;
		margin-bottom: 30rpx;
		.banner-nav{
			width: 100%;
			height: 20%;
		}
		.banner-info-container{
			width: 100%;
			height: 80%;
			padding: 20rpx 40rpx;
			.info-row{
				padding-bottom: 30rpx;
			}
		}
	}
	// 收益记录容器
	.list-container{
		width: 750rpx;
		padding: 20rpx 30rpx;
		.list-row{
			width: 100%;
			padding: 20rpx 40rpx;
			border-radius: 12px;
			box-shadow: 3px 6px 10px rgba(217, 217, 217, 0.5);
			margin: 15rpx 0;
		}
	}
}
</style>

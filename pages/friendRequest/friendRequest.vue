<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarleft">
				<image src="../../static/userHome/back.png" @tap="navBack"></image>
			</view>
			<view class="topBarCenter">
				<view class="title">
					好友请求
				</view>
			</view>
		</view>
		<view class="main">
			<view class="requester" v-for="item in friendList" :key="item.id">
				<view class="requestTop">
					<button type="default">拒绝</button>
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<button type="primary">同意</button>
				</view>

				<view class="requestCenter">
					<view class="name">我是闪电</view>
					<view class="time">{{item.time|showDate}}</view>
				</view>
				<view class="requestMsg">
					<text>留言：{{item.info}}</text>
				</view>
			</view>
		
		
		</view>
	</view>
</template>

<script>
	 import datas from '../../common/js/datas.js'
	 import {
	 	getDate
	 } from '../../common/js/utils.js'
	export default {
		data() {
			return {
				friendList: []
			};
		},
		onLoad() {
			this.firends()
		},
		filters: {
			showDate(val) {
				return getDate(val)
			}
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			firends(){
				this.friendList = datas.firends()
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';

	.topBar {
		display: flex;

		.topBarleft {
			flex: 0.7;
		}

		.topBarCenter {
			flex: 1;
			font-size: 38rpx;
		}
	}

	.main {
		margin-top: 90rpx;
		padding: 30rpx;

		.requester {
			margin-top: 105rpx;
			background-color: rgba(255, 255, 255, 1);
			box-shadow: 10rpx 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.2);
			border-radius: 20rpx;
			padding: 92rpx 0 20rpx;
			.requestTop{

				display: flex;
				.img{
					image {
						width: 150rpx;
						height: 150rpx;
						border-radius: 50%;
						margin-top: -200rpx;
					}
				}
				
				button {
					border-radius: 55rpx;
					width: 200rpx;
					height: 80rpx;
					line-height: 80rpx;
				}	
			}
			.requestCenter{
				text-align: center;
				margin-top: 25rpx;
				.name{
					font-size: 45rpx;
					font-weight: bold;
				}
				.time{
					font-size: 28rpx;
					color: $uni-text-color-grey;
					line-height: 44rpx;
				}
			}
			.requestMsg{
				margin-top: 15rpx;
				padding:15rpx;
				background-color: #ccc;
				width: 90%;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 25rpx;
				line-height: 50rpx;
				text-align: center;
			}
		}
	}
</style>

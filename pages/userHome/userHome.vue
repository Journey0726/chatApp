<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarleft">
				<image src="../../static/userHome/back.png"  @tap="navToindex"></image>
			</view>
			<view class="topBarRight">
				<image src="../../static/userHome/more.png"></image>
			</view>
		</view>
		<view class="main">
			<image class="image" src="../../static/friends/yasuo.jpg"></image>
			<image class="sex" src="../../static/userHome/female.png"></image>
			<view class="info">
				<view class="name">{{user.name}}</view>
				<view class="inck">昵称:{{user.inck}}</view>
				<view class="intro">{{user.intro}}</view>
			</view>
		</view>
		<view class="footer">
			<button type="primary">加好友</button>
		</view>
		<view class="bg">
			<view class="white"></view>
			<image src="../../static/friends/yasuo.jpg" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					name:'亚索',
					inck:"疾风剑豪",
					intro:'就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱'
				}
			};
		},
		methods: {
			navToindex() {
				uni.navigateTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';

	.topBar {
		display: flex;
		background-color: rgba(#fff, 0.1);
		box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0.1);
		.topBarleft {
			flex: 1
		}
	}
	.main {
		
		position: relative;
		.image {
			position: absolute;
			left: 0;
			right: 0;
			margin: 200rpx auto;
			width: 450rpx;
			height: 450rpx;
			border-radius: 18rpx;
			border: 2px solid #fff;
		}

		.sex {
			position: absolute;
			background-color: rgba(#007ac8, 0.5);
			width: 80rpx;
			height: 80rpx;
			padding: 10rpx;
			border-radius: 30rpx;
			border: 1px solid #fff;
			margin-top: 540rpx;
			left: 65%;
		}

		.info {
			position: absolute;
			top: 700rpx;
			width: 500rpx;
			margin-left: 125rpx;
			text-align: center;
			flex-direction: column;
			justify-content: center;
			.name{
				font-size:42rpx;
				font-weight: bold;
				color: rgba(39,40,50,1);
				line-height: 74rpx;
			}
			.inck{
				font-size:30rpx;
				line-height: 56rpx;
				color: rgba(39,40,50,1);
			}
			.intro{
				font-size: 24rpx;
				color: rgba(39,40,50,1);
				line-height: 48rpx;
			}
		}
	}

	.footer {
		position: absolute;
		bottom: 50rpx;
		width: 90%;
		right: 50%;
		transform: translateX(50%);
	}

	.bg {
		position: relative;

		image {
			position: fixed;
			width: 100vw;
			height: 100vh;
			z-index: -2;
			filter: blur(8px);
		}

		.white {
			position: absolute;
			width: 100vw;
			height: 100vh;
			background-color: rgba(255, 255, 255, 0.5);
			z-index: -1;
		}
	}
</style>

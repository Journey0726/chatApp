<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		      </view>
		<view class="topBar">
			<view class="topBarRight">
				<view class="signUp">
					<text>注册</text>
				</view>
			</view>
		</view>
		<view class="img">
			<image src="../../static/topbar/sign.png" mode=""></image>
		</view>
		<view class="login">
			<view class="text">
				<text>登录</text>
				<text>欢迎您的使用</text>
			</view>
			<view class="input">
				<input type="text" value=""  placeholder="用户名/邮箱" placeholder-style="color:#999; font-size:28rpx;" />
				<input type="password" value=""  placeholder="密码" placeholder-style="color:#999; font-size:28rpx;"/>
				<button type="primary">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
		  background-color: red;
	}
	.topBar {
		width: 100%;
		height: 98rpx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		padding-top: var(--status-bar-height);
		margin-bottom: var(--status-bar-height);
		position: fixed;
		top: 0px;
		left: 0;
		
		background-color: $uni-bg-color;
		box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
		.topBarRight {
			float: right;
			line-height: 98rpx;
			margin-right:32rpx;
			text{
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
			}
		}
	}
	.img{
		margin-bottom: 50rpx;
		image{
			width: 70rpx;
			height: 70rpx;
			margin-top: 120rpx;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.login{
		margin-left: 50rpx;
		margin-right: 50rpx;
		.text{
			margin-bottom: 50rpx;
			text:nth-child(1){
				color:  $uni-text-color-grey;
				font-weight: bold;
				font-size: 40rpx;
				display: block;
			}
			text:nth-child(2){
				color: $uni-text-color-grey;
				font-size:$uni-font-size-base;
			}
		}
		.input{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
				input{
					margin-bottom:50rpx;
					padding-bottom: 20rpx;
					border-bottom: 1px solid #007aff;
				}
			
		}
	}
</style>

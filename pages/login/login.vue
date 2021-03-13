<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarRight">
				<view class="signUp" @tap="navToSignUp">
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
				<input type="text" v-model="username" placeholder="用户名/邮箱" placeholder-style="color:#999; font-size:28rpx;" />
				<input type="password" v-model="password"  placeholder="密码" placeholder-style="color:#999; font-size:28rpx;" />
				<view class="tips">
					{{tips}}
				</view>
				<button type="primary" @tap="submit">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '用户名错误',
				username:'',
				password:''
			}
		},
		methods: {
			navToSignUp(){
				uni.navigateBack({
					delta:1
				})
			},
			submit(){
				if(this.username.length||this.password.length){
					this.tips = '用户名或密码不能为空'
				}
			}
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
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
			margin-right: 32rpx;
			text {
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
			}
		}
	}

	.img {
		margin-bottom: 50rpx;

		image {
			width: 70rpx;
			height: 70rpx;
			margin-top: 120rpx;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.login {
		margin-left: 50rpx;
		margin-right: 50rpx;

		.text {
			margin-bottom: 50rpx;

			text:nth-child(1) {
				color: $uni-text-color-grey;
				font-weight: bold;
				font-size: 40rpx;
				display: block;
			}

			text:nth-child(2) {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
			}
		}

		.input {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			input {
				margin-bottom: 50rpx;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #007aff;
			}
			.tips{
				float: left;
				font-size: $uni-font-size-lg;
				line-height: 36rpx;
				color:$uni-color-warning;
			}
		}

		button {
			margin-top: 20rpx;
		}
	}
</style>

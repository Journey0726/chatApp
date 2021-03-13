<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarLeft">
				<image  @tap="navToLogin" src="../../static/topbar/back.png" mode=""></image>
			</view>
			
		</view>
		<view class="img">
			<image src="../../static/topbar/sign.png" mode=""></image>
		</view>
		<view class="login">
			<view class="text">
				<text>注册</text>

			</view>
			<view class="input">
				<view class="sign name">
					<input type="text" v-model="username" placeholder="请取个名字" placeholder-style="color:#999; font-size:28rpx;" />
					<image v-if="isUser" src="../../static/topbar/true.png" mode=""></image>
					<text v-else>用户名已存在</text>
				</view>
				<view class=" sign email">
					<input type="text" v-model="email" placeholder="请输入邮箱" @blur="inspect" placeholder-style="color:#999; font-size:28rpx;" />
					<image v-if="isEmail" src="../../static/topbar/true.png" mode=""></image>
					<text v-else>邮箱无效</text>
				</view>
				<view class="sign password">
					<input :type="type"  @blur="getPwd"  placeholder="请输入密码" placeholder-style="color:#999; font-size:28rpx;" />
					<image @tap="changeStatus" class="see" :src="src" mode=""></image>

				</view>


				<button type="primary" @tap="signUp" :disabled="!isDisable">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				email:'',
				password:'',
				type: 'password',
				isUser: true,
				isEmail: true,
				isPwd: true,
				seeSrc: '../../static/topbar/see.png',
				noseeSrc: '../../static/topbar/nosee.png',
				src: '../../static/topbar/nosee.png'
			}
		},
		computed:{
			isDisable(){
				if(this.username&&this.email&&this.password&&this.isEmail&&this.isUser)
				return true
				else return false
			}
		},
		methods: {
			navToLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			inspect(e){
				let eMailRegExp = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
				if(this.email)
				this.isEmail = eMailRegExp.test(this.email)
				
			},
			changeStatus() {
				if (this.isPwd) {
					this.isPwd = !this.isPwd
					this.type = 'text'
					this.src = this.seeSrc
				} else {
					this.isPwd = !this.isPwd
					this.type = 'password'
					this.src = this.noseeSrc
				}
			},
			getPwd(e){
				this.password = e.target.value
			},
			signUp(){
				
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
		display: flex;
		background-color: $uni-bg-color;
		box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

		.topBarLeft {
			padding-top: 20rpx;
			margin-left: 20rpx;
			flex: 1;

			image {

				width: 50rpx;
				height: 50rpx;
				border-radius: 16rpx;
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
			.sign {
				display: flex;
				border-bottom: 1px solid #007aff;
				margin-bottom: 30rpx;
				padding-bottom: 15rpx;
				text {
					font-size: $uni-font-size-base;
					line-height: 60rpx;
					color: $uni-color-warning;
				}
				input {
					flex: 1;
				}
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}

			.tips {
				float: left;
				font-size: $uni-font-size-lg;
				line-height: 36rpx;
				color: $uni-color-warning;
			}
		}

		button {
			margin-top: 20rpx;
		}
	}
</style>

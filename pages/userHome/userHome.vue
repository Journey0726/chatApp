<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarleft">
				<image src="../../static/userHome/back.png" @tap="navToindex"></image>
			</view>
			<view class="topBarRight">
				<image src="../../static/userHome/more.png"></image>
			</view>
		</view>
		<view class="main">
			<image :class="{'image':!isAdd,'addImage':isAdd}" src="../../static/friends/yasuo.jpg"></image>
			<view class="Users" v-if="!isAdd">
				<image class="sex" src="../../static/userHome/female.png"></image>
				<view class="info">
					<view class="name">{{user.name}}</view>
					<view class="inck">昵称:{{user.inck}}</view>
					<view class="intro">{{user.intro}}</view>
				</view>
				<view class="footer" :style="{'padding-top':height+'px'}">
					<button type="primary" @tap="changeStatus">加好友</button>
				</view>
			</view>
		</view>

		<view class="addFriend" v-if="isAdd">
			<view class="FriendInfo" :style="{'margin-top':height+'px'}">
				<view class="name">{{user.name}}</view>
				<textarea maxlength="120" :value="myName+'请求加为好友'" ></textarea>
				<view class="btn">
					<button class="cancel" type="default" @tap="changeStatus">取消</button>
					<button class="send" type="primary">发送</button>
				</view>
			</view>
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
				user: {
					name: '亚索',
					inck: "疾风剑豪",
					intro: '就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱就有点离谱'
				},
				isAdd: false,
				myName: '永恩',
				height:''
			};
		},
		onReady(){
			this.getElementHeight()
			console.log(this.height)
		},

		methods: {
			navToindex() {
				uni.navigateBack({
					delta:1
				})
			},
			changeStatus() {
				this.isAdd = !this.isAdd
			},
			getElementHeight(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.white').boundingClientRect(data => {
					console.log(data)
				 this.height = data.height - 100
				}).exec();
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
			position: fixed;
			left: 0;
			right: 0;
			margin: 200rpx auto;
			width: 450rpx;
			height: 450rpx;
			border-radius: 18rpx;
			border: 2px solid #fff;
		}

		.addImage {
			position: fixed;
			left: 100rpx;
			top: 150rpx;
			width: 300rpx;
			height: 300rpx;
			box-shadow: 5rpx 10rpx 30rpx;
			border-radius: 50%;
			border: 2px solid #fff;
		}

		.Users {
			.footer {
				position: fixed;
				// padding-top: 90vh;
				// top: 00rpx;
				width: 90%;
				right: 50%;
				transform: translateX(50%);
				margin-bottom: var(--status-bar-height);
			}

			.sex {
				position: fixed;
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
				position: fixed;
				top: 700rpx;
				width: 500rpx;
				margin-left: 50%;
				transform: translateX(-50%);
				text-align: center;
				flex-direction: column;
				justify-content: center;
				padding-bottom: var(--status-bar-height);

				.name {
					font-size: 42rpx;
					font-weight: bold;
					color: rgba(39, 40, 50, 1);
					line-height: 74rpx;
				}

				.inck {
					font-size: 30rpx;
					line-height: 56rpx;
					color: rgba(39, 40, 50, 1);
				}

				.intro {
					font-size: 24rpx;
					color: rgba(39, 40, 50, 1);
					line-height: 48rpx;
				}
			}
		}
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
			background-color: rgba(255, 255, 255, 0.7);
			z-index: -1;
		}
	}

	.addFriend {
		position: fixed;
		bottom: 10rpx;
		width: 90%;
		left: 50%;
		transform: translateX(-50%);
		
		.FriendInfo {
			.name{
				font-size:42rpx;
				font-weight: bold;
				color: rgba(39,40,50,1);
				line-height: 74rpx;
				margin-left: 170rpx;
				margin-bottom: 20rpx;
			}
			textarea {
				border: 1px solid #fff;
				border-bottom: none;
				width: 100%;
				height: 500rpx;
				border-top-left-radius: 12rpx;
				border-top-right-radius: 12rpx;
				line-height: 55rpx;
				background-color: rgba(#007aff,0.1);
				margin-bottom: 100rpx;
				
			}

			.btn {
				display: flex;

				.cancel {
					width: 20%;
				}

				.send {
					width: 70%;
				}
			}
		}

	}
</style>

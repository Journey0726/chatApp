<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="topBarleft">
				<image s src="../../static/userHome/back.png" @tap="navBack"></image>
			</view>
			<view class="topBarCenter">
				<view class="title">
					亚索
				</view>
			</view>
			<view class="topBarRight">
				<image src="../../static/topbar/user.png" mode=""></image>
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true">
			<view class="chatMain">
				<view class="chatItem" v-for="(item,index) in myMessage" :key="index">
					<view class="chatTime">{{item.time|showDate}}</view>
					<view class="chatMsg chatMsgL" v-if="item.id ==='a'">
						<image :src="item.imgUrl" class="headPic"></image>
						<view class="chatContainer">
							<view class="message" v-if="item.types ===0">
								{{item.message}}
							</view>
							<view class="" v-if='item.types === 1'>
								<image class="imgMsgs" :src="item.message" @tap="previewPics(item.message)" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<view class="chatMsg chatMsgR" v-if="item.id ==='b'">
						<image :src="item.imgUrl" class="headPic"></image>
						<view class="chatContainer">
							<view class="message" v-if="item.types ===0">
								{{item.message}}
							</view>
							<view class="" v-if='item.types === 1'>
								<image class="imgMsgs" :src="item.message" @tap="previewPics(item.message)" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</view>



			</view>

		</scroll-view>
	</view>
</template>

<script>
	import datas from '../../common/js/datas.js'
	import {
		getChatDate
	} from '../../common/js/utils.js'
	export default {
		data() {
			return {
				myMessage: [],
				picList:[]
			};
		},
		onLoad() {
			this.message()
		},
		filters: {
			showDate(val) {
				return getChatDate(val)
			}
		},
		methods: {
			message() {
				this.myMessage = datas.message().reverse()
				this.myMessage.forEach((item)=>{
					if(item.types===1) this.picList.push(item.message)
				})
				
				console.log(this.picList)

			},
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//预览图片
			previewPics(path) {
				uni.previewImage({
					urls: this.picList,
					current:path,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}

		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';

	page {
		height: 100%
	}

	.content {
		height: 100%;
		background-color: rgba(244, 244, 244, 0.96);
	}

	.topBar {
		position: fixed;
		display: flex;
		background-color: rgba(244, 244, 244, 0.96);

		.topBarleft {
			flex: 1;
		}

		.topBarCenter {
			flex: 1;
			text-align: center;
			font-size: 38rpx;
		}

		.topBarRight {
			flex: 1;

			image {
				width: 55rpx;
				height: 55rpx;
				border-radius: 16rpx;
			}
		}
	}

	.chat {
		height: 100%;
		margin-top: 100rpx;

		.chatMain {
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-bottom: 100rpx;
			padding-top: 100rpx;
			display: flex;
			flex-direction: column;

			.chatItem {
				.chatTime {
					font-size: 29rpx;
					color: rgba(39, 40, 50, 0.3);
					line-height: 34rpx;
					padding: 20rpx 0;
					text-align: center;
				}

				.chatMsg {
					display: flex;
					padding: 20rpx 0;

					.headPic {
						width: 105rpx;
						height: 105rpx;
						border-radius: 25rpx;
					}

					.chatContainer {
						border-radius: 18rpx;
						max-width: 480rpx;

						.message {
							padding: 16rpx 24rpx;
							font-size: 32rpx;
							color: rgba(39, 40, 50, 1);
							line-height: 44rpx;
						}

						.imgMsgs {
							padding: 16rpx 24rpx;
							max-width: 400rpx;
						}

					}
				}

				.chatMsgL {
					.chatContainer {
						margin-left: 16rpx;

						.message {
							background-color: rgba(255, 255, 255, 1);
						}
					}
				}

				.chatMsgR {
					flex-direction: row-reverse;

					.chatContainer {
						margin-right: 16rpx;

						.message {
							background-color: rgba(#55aaff, 1);
						}
					}
				}

			}
		}
	}
</style>

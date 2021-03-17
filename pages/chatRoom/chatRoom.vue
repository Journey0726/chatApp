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
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view='scrollToView'>
			<view class="chatMain" :style="{'padding-bottom':bottomHeight+'rpx'}">
				<view class="chatItem" v-for="(item,index) in myMessage" :key="index" :id ="'msg' + item.tip">
					<view class="chatTime">{{item.time|showDate}}</view>
					<view class="chatMsg chatMsgL" v-if="item.id ==='a'">
						<image :src="item.imgUrl" class="headPic"></image>
						<view class="chatContainer">
							<!-- 文字 -->
							<view class="message" v-if="item.types ===0">
								{{item.message}}
							</view>
							<!-- 图片 -->
							<view v-if='item.types === 1'>
								<image class="imgMsgs" :src="item.message" @tap="previewPics(item.message)" mode="widthFix"></image>
							</view>
							<!-- 音频 -->
							<view class="vedio" v-if="item.types === 2" @tap="playVoice(item.message)" :style="{width:item.message.time*8+'rpx'}">
								<image src="../../static/submit/voiceInfp.png" ></image>
								<view class="">{{item.message.time}}'</view>
							</view>
							<!-- 位置 -->
							<view class="location" v-if="item.types === 3" @tap="openMap(item.message)">
								<view class="name">{{item.message.name}}</view>
								<view class="address">{{item.message.address}}</view>
								<view>
									<map  class="map" :latitude="item.message.latitude" :longitude="item.message.longitude"></map>
								</view>
							</view>
						</view>
					</view>
					<view class="chatMsg chatMsgR" v-if="item.id ==='b'">
						<image :src="item.imgUrl" class="headPic"></image>
						<view class="chatContainer">
							<view class="message" v-if="item.types ===0">
								{{item.message}}
							</view>
							<view v-if='item.types === 1'>
								<image class="imgMsgs" :src="item.message" @tap="previewPics(item.message)" mode="widthFix"></image>
							</view>
							<view class="vedio" v-if="item.types === 2" @tap="playVoice(item.message)" :style="{width:item.message.time*8+'rpx'}">
								<image src="../../static/submit/voiceInfp.png"></image>
								<view class="">{{item.message.time}}'</view>
							</view>
							<view class="location" v-if="item.types === 3" @tap="openMap(item.message)">
								<view class="name">{{item.message.name}}</view>
								<view class="address">{{item.message.address}}</view>
								<view >
									<map class="map" :latitude="item.message.latitude" :longitude="item.message.longitude"></map>
								</view>
							</view>
						</view>
					</view>
				</view>



			</view>
		<view class="pad">
			<!-- 这里是状态栏 -->
		</view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		</scroll-view>

	<submit @sendMsg='sendMsg' @moreUse='moreUse'></submit>

	</view>
</template>

<script>
	import submit from '../../components/submit.vue'
	import myMask from '../../components/mask.vue'
	import datas from '../../common/js/datas.js'
	import {
		getChatDate
	} from '../../common/js/utils.js'
	//播放音频
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				myMessage: [],
				picList:[],
				scrollToView:'',
				bottomHeight:200,
				isPlay:false
			};
		},
		components:{
			submit,
		
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
				this.goBottom()

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
					}
				});
			},
			//监听组件的点击
			moreUse(flag1,flag2){
				if(!flag1 && !flag2)
				this.bottomHeight = 200
				else this.bottomHeight = 800
				this.goBottom()
			},
			goBottom(){
				this.scrollToView = ''
				this.$nextTick(function(){
					this.scrollToView = 'msg' + this.myMessage[this.myMessage.length-1].tip
				})
			},
			sendMsg(res){
				let that = this
				let myMSG = {
					types:res.types,
					message:res.msg,
					id:'b',
					time:new Date(),
					imgUrl:'../../static/topbar/user.png',
					tip:that.myMessage.length
				}
				if(myMSG.types ===1){
					this.picList.push(myMSG.message)
				}
				this.myMessage.push(myMSG)
				setTimeout(()=>{
					this.goBottom()
				},100)
				
			},
			//播放音频
			playVoice(msg){
				 this.isPlay = !this.isPlay
				 innerAudioContext.src = msg.voice;
				 innerAudioContext.autoplay = true;
				 if(this.isPlay){
					 innerAudioContext.play()
				 }
				 else{
					 innerAudioContext.stop()
				 }
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
				
			},
			openMap(map){
				uni.openLocation({
					latitude:map.latitude,
					longitude:map.longitude
				})
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
		position: fixed;
		width: 100%;
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
			// padding-bottom: 200rpx;
			padding-top: 20rpx;
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
							border-radius: 18rpx;
							padding: 16rpx 24rpx;
							font-size: 32rpx;
							color: rgba(39, 40, 50, 1);
							line-height: 44rpx;
						}

						.imgMsgs {
							padding: 16rpx 24rpx;
							max-width: 400rpx;
						}
						.vedio{
							// width: 400rpx;
							min-width: 100rpx;
							max-width: 480rpx;
							height: 80rpx;
							border-radius: 18rpx;
							display: flex;
							align-items: center;
							image{
								width: 45rpx;
								height:45rpx;
								margin: 0 15rpx;
							}
						}
						.location{
							width: 400rpx;
							height: 350rpx;
							background-color: #fff;
							.name{
								padding: 15rpx;
								font-size: 30rpx;
							}
							.address{
								font-size:20rpx;
								padding: 15rpx;
								color: $uni-text-color-grey;
							}
							.map{
								width: 400rpx;
								height: 300rpx;
							}
						}

					}
				}

				.chatMsgL {
					.chatContainer {
						margin-left: 16rpx;

						.message {
							background-color: rgba(255, 255, 255, 1);
						}
						.vedio{
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
						.vedio{
							margin-right: 16rpx;
							flex-direction: row-reverse;
							background-color: rgba(#55aaff, 1);
							image{
								transform: rotate(180deg);
							}
						}
					}
				}

			}
		}
	}

</style>

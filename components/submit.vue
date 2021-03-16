<template>
	<view class="submit">
		<view class="submit-header">
			<image src="../static/submit/voice.png" v-show="!isSpeak" @tap="changeSpeak"></image>
			<image src="../static/submit/keyboard.png" v-show="isSpeak" @tap="changeSpeak"></image>
			<textarea maxlength='50' v-show="!isSpeak" v-model="textArea" confirm-type='send'  @confirm.enter="sendMsg" auto-height="true"/>
			<view class="btn" v-show="isSpeak">
				按住说话
			</view>
			<image src="../static/submit/express.png"></image>
			<image src="../static/submit/more.png" @tap="moreUse"></image>
		</view>
		<view class="submit-main" v-if="isMoreUse">
			<view class="img"><image src="../static/submit/photoAlbum.png"></image></view>
			<view class="img"><image src="../static/submit/shoot.png"></image></view>
			<view class="img"><image src="../static/submit/location.png"></image></view>
			<view class="img"><image src="../static/submit/file.png"></image></view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 isSpeak:false,
				 isMoreUse:false,
				 textArea:''
			};
		},
		methods:{
			moreUse(){
				this.isMoreUse = !this.isMoreUse
				this.$emit('moreUse',this.isMoreUse)
			},
			changeSpeak(){
				this.isSpeak = !this.isSpeak
			},
			sendMsg(){
				if(this.textArea.trim().length>0)
				this.$emit('sendMsg',this.textArea)
				this.textArea = ''
			}
		}
	}
</script>

<style lang="scss">
	.submit{
		position: fixed;
		bottom: 0;
		width: 100%;
		// height: 500rpx;
		background-color: rgba(244,244,244,0.96) ;
		.submit-header{
			border-bottom: 1px solid #808080;
			background-color: rgba(244,244,244,0.96);
			border-top: 1px solid $uni-border-color;
			width: 100%;
			 height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.btn{
				width: 65%;
				padding: 15rpx;
				background-color: #cfcfcf;
				border-radius: 15rpx;
				text-align: center;
			}
			textarea{
				width: 65%;
				padding: 15rpx;
				background-color: #fff;
				border-radius: 15rpx;
				font-size: 20rpx;
				word-break:break-all;//
				word-wrap:break-word;//数字不换行
			}
			image{
				width: 55rpx;
				height: 55rpx;
			}
		}
		.submit-main{
			margin-top: 50rpx;
			width: 100%;
			 height: 500rpx;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			.img{
				width: 25%;
				text-align: center;
				image{
					border-radius: 25rpx;
					background-color: #fff;
					padding: 15rpx;
					width: 80rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>

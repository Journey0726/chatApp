<template>
	<view class="submit">
		<view class="submit-header">
			<image src="../static/submit/voice.png" v-show="!isSpeak" @tap="changeSpeak"></image>
			<image src="../static/submit/keyboard.png" v-show="isSpeak" @tap="changeSpeak"></image>
			<textarea maxlength='50' v-show="!isSpeak" v-model="textArea" confirm-type='done' @confirm="sendMsg"  @input="insertContent" auto-height="true"/>
			<view class="btn" v-show="isSpeak">
				按住说话
			</view>
			<image src="../static/submit/express.png" @tap="moreEmoji"></image>
			<image src="../static/submit/more.png" @tap="moreUse" v-if="!isHasContent"></image>
			<view class="btnSend" v-if="isHasContent" @tap="sendMsg">
				发送
			</view>
		</view>
		<view class="submit-main" v-if="isMoreUse||isEmoji">
			<view class="document" v-if="!isEmoji">
				<view class="img"><image src="../static/submit/photoAlbum.png"></image></view>
				<view class="img"><image src="../static/submit/shoot.png"></image></view>
				<view class="img"><image src="../static/submit/location.png"></image></view>
				<view class="img"><image src="../static/submit/file.png"></image></view>
			</view>
			<emoji v-if="isEmoji" class="document" @insertEmoji= 'insertEmoji'></emoji>
		</view>
	</view>
</template>

<script>
	import emoji from './emoji.vue'
	export default {
		data() {
			return {
				 isHasContent:false,
				 isSpeak:false,
				 isMoreUse:false,
				 isEmoji:false,
				 textArea:''
			};
		},
		components:{
			emoji
		},
		methods:{
			insertEmoji(item){
				this.textArea =this.textArea + item
				this.insertContent()
			},
			moreEmoji(){
				this.isEmoji = !this.isEmoji
				if(this.isMoreUse === true)
				this.isMoreUse = !this.isEmoji
				this.$emit('moreUse',this.isEmoji,this.isMoreUse)
			},
			moreUse(){
				this.isMoreUse = !this.isMoreUse
				if(this.isEmoji ===true)
				this.isEmoji = !this.isMoreUse
				this.$emit('moreUse',this.isEmoji,this.isMoreUse)
			},
			changeSpeak(){
				this.isSpeak = !this.isSpeak
			},
			sendMsg(){
				if(this.textArea.trim().length>0)
				this.$emit('sendMsg',this.textArea)
				this.textArea = ''
				this.insertContent()
			},
			insertContent(){
				if(this.textArea.length>0){
					this.isHasContent = true
				}else{
					this.isHasContent = false
				}
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
			.btnSend{
				border: 1px solid;
				border-radius: 10rpx;
				background-color: #007aff;
				color: #fff;
				font-size: 28rpx;
				padding:8rpx 15rpx;
			}
		}
		.submit-main{
			.document{
				margin-top: 50rpx;
				width: 100%;
				height: 500rpx;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				.img{
					// width: 25%;
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
	}
</style>

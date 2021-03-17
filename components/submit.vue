<template>
	<view class="submit">
	
		<view class="submit-header">
			<image src="../static/submit/voice.png" v-show="!isSpeak" @tap="changeSpeak"></image>
			<image src="../static/submit/keyboard.png" v-show="isSpeak" @tap="changeSpeak"></image>
			<textarea maxlength='50' v-show="!isSpeak" v-model="textArea" confirm-type='done' @confirm="sendMsg"  @input="insertContent" auto-height="true"/>
			<view class="btn" v-show="isSpeak" @touchstart='speaking' @touchend="endSpeaked" @touchmove.stop.prevent="cancelSpeak">
				{{speakingOrspeaked}}
			</view>
			<image src="../static/submit/express.png" @tap="moreEmoji"></image>
			<image src="../static/submit/more.png" @tap="moreUse" v-if="!isHasContent"></image>
			<view class="btnSend" v-if="isHasContent" @tap="sendMsg">
				发送
			</view>
		</view>
		<view class="submit-main" v-if="isMoreUse||isEmoji">
			<view class="document" v-if="!isEmoji">
				<view class="img" @tap="sendPhoto('album')"><image src="../static/submit/photoAlbum.png"></image></view>
				<view class="img" @tap="sendPhoto('camera ')"><image src="../static/submit/shoot.png"></image></view>
				<view class="img" @tap="getLocation"><image src="../static/submit/location.png"></image></view>
				<view class="img"><image src="../static/submit/file.png"></image></view>
			</view>
			<emoji v-if="isEmoji" class="document" @insertEmoji= 'insertEmoji'></emoji>
			
		</view>
		<myMask v-if='isMark'></myMask>
	</view>
</template>

<script>
	import emoji from './emoji.vue'
	import myMask from './mask.vue'
	//录音
	const recorderManager = uni.getRecorderManager();
	export default {
		data() {
			return {
				 isHasContent:false,
				 isSpeak:false,
				 isMoreUse:false,
				 isEmoji:false,
				 textArea:'',
				 //定时器，记录录音的时间
				 time:0,
				 timer:null,
				 speakingOrspeaked:'按住说话',
				 isMark:false,
				 //点击录音的位置
				 startTouch:0
			};
		},
		components:{
			emoji,	myMask
		},
		methods:{
			insertEmoji(item){
				this.textArea =this.textArea + item
				this.insertContent()
			},
			moreEmoji(){
				this.isEmoji = !this.isEmoji
				if(this.isMoreUse === true)
				this.isMoreUse = !this.isMoreUse
				this.isSpeak = false
				this.$emit('moreUse',this.isEmoji,this.isMoreUse)
			},
			moreUse(){
				this.isMoreUse = !this.isMoreUse
				if(this.isEmoji ===true)
				this.isEmoji = !this.isEmoji
				this.isSpeak = false
				this.$emit('moreUse',this.isEmoji,this.isMoreUse)
			},
			changeSpeak(){
				this.isSpeak = !this.isSpeak
				if(this.isSpeak===true){
					this.isEmoji = false
					this.isMoreUse = false
				}
				this.$emit('moreUse',this.isEmoji,this.isMoreUse)
			},
			//发出消息
			sendMsg(){
				if(this.textArea.trim().length>0)
				this.send(this.textArea,0)
				this.textArea = ''
				this.insertContent()
			},
			//发送的方法
			send(msg,types){
				let data = {
					msg,types
				}
				this.$emit('sendMsg',data)
			},
			insertContent(){
				if(this.textArea.length>0){
					this.isHasContent = true
				}else{
					this.isHasContent = false
				}
			},
			sendPhoto(e){
				let count
				if(e==='camera') count = 1;
				else count = 9
				let that = this
				uni.chooseImage({
					count:count,
					sourceType:[e],
					success(res) {
						for(let i in res.tempFilePaths){
							that.send(res.tempFilePaths[i],1)
						}
					}
				})
			},
			getLocation(){
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
				    }
				});
			},
			speaking(e){
				this.startTouch = e.changedTouches[0].pageY
				this.isMark = true
				 console.log('开始')
				 this.speakingOrspeaked = '松开发送'
				  recorderManager.start();
				this.timer = setInterval(()=>{
					this.time++
					if(this.time>9){
						clearInterval(this.timer)
						this.endSpeaked()
					}
				},1000)
				
			},
			endSpeaked(){
				
				 console.log('停止')
				 this.speakingOrspeaked = '按住说话'
				let that = this
				clearInterval(this.timer)
				recorderManager.stop()
				recorderManager.onStop(res=>{
					let data = {
						voice:res.tempFilePath,
						time:this.time
					}
					if(that.time >0 && that.isMark)
					that.send(data,2)
					that.time = 0
					this.isMark = false
				});
			},
			cancelSpeak(e){
				let endTouch = e.changedTouches[0].pageY
				if(this.startTouch - endTouch>100){
					recorderManager.stop()
					this.isMark = false
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
		z-index: 10001;
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
.status_bar{
	height:env(safe-area-inset-bottom);
	width: 100%;
}
myMask{
	width: 100%;
	height: 100%;
	
}

</style>

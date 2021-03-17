<template>
	<view class="mask">
		<view class="title">
			正在录音...
		</view>
		<view class="cancel" @touchend='touchend'>
			<image src="../static/submit/cancel.png" ></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			touchend(){
				console.log(1111)
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		width: 100%;
		height: 100%;
		z-index: 50000;
		background:rgba(#ccc,0.8);
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.title{
			font-size: 50rpx;
		}
		.cancel{
			position: absolute;
			bottom: 205rpx;
			image{
				width: 105rpx;
				height: 105rpx;
			}
		}
	}
</style>

<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		      </view>
		<view class="topBar">

			<view class="topBarleft">
				<image src="../../static/topbar/user.png" ></image>
			</view>
			<view class="topBarCenter">
				<image class="img" src="../../static/topbar/sign.png" ></image>
			</view>
			<view class="topBarRight">
				<view class="search" @tap="navTosearch">
					<image src="../../static/topbar/search.png" ></image>
				</view>
				<view class="add">
					<image src="../../static/topbar/add.png"></image>
				</view>
			</view>
		</view>
		<view class="body">

			<view class="friend">
				<view class="friendList">
					<view class="friendList-L">
						<text class="tip">1</text>
						<image src=../../static/friends/addFriend.png mode=""></image>
					</view>
					<view class="friendList-R">
						<view class="top">
							<view class="name">
								好友申请
							</view>
							<view class="time">
								tiem
							</view>
						</view>
						<view class="info">
							茫茫人海，相聚即是缘分
						</view>
					</view>
				</view>

				<view class="friendList" v-for="item in friendList" :key="item.id">
					<view class="friendList-L">
						<text class="tip" v-if="item.tip">{{item.tip}}</text>
						<image :src="item.img"></image>
					</view>
					<view class="friendList-R">
						<view class="top">
							<view class="name">
								{{item.name}}
							</view>
							<view class="time">
								{{item.time|showDate}}
							</view>
						</view>
						<view class="info">
							{{item.info}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getDate
	} from '../../common/js/utils.js'
	 import datas from '../../common/js/datas.js'
	export default {
		data() {
			return {
				friendList: ''
			}
		},
		onLoad() {
			this.firends()
		},
		filters: {
			showDate(val) {
				return getDate(val)
			}
		},
		methods: {
			navTosearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			firends(){
				this.friendList = datas.firends()
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';
	.topBar{
		display: flex;
		justify-content: space-between;
	}
	.body {
		margin-top: 100rpx;
		padding-bottom: 50rpx;
		display: flex;
		flex-direction: column;
		padding: 10rpx;

		.friend {
			display: flex;
			flex-direction: column;
			height: 96rpx;

			.friendList {
				position: relative;
				display: flex;
				padding-top: 20rpx;

				&:active {
					background-color: $uni-bg-color-grey;
				}

				.friendList-L {
					margin-left: 30rpx;
					position: relative;

					image {
						width: 96rpx;
						height: 96rpx;
						border: 1px solid;
						border-radius: $uni-border-radius-base;
						background-color: $uni-color-primary;
					}

					.tip {
						z-index: 20;
						font-size: $uni-font-size-sm;
						border-radius: 18rpx;
						height: 36rpx;
						line-height: 36rpx;
						padding: 0 6rpx;
						text-align: center;
						min-width: 24rpx;
						border: 1px solid;
						position: absolute;
						right: -10rpx;
						top: -6rpx;
						background-color: $uni-color-warning;
						color: $uni-text-color-inverse;
					}

					display: flex;
					flex-direction: row;
				}

				.friendList-R {
					margin-left: 30rpx;

					.name {
						font-size: 36rpx;
						font-weight: 400;
						color: $uni-text-color;
						line-height: 50rpx;
					}

					.time {
						position: absolute;
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
						right: 20rpx;
						line-height: 50rpx;
						top: 0;
					}

					.info {
						width: 500rpx;
						position: absolute;
						font-size: $uni-font-size-base;
						color: $uni-text-color-grey;
						line-height: 40rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
			}

		}
	}
</style>

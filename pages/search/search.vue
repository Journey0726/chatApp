<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="topBar">
			<view class="search">
				<input type="search" @input="search" v-model="searchInfo" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-size:30rpx" />
				<image src="../../static/search/search.png" mode=""></image>
			</view>
			<view class="topBarRight">
				<text @tap="cancel">取消</text>
			</view>
		</view>
		<view class="main">
			<view class="user">
				<view class="text" v-if="matchedList.length>0">
					用户
				</view>
				<view class="list">
					<view class="listItem" v-for="item in matchedList" :key='item.id'> 
						<image :src="item.img"></image>
						<view class="names">
							<view class="name" v-html="item.name"></view>
							<view class="email">ddddd.@qq.com</view>
						</view>
						<view :class="item.flag===0? 'add':'send'">
							{{select(item)}}
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="user">
				<view class="text">
					群
				</view>
				<view class="list">
					<view class="listItem">
						<image src="../../static/friends/yasuo.jpg"></image>
						<view class="names">
							<view class="name">亚索</view>
							<view class="email">ddddd.@qq.com</view>
						</view>
						<view class="send">
							发消息
						</view>
					</view>
					<view class="listItem">
						<image src="../../static/friends/yasuo.jpg"></image>
						<view class="names">
							<view class="name">亚索</view>
							<view class="email">ddddd.@qq.com</view>
						</view>
						<view class="send">
							发消息
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../common/js/datas.js'
	export default {
		data() {
			return {
				searchInfo:'',
				matchedList:[]
			};
		},
		methods:{
			cancel(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			select(item){
				// return this.matchedList.flag===0?'加好友':'发消息'
				if(item.flag===0) return '加好友'
				else return '发消息'
			},
			search(){
				this.matchedList = []
				let arr = datas.firends()
				if(this.searchInfo.length !==0){
					arr.forEach((item)=>{
					
						if(JSON.stringify(item.name).search(this.searchInfo)!==-1){
							item.name = item.name.replace(this.searchInfo,"<span style='color:#4AAAFF;'>"+this.searchInfo+"</span>")
							this.isFriend(item)
							this.matchedList.push(item)
						}	
					})
				}
				 
			},
			isFriend(event){
				let flag = 0
				let friendsArr = datas.isFriends()
				friendsArr.forEach(item =>{
					if(item.friend === event.id)
					flag = 1
				})
				event.flag = flag
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';

	.topBar {
		display: flex;
	}

	.search {
		flex: 1;
		float: left;
		margin-top: 25rpx;
		margin-bottom: 20rpx;
		margin-left: 30rpx;
		position: relative;
		background-color: $uni-bg-color-grey;
		image {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 0;
			top: 8rpx;
			margin-right: 25rpx;
		}

		input {
			width: 550rpx;
		}
	}
	.main{
		margin-top: 108rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;

		.user{
			margin-top: 55rpx;
			padding-bottom: 55rpx;
					border-bottom: 1px solid #007aff;
			.text{
				font-size: 48rpx;
			}
			.list{
				.listItem{
					padding-top: 20rpx;
					padding-left: 20rpx;
					display: flex;
					image{

						width: 98rpx;
						height: 98rpx;
						border-radius: 18rpx;
						margin-right: 48rpx;
					}
					.names{
						flex: 1;
						.name{
							font-size: 40rpx;
							color: #555555;
						}
						.email{
							font-size: 14rpx;
							margin-top: 15rpx;
						}
					}
					.send{
						float: right;
						margin-top: 12rpx;
						height: 55rpx;
						width: 120rpx;
						font-size: 18rpx;
						text-align: center;
						line-height: 55rpx;
						border-radius: 28rpx;
						color: #fff;
						background-color: #007aff;
						border: 1px solid #007aff;
					}
					.add{
						float: right;
						margin-top: 12rpx;
						height: 55rpx;
						width: 120rpx;
						font-size: 18rpx;
						text-align: center;
						line-height: 55rpx;
						border-radius: 28rpx;
						color: #ff5500;
						background-color: #ffff7f;
						border: 1px solid #007aff;
					}
					&:active{
						background-color: $uni-bg-color-grey;
					}
				}
				
			}
		}
	}
</style>

<template>
	<view class="content">
		<view class="height">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<view class="topBar">
				<view class="topBarleft">
					<image @tap="navBack" src="../../static/userHome/back.png"></image>
				</view>
				<view class="topBarCenter">
					<text>详情</text>
				</view>
			</view>
			<view class="main">
				<view class="item">
					<view class="intro">头像</view>
					<view class="detail">
						<image :src="imgSrc" @tap="show = true"></image>
						<l-clipper v-if="show" :image-url="imgSrc" @success="imgSrc = $event.url; show = false" @cancel="show = false" />

					</view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">签名</view>
					<view class="detail" @tap="modify('签名',simulation.sign,false)"><text>{{simulation.sign}}</text></view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">注册</view>
					<view class="detail"><text>{{simulation.registerTime|getDate }}</text></view>
				</view>
				<view class="item">
					<view class="intro">昵称</view>
					<view class="detail" @tap="modify('昵称',simulation.name,false)"><text>{{simulation.name}}</text></view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">性别</view>
					<view class="detail">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">生日</view>
					<view class="detail">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view>{{date}}</view>
						</picker>
					</view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">电话</view>
					<view class="detail" @tap="modify('电话',simulation.tell,true)"><text>{{simulation.tell}}</text></view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">邮箱</view>
					<view class="detail" @tap="modify('邮箱',simulation.meil,true)"><text>{{simulation.meil}}</text></view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
				<view class="item">
					<view class="intro">密码</view>
					<view class="detail" @tap="modify('密码',simulation.meil,true)"><text>******</text></view>
					<view class="arrow">
						<image src="../../static/detail/rightArrow.png"></image>
					</view>
				</view>
			</view>
			<view class="footer">
			</view>

			<button class="exit" type="default">退出登录</button>
		</view>
		<view class="modify" :animation="animationData">
			<view class="modify-head">
				<view class="close" @tap="modify">取消</view>
				<view class="title">{{val}}</view>
				<view class="define" @tap="modifySubmit">确定</view>
			</view>
			<view class="modify-main">
				<input class="origin" type="password" :style="{'display':isPwd}" placeholder="请输入密码" placeholder-style="color:#999; font-size:28rpx;" />
				<textarea :value="selectData" />
				</view>
		</view>
	</view>
</template>

<script>
	import lClipper from '@/uni_modules/lime-clipper/components/lime-clipper/'
	import {detailTime} from '../../common/js/utils.js'
	export default {
		components: {lClipper},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				//模拟数据
				simulation:{
					name:'李青',
					sign:'我用双手成就你的梦想',
					registerTime:new Date(),
					sex:'男',
					birth:'19990752',
					tell:'18885888588',
					meil:'55555555@qq.com'
				},
				show: false,
				imgSrc: '../../static/friends/yasuo.jpg',
				index: 0,
				array: ['男', '女'],
				date: currentDate,
				animationData:{},
				isModify:false,
				height:'',
				val:'',
				selectData:'',
				isPwd:'none'
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onReady(){
			this.getElementHeight()
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			modify(val,data,status){
				this.val= val
				this.selectData = data
				if(status===true){
					this.isPwd = 'block'
				}else{
					this.isPwd = 'none'
				}
				this.isModify = !this.isModify
				var animation = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				})
				if(this.isModify){
					animation.top(0).step()
				}else{
					animation.top(this.height).step()
				}
				this.animationData = animation.export()
			},
			modifySubmit(){
				this.modify()
			},
			getElementHeight(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.height').boundingClientRect(data => {
				 this.height = data.height +1000
				}).exec();
			}

		},
		filters:{
			getDate(val){
				return detailTime(val)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/topBar.scss';
	
	
	.content{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.topBar {
		display: flex;

		.topBarleft {
			flex: 0.8;

		}

		.topBarCenter {
			flex: 1;
		}
	}

	.main {
		margin-top: 100rpx;
		padding: 20rpx 10rpx;

		.item {
			padding: 20rpx;
			display: flex;

			.intro {
				flex: 0.15;
				line-height: 100rpx;
				font-size: 35rpx;
			}

			.detail {
				flex: 0.75;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				line-height: 100rpx;
				line-height: 100rpx;
				font-size: 30rpx;
				color: $uni-text-color-grey;


				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 18rpx;
				}

			}

			.arrow {
				flex: 0.1;
				line-height: 100rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}

	.footer {
		padding: 15rpx;
	}
	.height{
		margin-bottom: 150rpx;
	}
	.exit{
		width: 90%;
	}
	// 修改
	.modify{
		position: fixed;
		width: 100%;
		top: 10000rpx;
		height: 100%;
		z-index: 10000;
		background-color: #fff;
		.modify-head{
			width: 100%;
			height: 100rpx;
			padding-top:  var(--status-bar-height);
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
			.close{
				font-size:'$uni-font-size-lg';
				color: $uni-text-color;
				padding: 30rpx;
			}
			.title{
				font-size: 48rpx;
				padding: 15rpx;
			}
			.define{
				color: #007aff;
				padding: 30rpx;
			}
		}
		.modify-main{
			padding: 30rpx;
			.origin{
				background-color: #dddddd;
				width: 100%;
				border-radius: 25rpx;
				height: 100rpx;
				margin-bottom: 15rpx;
			}
			textarea{
				background-color: #dddddd;
				width: 100%;
				border-radius: 25rpx;
				height: 500rpx;
			}
		}
	}
</style>

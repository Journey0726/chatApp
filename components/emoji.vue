<template>
	<view class="content">
		<view class="emojiRow" v-for="(list,index) in emoji" :key='index'>
			<view class="emojiItem" v-for="item in list" @tap="insertEmoji(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				emoji: [
					['😛', '😀', '😀', '😁', '🤣', '😃', '😅', '😆'],
					[' 😉', '😊', '😎', '😘', '😍', '😗', '🙂', '🤔'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😌', '😴', '🤤', '😕', '🙃', '🤑', '😖', '😤'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
					[' 😑', '😶', '😣', '😥', '😮', '🤐', '😪', '😴'],
				]
			};
		},
		methods: {
			insertEmoji(item) {
				this.$emit('insertEmoji',item)
			}
		},
	}
</script>

<style lang="scss">
	.content {
		height: 500rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		overflow-x: scroll;
		flex-wrap: wrap;
		.emojiRow {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			height: 100rpx;
			.emojiItem {
				padding: 25rpx;
				align-items: flex-end;
			}
		}
	}
</style>

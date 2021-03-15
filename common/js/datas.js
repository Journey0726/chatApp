export default {
	firends(){
		let friendArr = [{
			id: 1,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			tip: 2,
			time: new Date(),
			info: '我是闪电'
		}, {
			id: 2,
			img: '../../static/friends/friend.png',
			name: '你好吗',
			tip: 2222,
			time: new Date(),
			info: '无情'
		}, {
			id: 3,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 0,
			info: '死亡如风'
		},{
			id: 4,
			img: '../../static/friends/yasuo.jpg',
			name: '亚6666',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 5,
			img: '../../static/friends/yasuo.jpg',
			name: '亚77777',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 6,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 7,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 8,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 9,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},{
			id: 10,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		}
		 ]
		 return friendArr
	},
	isFriends(){
		let isFriends = [
			{
				userId:1,
				friend:2
			},{
				userId:1,
				friend:3
			},{
				userId:1,
				friend:5
			}
		]
		return isFriends
	},
	message(){
		let msgs = [
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'无极之道，在我内心延续,无极之道，在我内心延续无极之道，在我内心延续无极之道，在我内心延续',
				types:0,
				time:new Date()-1000,
				tip:0
			},
			{
				id:'b',
				imgUrl:'../../static/topbar/user.png',
				message:'../../static/friends/dog.jpg',
				types:1,
				time:new Date()-1000*2*60,
				tip:1
			},
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'无极之道，在我内心延续,死亡如风，常伴吴生',
				types:0,
				time:new Date()-1000*5*80,
				tip:2
			},
			{
				id:'b',
				imgUrl:'../../static/topbar/user.png',
				message:'无极之道，在我内心延续,死亡如风，常伴吴生,死亡如风，常伴吴生',
				types:0,
				time:new Date()-1000*8*100,
				tip:3
			},
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'../../static/friends/yasuo.jpg',
				types:1,
				time:new Date()-1000*10*200*500*9,
				tip:4
			},
			
		]
		return msgs
	}
}
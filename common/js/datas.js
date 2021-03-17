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
		},
		{
			id: 11,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},
		{
			id: 12,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 58,
			info: '死亡如风'
		},
		{
			id: 13,
			img: '../../static/friends/yasuo.jpg',
			name: '亚索',
			time: new Date(),
			tip: 5,
			info: '死亡如风'
		},
		{
			id: 14,
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
				message:{
					voice:'https://music.163.com/song/media/outer/url?id=1478246988',
					time:60,
					src:'https://music.163.com/song/media/outer/url?id=1478246988'
				},
				types:2,
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
				message:{
					voice:'https://music.163.com/song/media/outer/url?id=1478246988',
					time:1,
					src:'https://music.163.com/song/media/outer/url?id=1478246988'
				},
				types:2,
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
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'../../static/friends/yasuo.jpg',
				types:1,
				time:new Date()-1000*10*200*500*9,
				tip:5
			},
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'../../static/friends/yasuo.jpg',
				types:1,
				time:new Date()-1000*10*200*500*9,
				tip:6
			},
			{
				id:'a',
				imgUrl:'../../static/topbar/user.png',
				message:'../../static/friends/yasuo.jpg',
				types:1,
				time:new Date()-1000*10*200*500*9,
				tip:7
			},
			
		]
		return msgs
	}
}
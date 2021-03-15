export function getDate(val) {
	let nTime = new Date()
	let oTime = new Date(val)
	let d = oTime.getTime();
	let h = oTime.getHours();
	let m = oTime.getMinutes();
	let Y = oTime.getFullYear();
	let M = oTime.getMonth() + 1;
	let D = oTime.getDate();
	let nd = nTime.getTime();
	let nh = nTime.getHours();
	let nm = nTime.getMinutes();
	let nY = nTime.getFullYear();
	let nM = nTime.getMonth() + 1;
	let nD = nTime.getDate()
	//当天的时间
	if (D === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return h + ':' + m
	}
	// 昨天的时间
	if (M === nM && Y === nY && nD - D === 1) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return '昨天' + h + ':' + m
	}
	//过去的时间
	else {
		if (M < 9) {
			M = '0' + M
		}
		return Y + '/' + M + '/' + D
	}
}
export function detailTime(val) {
	let oTime = new Date(val)
	let d = oTime.getTime();
	let h = oTime.getHours();
	let m = oTime.getMinutes();
	let Y = oTime.getFullYear();
	let M = oTime.getMonth() + 1;
	let D = oTime.getDate();
	if (h < 10) {
		h = '0' + h
	}
	if (m < 10) {
		m = '0' + m
	}
	if (M < 10) {
		M = '0' + M
	}
	if (D < 10) {
		D = '0' + D
	}
	return Y + '/' + M + '/' + D + ' ' + h + ':' + m
}

//聊天的时间
export function getChatDate(val) {
	let nTime = new Date()
	let oTime = new Date(val)
	let d = oTime.getTime();
	let h = oTime.getHours();
	let m = oTime.getMinutes();
	let Y = oTime.getFullYear();
	let M = oTime.getMonth() + 1;
	let D = oTime.getDate();
	let nd = nTime.getTime();
	let nh = nTime.getHours();
	let nm = nTime.getMinutes();
	let nY = nTime.getFullYear();
	let nM = nTime.getMonth() + 1;
	let nD = nTime.getDate()
	//当天的时间
	if (D === nD && M === nM && Y === nY) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return h + ':' + m
	}
	// 昨天的时间
	if (M === nM && Y === nY && nD - D === 1) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return '昨天' + h + ':' + m
	}
	//今年的时间
	else if(Y === nY){
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		if (D < 10) {
			D = '0' + D
		}
		return M +'月'+D+'日'+h + ':' + m
	}
	else {
		if (M < 10) {
			M = '0' + M
		}
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		if (D < 10) {
			D = '0' + D
		}
		return Y + '/' + M + '/' + D
	}
}
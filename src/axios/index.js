// 接口函数封装，方便外部调用接口

import Axios from "./axios"  // 导入配置好的axios文件

// 封装axios请求函数，并用export导出
export function getItemList(datas) {
    return Axios({
	url: "/api/getItemList",
	method: "post",
	headers: {
	    'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
	},
	data: datas
    })
}
export function getItem(datas) {
    return Axios({
	url: "/api/getItem",
	method: "post",
	headers: {
	    'Content-Type': 'application/json' //设置请求头请求格式为json
	},
	data: datas
    })
}
export function getItemInfo(datas) {
    return Axios({
	url: "/api/getItemInfo"+datas,
        method: "get",
    })
}




















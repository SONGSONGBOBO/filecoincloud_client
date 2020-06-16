
let ip = "http://47.92.86.184:8889"

let list = {
	"login":ip+"/auth/login",
	"getgoodslist":ip+"/goods/getGoodsList",
	"getmessages":ip+"/message/getMessageListByCn",
	"getmessage": ip+"/message/getMessageById",
	"getOrdersByUser": ip+"/order/getOrdersByUser",
	"getOrdersByUserCompleted": ip+"/order/getOrdersByUserCompleted",
	"getOrdersByUserFail": ip+"/order/getOrdersByUserFail",
	"getOrdersByUserToDo": ip+"/order/getOrdersByUserToDo"
}

export default list;
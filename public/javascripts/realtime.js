$(function(){
	var socket = io();
	socket.emit("realtime", { emit : "realtime" });
	console.log(1);
});

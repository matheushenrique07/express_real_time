#!/usr/bin/env node

/**
*	Requires Controllers
**/

/**
*	Socket.io Conection
*/

var sockets = function (io) {
	io.on('connection', function (socket) {
		var session = socket.handshake.session;

		socket.on('realtime', function (data) {
			console.log(data);
		});
	});
};

module.exports = sockets;



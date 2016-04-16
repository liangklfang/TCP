var net=require('net');
//回调函数就是connect事件回调函数，也就是只要有客户端就会触发
var server=net.createServer(function(socket){
	socket.on('data',function(data){
		console.log('接收到客户端数据'+data);
		socket.write('你好');
	});
	socket.on('end',function(){
		console.log('连接断开');
	});
	socket.write('欢迎光临Node.js服务器端');
});
//这里绑定的是listening触发，只要服务器启动就会触发这个事件
server.listen(8888,function(){
	console.log('服务器被绑定，listening事件会被触发!');
});
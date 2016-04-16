var net=require('net');
//只要socket连接被成功创建就会调用这里的connect事件
var client=net.connect({port:8888},function(){
	 console.log('客户端被连接');
	 client.write('客户端数据');
});
//客户端data事件
client.on('data',function(data){
	console.log(data.toString());
});
client.on('end',function(){
	console.log('客户端断开');
});
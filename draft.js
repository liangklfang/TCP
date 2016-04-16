net.connect(options[, connectListener])
一个工厂方法返回一个net.Socket实例，同时使用提供的选项自动连接。这个选项会同时添加到<net.Socket的构造函数>和<socket.connect方法>中。第二个参数被作为一个'connect'事件监听器。
	const net = require('net');
	const client = net.connect({port: 8124}, () => {
	  // 'connect' listener
	  console.log('connected to server!');
	  //连接上了服务器
	  client.write('world!\r\n');
	});
	client.on('data', (data) => {
	  console.log(data.toString());
	  client.end();
	});
	client.on('end', () => {
	  console.log('disconnected from server');
	});

net.createConnection(options[, connectListener])
一个工厂方法，返回一个net.Socekt，同时使用提供的选项自动连接。这个选项会同时添加到<net.Socket的构造函数>和<socket.connect方法>中。
const net = require('net');
const client = net.createConnection({port: 8124}, () => {
  //'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});

net.createServer([options][, connectionListener])
这个方法返回一个net.Server对象，请参见该文章最前面的内容


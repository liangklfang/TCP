const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
//我们可以看到创建的对象是一个EventEmitter实例
console.log(server);
//当服务器发生异常的时候将会触发这个事件，比如监听一个使用中的端口将会触发一个异常，如果不监听那么error那么<服务器|>就会抛出异常!
server.on('error', (err) => {
  throw err;
});
//llistening事件，当调用server.listen绑定端口号或者Domain Socket后触发，简洁写法为server.listen(port,listening)
server.on('listening',() => {
  console.log('server bound');
})
server.listen(8124);

const { Server } = require('net');

const server = new Server();

server.on('connection', (socket) => {
    console.log(`New conection from ${socket.remoteAdress}:${socket.remotePort}`);

    socket.setEncoding('utf-8');

    socket.on('data', (data) => {
    console.log(data);
    })
});

const port = 4000
server.listen({ port: port, host: "localhost" }, () => {
    console.log(`listening on port ${port}`);
});
server.listen.toString()
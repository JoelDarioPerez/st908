const {Socket} = require('net');

const socket = new Socket();

socket.connect({host: 'localhost', port: 4000});
socket.write('Joel te gusta la pija');

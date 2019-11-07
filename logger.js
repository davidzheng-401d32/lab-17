'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
  console.log('logger is connected');
});

client.on('data', (buffer) => {
  console.log(buffer.toString());
});
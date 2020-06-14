const http = require('http');
const socketio = require('socket.io');
const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', ({ text, date, id }) => {
    socket.broadcast.send({ text, date, id });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));

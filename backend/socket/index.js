import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:3000',
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on('connection', (socket) => {
  socket.on('newUser', (username) => {
    addNewUser(username, socket.id);
    console.log(onlineUsers);
    console.log(username);
  });

  socket.on(
    'sendHome',
    (data) => {
      // const receiver = getUser(data.senderHno);
      // console.log(receiver)
      let sname=data.senderName;
      let sagency=data.senderAgency;
      let spur=data.senderPurpose;
      let shno=data.shno;
      console.log(data.senderName,data.senderAgency);
      io.emit('entryAlert', {
        senderHno:shno,
        senderName:sname,
        senderAgency:sagency,
        senderPurpose:spur,
      });
      console.log( sname, sagency,spur);
    }
  );
  socket.on('aorD', ({ resAnswer, resApartno, resReceiver }) => {
    io.emit('receiveAns', {
      resReceiver,
      resAnswer,
      resApartno,
    });
  });
  socket.on("hello",(data)=>{
    console.log(data.message);
  })
  socket.on('disconnect', () => {
    removeUser(socket.id);
  });
});

io.listen(3001);

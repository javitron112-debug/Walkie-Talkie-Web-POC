const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

app.use(helmet());

const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    maxHttpBufferSize: 1e6
});

let roomsData = {};

io.on('connection', (socket) => {
    let currentRoom = null;

    socket.on('ping-check', () => socket.emit('pong-check'));

    socket.on('join-room', ({ roomName, password, nickname }) => {
        if (!roomName || !password || !nickname) return;
        if (!roomsData[roomName]) roomsData[roomName] = { password, users: {} };
        if (roomsData[roomName].password !== password) return socket.emit('error-msg', 'Clave incorrecta');

        currentRoom = roomName;
        socket.join(roomName);
        const cleanNick = nickname.replace(/[^a-zA-Z0-9_]/g, '').substring(0, 12);
        roomsData[roomName].users[socket.id] = cleanNick;

        socket.emit('joined-success', { roomName, nickname: cleanNick });
        io.to(roomName).emit('user-list', Object.values(roomsData[roomName].users));
    });

    socket.on('sos-alert', () => {
        if (currentRoom) {
            io.to(currentRoom).emit('sos-activated', { 
                user: roomsData[currentRoom].users[socket.id],
                time: new Date().toLocaleTimeString()
            });
        }
    });

    socket.on('audio-chunk', (data) => {
        if (currentRoom) {
            socket.to(currentRoom).emit('audio-stream', { 
                buffer: data, user: roomsData[currentRoom].users[socket.id] 
            });
        }
    });

    socket.on('chat-message', (text) => {
        if (currentRoom) {
            io.to(currentRoom).emit('chat-message', { 
                user: roomsData[currentRoom].users[socket.id], text: text.substring(0, 200) 
            });
        }
    });

    socket.on('disconnect', () => {
        if (currentRoom && roomsData[currentRoom]) {
            delete roomsData[currentRoom].users[socket.id];
            if (Object.keys(roomsData[currentRoom].users).length === 0) delete roomsData[currentRoom];
            else io.to(currentRoom).emit('user-list', Object.values(roomsData[currentRoom].users));
        }
    });
});

server.listen(3000, '0.0.0.0', () => console.log("RADIO V14.5 ONLINE"));
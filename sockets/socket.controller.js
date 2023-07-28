
const socketController = (socket) => {
    // Listen Connection
    console.log(`User ${socket.id} Connected`);

    // Listen Desconnection
    socket.on('disconnect', () => {
        console.log(`User ${socket.id} Desconnected`);
    });

    // Listen send-message event
    socket.on('send-message', (payload, callback) => {

        // Emit to send-message event
        socket.broadcast.emit('send-message', payload);

        // Using callback
        const id = 123456;
        callback(id);

    });
}

module.exports = {
    socketController,
}
const TicketControll = require("../models/tecket-controll");

const ticketControll = new TicketControll();

const socketController = (socket) => {

    socket.emit('last-ticket', ticketControll.last);
    socket.emit('current-status', ticketControll.last4);

    socket.on('next-ticket', (payload, callback) => {
        const next = ticketControll.next();
        callback(next);

        socket.broadcast.emit('current-pending', ticketControll.tickets.length);
    });

    socket.on('attend-ticket', ({ desk }, callback) => {
        if (!desk) {
            return callback({
                ok: false,
                msg: 'Desk Is Required'
            });
        }
        const ticket = ticketControll.attendTicket(desk);
        socket.broadcast.emit('current-status', ticketControll.last4);
        if(!ticket){
            callback({
                ok: false,
                msg: 'No More Tickets'
            })
        } else {
            callback({
                ok: true,
                ticket,
            })
        }

    })

    socket.on('pending-ticket', (payload, callback) => {
        callback(ticketControll.tickets.length);
        socket.broadcast.emit('current-pending', ticketControll.tickets.length);
    });

}

module.exports = {
    socketController,
}
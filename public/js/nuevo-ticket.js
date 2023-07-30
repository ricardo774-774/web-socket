// Selectors 

const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnClear = document.querySelector('button');

const socket = io();


socket.on('connect', () => {
    btnClear.disabled = false;
});

socket.on('disconnect', () => {
    btnClear.disabled = true;
});

socket.on( 'last-ticket', ( ticket ) => {
    lblNuevoTicket.innerHTML = `Ticket ${ticket}`;
});

btnClear.addEventListener( 'click', () => {
    socket.emit( 'next-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerHTML = ticket;
    });
});
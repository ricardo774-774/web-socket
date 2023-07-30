// Selectors 

const lblDesck   = document.querySelector('h1');
const btnNew     = document.querySelector('button');
const lblTicket  = document.querySelector('small');
const divAlert   = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');

const searchParams = new URLSearchParams( window.location.search );

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Desk is required');
}

const desk = searchParams.get('escritorio');
lblDesck.innerHTML = desk;

divAlert.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    btnNew.disabled = false;
});

socket.on('disconnect', () => {
    btnNew.disabled = true;
});

socket.on( 'last-ticket', ( ticket ) => {
    // lblNuevoTicket.innerHTML = `Ticket ${ticket}`;
});

socket.on('current-pending', ( payload ) => {
    lblPendientes.textContent = payload;
});

btnNew.addEventListener( 'click', () => {

    socket.emit('attend-ticket', ({ desk }), ( {ok, ticket, msg} ) => {
        if (!ok) {
            lblTicket.innerHTML = 'Nobody';
            return divAlert.style.display = '';
        }
        lblTicket.innerHTML = `Ticket ${ticket.number}`;
    });

    socket.emit('pending-ticket', ( null ), ( payload ) => {
        lblPendientes.innerHTML = payload;
    });

    // socket.emit( 'next-ticket', null, ( ticket ) => {
    //     lblNuevoTicket.innerHTML = ticket;
    // });
});
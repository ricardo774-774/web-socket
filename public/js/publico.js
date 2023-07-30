const lblTicket1 = document.querySelector('#lblTicket1');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');

const socket = io();

socket.on( 'current-status', ( payload ) => {

    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();

    const [ ticket1, ticket2, ticket3, ticket4 ] = payload;

    if (ticket1) {
        lblEscritorio1.innerHTML = 'Desk ' + ticket1.desk;
        lblTicket1.innerHTML = 'Ticket ' + ticket1.number;   
    }

    if (ticket2) {
        lblEscritorio2.innerHTML = 'Desk ' + ticket2.desk;
        lblTicket2.innerHTML = 'Ticket ' + ticket2.number;   
    }

    if (ticket3) {
        lblEscritorio3.innerHTML = 'Desk ' + ticket3.desk;
        lblTicket3.innerHTML = 'Ticket ' + ticket3.number;   
    }

    if (ticket4) {
        lblEscritorio4.innerHTML = 'Desk ' + ticket4.desk;
        lblTicket4.innerHTML = 'Ticket ' + ticket4.number;   
    }

});


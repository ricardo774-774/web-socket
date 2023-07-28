
// Selectors 
const  ntfOnline = document.querySelector('#ntfOnline')
const ntfOffline = document.querySelector('#ntfOffline')
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

ntfOffline.style.display = 'none';

const socket = io();

// Connect
socket.on('connect', () => {
    console.log('Conectado');
    ntfOnline.style.display = '';

    setTimeout(() => {
        ntfOnline.style.display = 'none';
    }, 3000);
})

// Disconnect
socket.on('disconnect', () => {
    console.log('Desconectado');
    ntfOffline.style.display = '';

    setTimeout(() => {
        ntfOffline.style.display = 'none';
    }, 3000);
});

socket.on('send-message', (payload) => {
    console.log(payload);
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;

    const payload = {
        message,
        id: '1234',
        fecha: new Date().getDate()
    }

    // Server Communication
    socket.emit('send-message', payload, (id) => {
        console.log('From Server', id);
    });
})
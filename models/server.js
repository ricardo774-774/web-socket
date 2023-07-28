const express = require('express');
var cors = require('cors')

const { socketController } = require('../sockets/socket.controller');

class Server {
    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        this.paths = {};

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Public Directory
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.use(this.usersPath, require('../routes/user.route'));
    }

    sockets() {
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
        });
    }

};

module.exports = Server;
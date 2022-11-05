const mongoose = require('mongoose');
require('./game.model');
mongoose.connect(process.env.DB_CONNECTION_STRING);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected!');
});

mongoose.connection.on('open', function() {
    console.log('Mongoose connection open!');
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected!');
});

mongoose.connection.on('error', function() {
    console.log('Mongoose connection error!');
});

process.on('SIGINT', function() {
    console.log('Interrupt received!');
    mongoose.connection.close(function() {
        console.log('Mongoose closed!');
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    console.log('Terminate received!');
    mongoose.connection.close(function() {
        console.log('Mongoose closed!');
        process.exit(0);
    });
});

process.on('SIGUSR2', function() {
    console.log('Restart received!');
    mongoose.connection.close(function() {
        console.log('Mongoose closed!');
        process.exit(0);
    });
});

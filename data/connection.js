let _connection = null;

const open = function() {
    if(!get()) {
        // Write connection code here
    }
}

const get = function() {
    return _connection;
}

module.exports = {open, get};
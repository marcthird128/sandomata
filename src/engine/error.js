/* Sandomata error handling system
 * error.js
 * 
 * Provides utilities and error handling
 */

/** Debug level message */
function debug(msg) {
    console.log('%c' + msg, 'color: green');
}

/** Logs */
function log(msg) {
    console.log(msg);
}

/** Warnings */
function warn(msg) {
    console.warn(msg);
}

/** Errors */
function error(msg) {
    console.error(msg);
}

/** Fatal errors */
function fatal(msg) {
    throw new Error(msg);
}

/** Assert */
function assert(condition, msg) {
    if (!condition) {
        fatal('Assert failed' + (msg ? ': ' + msg : ''));
    }
}

/* Export */
module.exports = {
    debug, log, warn, error, fatal, assert
}
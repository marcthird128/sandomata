/* Sandomata error handling system
 * error.js
 * 
 * Provides utilities and error handling
 */

/* Log Level */
let logLevel = 4; // all but debugs

/** Debug level message */
function debug(msg) {
    if (logLevel < 5) return;
    console.log('%c' + msg, 'color: grey');
}

/** Logs */
function log(msg) {
    if (logLevel < 4) return;
    console.log(msg);
}

/** Warnings */
function warn(msg) {
    if (logLevel < 3) return;
    console.warn(msg);
}

/** Errors */
function error(msg) {
    if (logLevel < 2) return;
    console.error(msg);
}

/** Fatal errors */
function fatal(msg) {
    if (logLevel < 1) return;
    throw new Error(msg);
}

/** Assert */
function assert(condition, msg) {
    if (!condition) {
        fatal('Assert failed' + (msg ? ': ' + msg : ''));
    }
}

/** Set log level */
function setLogLevel(level) {
    logLevel = level;
}

/** Get log level */
function getLogLevel() {
    return logLevel;
}

/* Export */
module.exports = {
    debug, log, warn, error, fatal, assert, setLogLevel, getLogLevel
}
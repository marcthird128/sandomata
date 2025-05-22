/* Sandomata Client
 * client.js
 * 
 * Runs the client
 */

/* Import Dependencies */
const { log } = require('../engine/error.js');
const { assets } = require('./assets.js');
const { gui } = require('./gui.js');

/* Run Client */
function initClient() {
    // init the GUI
    gui.init();

    // client initialized
    log('Client initialized');
}

/* Export */
module.exports = { initClient }
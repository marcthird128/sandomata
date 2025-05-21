/* Sandomata Client
 * client.js
 * 
 * Runs the client
 */

/* Import Dependencies */
const { log } = require('../engine/error.js');
const { config } = require('./config.js');
const { assets } = require('./assets.js');

/* Run Client */
function initClient() {
    log('Client running');
}

return { initClient }
/* Sandomata Main Client Entry
 * main.js
 * 
 * Loads client
 */

/* Import Dependencies */
const { log, debug, setLogLevel } = require('../engine/error.js');
const { config } = require('./config.js');
const { loadAssets } = require('./assets.js');
const { initClient } = require('./client.js');

/* Load the client */

// Run-time config options
if (window.sandomataConfig) Object.assign(config, window.sandomataConfig);

// allow debugging in debug mode
if (config.debug) setLogLevel(5);

// logs
log('Loading Sandomata Client');
debug('Debug Mode Enabled');

// Load assets
debug('Loading Assets');

loadAssets().then(() => {
    debug('Assets loaded');

    /* Start the client */

    debug('Starting client');
    initClient();
}, e => {
    document.body.innerHTML = `<h2>Error loading assets</h2><pre><code>${e.stack}</code></pre>`;
    throw e;
});
/* Sandomata GUI
 * gui.js
 * 
 * Handles everything graphical user interface
 * related
 */

/* Import Dependencies */
const { assets } = require('./assets.js');

/* GUI object */
const gui = {};

/* Init the GUI */
gui.init = function() {
    // set window icon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = assets.icon.src;
    document.head.appendChild(link);
}

/* Export */
module.exports = { gui };
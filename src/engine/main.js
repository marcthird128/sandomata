/* Sandomata Main Engine Entry Point
 * main.js
 * 
 * The engine is responsible for all calculations in both
 * the server and client. For example, the block updating is 
 * used in the client for singleplayer mode
 */

/* Export */
module.exports = {
    ...require('./block.js'),
    ...require('./error.js'),
    ...require('./chunk.js'),
}
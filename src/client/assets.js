/* Sandomata Client Asset Handler
 * asset.js
 * 
 * Handles loading assets
 */

/* Import Dependencies */
const { assert } = require('../engine/error.js');
const { config } = require('./config.js');

/* Asset List */
const assets = {
    'icon': 'assets/icon.png',
}

/* Asset Loading Function */
function loadAsset(url) {
    return new Promise((resolve, reject) => {
        // create image
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load asset '${url}'`));

        // handle embedded asset data
        if (config.embeddedAssets) {
            // embedded data should be in global object sandomataAssets
            assert(window.embeddedAssets && window.embeddedAssets[url], 'Asset not in embeddedAssets');
            
            // set image src to the data URI
            img.src = window.embeddedAssets[url];
        } else {
            // normal asset, load as file
            img.src = url;
        }
    });
}

/* Load All Assets */
function loadAssets() {
    let total = Object.keys(assets).length;
    let loaded = 0;
    let resolve, reject, promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    for (const name in assets) {
        const url = assets[name];
        loadAsset(url).then(img => {
            assets[name] = img;
            loaded++;
            if (loaded === total) {
                resolve();
            }
        }).catch(err => {
            reject(err);
        });
    }

    return promise;
}

/* Export */
module.exports = {
    assets,
    loadAssets
}
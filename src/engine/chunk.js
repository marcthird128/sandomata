/* Sandomata chunk system
 * chunk.js
 * 
 * In this file the chunk organization and helper functions
 * are defined
 */

/* Dependencies */
const { Block } = require('./block.js');
const { assert} = require('./error.js');

/** Represents a loaded chunk (16x128x16) */
class Chunk {
    /** Creates a new chunk
     * @param {number} x The x offset of the chunk, multiple of 16
     * @param {number} z The z offset of the chunk, multiple of 16
     */
    constructor(x, z) {
        this.x = x;
        this.z = z;
        this.buffer = new ArrayBuffer(262144); // 16*16*128*8, 8 bytes per block
        this.array = new Uint8Array(this.buffer); // for accessing
    }

    /** Loads from an array of bytes */
    loadFromArray(arr) {
        this.array.set(arr);
    }

    /** Get block at offset
     * @param {number} x Block offset x
     * @param {number} y Block offset y
     * @param {number} z Block offset z
     * @returns {Block} Block at position (x,y,z)
    */
    getBlock(x, y, z) {
        return new Block(this.buffer, y * 16 * 16 * 8 + z * 16 * 8 + x * 8, this.x + x, y, this.z + z);
    }
}

/** Chunk Manager, manages loaded and unloaded chunks */
class ChunkManager {
    /** Creates a new ChunkManager
     * @param {function} loadFunc Function to load a chunk if it doesn't exist
     * @param {function} unloadFunc Function to save or clean up a chunk
     */
    constructor(loadFunc, unloadFunc) {
        this.loadFunc = loadFunc;
        this.unloadFunc = unloadFunc;
        this.chunks = new Map();
    }

    /** Adds a chunk as loaded
     * @param {Chunk} chunk Chunk to be added
     */
    addChunk(chunk) {
        this.chunks.set(chunk.x + '_' + chunk.z, chunk);
    }

    /** Get a block, loading the chunk if it doesn't exist
     * @param {number} x Block x
     * @param {number} y Block y
     * @param {number} z Block z
     * @returns {Block} Block at (x,y,z)
     */
    getBlock(x, y, z) {
        let chunkX = Math.floor(x / 16);
        let chunkZ = Math.floor(z / 16);
        let chunk = this.chunks.get(chunkX + '_' + chunkZ);
        if (chunk === undefined) {
            chunk = this.loadFunc(chunkX, chunkZ);
            if (chunk) this.addChunk(chunk);
        }
        if (chunk === undefined) {
            return undefined;
        }
        return chunk.getBlock((x % 16 + 16) % 16, y, (z % 16 + 16) % 16);
    }

    /** Unloads unrecently used chunks */
    unloadChunks() {
        // TODO: implement logic to track least accessed chunks
    }
}

/* Export */
module.exports = {
    Chunk, ChunkManager
}
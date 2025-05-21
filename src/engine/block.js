/* Sandomata blocks
 * block.js
 * 
 * Contains block type definitions
 * and helper functions
 */

/** Block: contains 4 block types and 4 counts, and position
 * Bytes correspond to: Type, Count, Type, Count, Type, Count, Type, Count.
 * Air is represented by having the 2nd byte be 0 (none of the first block type)
 */
class Block {
    /** Create block from array buffer
     * @param {ArrayBuffer} arrayBuffer The array buffer the data is stored in
     * @param {number} offset The offset of the data in the array buffer
     */
    constructor(arrayBuffer, offset, x, y, z) {
        this.array = new Uint8Array(arrayBuffer, offset, 8);
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

/* Block type constants */
Block.NULL = 0; // For use in air
Block.STONE = 1;
Block.DIRT = 2;
Block.GRASS = 3;
Block.SAND = 4;
Block.WATER = 5;
Block.LAVA = 6;

/* Export */
module.exports = {
    Block
}
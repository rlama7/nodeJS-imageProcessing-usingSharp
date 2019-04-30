/**
 * getRandomInt.js      - A program to generate a random number between min and max
 * @author                Ratna Lama
 * @date                  4/30/2019
 *
 * @description           Generates an integer random number between min and max range
 */

/**
 * Generates an integer random number between min and max range
 * @param {*} min
 * @param {*} max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export
module.exports = getRandomInt;

/**
 * @file ball.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a ball class for the Bouncing Ball
 */

"use strict";

/**
 * @description Class representing a ball
 *
 * @param {number} [xCoord=0] - X coordinate of the ball
 * @param {number} [yCoord=0] - Y coordinate of the ball
 *
 * @class Ball
 */
class Ball {
  constructor(xCoord = 0, yCoord = 0) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Ball = Ball;
}

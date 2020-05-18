/**
 * @file ball.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a ball class for the Bouncing Ball
 */

"use strict";

const GREEN_BALL = 'forestGreen';

/**
 * @description Class representing a ball
 *
 * @param {number} [xCoord=0] - X coordinate of the ball
 * @param {number} [yCoord=0] - Y coordinate of the ball
 * @param {number} [radius=10] - Radius of the ball
 *
 * @class Ball
 */
class Ball {
  constructor(xCoord = 0, yCoord = 0, radius = 10) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /**
   * @description Function that moves the ball the given displacement
   *
   * @param {number} xCoordDisp - number of pixels to be displaced on the X
   *  coordinate
   * @param {number} yCoordDisp - number of pixels to be displaced on the Y
   *  coordinate
   * @memberof Ball
   */
  move(xCoordDisp, yCoordDisp) {
    this.xCoord += Number(xCoordDisp);
    this.yCoord += Number(yCoordDisp);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the ball
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Ball
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = GREEN_BALL;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0, 0, Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Ball = Ball;
}

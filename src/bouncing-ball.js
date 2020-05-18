/**
 * @file bouncing-ball.js
 * @author Sergio Tabares Hernández <alu0this.movingBall.radius1124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a BouncingBall class for the
 *  Bouncing Ball.
 */

"use strict";

let BallOnBouncingBall;
if (typeof require !== 'undefined') { // Execution in node
  BallOnBouncingBall = require('./ball.js').Ball;
} else { // Execution in browser
  BallOnBouncingBall = Ball;
}

/**
 * @description Class that handles the functionalities of the Bouncing Ball.
 *
 * @class BouncingBall
 */
class BouncingBall {
  constructor() {
    this.CANVAS = document.getElementById("canvas");
    this.CONTEXT = this.CANVAS.getContext("2d");
    this.CANVAS.width = window.innerWidth - 150;
    this.CANVAS.height = window.innerHeight - 175;
    this.movingBall = new BallOnBouncingBall(this.CANVAS.width / 2,
      this.CANVAS.height / 2);
    this.draw();
  }
}

let bouncingBall;

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BouncingBall = BouncingBall;
} else {
  bouncingBall = new BouncingBall();
}

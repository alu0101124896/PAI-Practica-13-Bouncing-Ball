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
    this.startMoving();
  }

  /**
   * @description Function that stops the execution the given amount of time
   *
   * @param {number} msToWait - Number of miniseconds to stop the execution
   */
  sleep(msToWait) {
    return new Promise(resolve => setTimeout(resolve, msToWait));
  }

  moveBall() {
    // if (this.yCoordDisp < this.movingBall.yCoord - this.movingBall.radius) {

    // }
    this.movingBall.move(this.xCoordDisp, this.yCoordDisp);
    this.draw();
  }

  async startMoving() {
    let xCoordDisp = Math.random() * 5;
    let yCoordDisp = Math.random() * 5;
    let xDirection = Math.floor(Math.random() * 2);
    switch (xDirection) {
      case 0:
        this.xCoordDisp = xCoordDisp;
        break;
      case 1:
        this.xCoordDisp = -xCoordDisp;
        break;

      default:
        console.error('Error: Unknown xDirection')
        break;
    }
    let yDirection = Math.floor(Math.random() * 2);
    switch (yDirection) {
      case 0:
        this.yCoordDisp = yCoordDisp;
        break;
      case 1:
        this.yCoordDisp = -yCoordDisp;
        break;

      default:
        console.error('Error: Unknown yDirection')
        break;
    }
    while (true) {
      this.moveBall();
      await this.sleep(10);
    }
  }

  /**
   * @description Function that resets the canvas and draws the bouncing ball
   *
   * @memberof BouncingBall
   */
  draw() {
    // this.CONTEXT.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);
    this.movingBall.draw(this.CONTEXT);
  }
}

// let bouncingBall;
let firework = [];

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BouncingBall = BouncingBall;
} else {
  for (let fireworkIterator = 0; fireworkIterator < 100; fireworkIterator++) {
    firework.push(new BouncingBall());
  }
}

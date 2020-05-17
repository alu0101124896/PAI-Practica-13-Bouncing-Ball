/**
 * @file ball.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the ball class
 */

"use strict";

let expectOnBallTest;
let BallOnBallTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBallTest = require('chai').expect;
  BallOnBallTest = require('../src/ball.js').Ball;
} else { // Execution in browser
  expectOnBallTest = expect;
  BallOnBallTest = Ball;
}

describe('Ball Class', () => {
  describe('Default properties', () => {
    const MY_BALL = new BallOnBallTest();

    it('Ball has a xCoord', () => {
      expectOnBallTest(MY_BALL).to.have.property('xCoord');
      expectOnBallTest(MY_BALL.xCoord).to.be.a('number');
    });

    it('Ball has a yCoord', () => {
      expectOnBallTest(MY_BALL).to.have.property('yCoord');
      expectOnBallTest(MY_BALL.yCoord).to.be.a('number');
    });

    it('Ball has a radius', () => {
      expectOnBallTest(MY_BALL).to.have.property('radius');
      expectOnBallTest(MY_BALL.radius).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnBallTest(MY_BALL.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnBallTest(MY_BALL.yCoord).to.be.equal(0);
    });
  });
});

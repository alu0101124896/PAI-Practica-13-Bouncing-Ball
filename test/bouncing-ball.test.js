/**
 * @file bouncing-ball.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the BouncingBall class
 */

"use strict";

let expectOnBouncingBallTest;
let BouncingBallOnBouncingBallTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBouncingBallTest = require('chai').expect;
  BouncingBallOnBouncingBallTest = require('../src/bouncing-ball.js').BouncingBall;
} else { // Execution in browser
  expectOnBouncingBallTest = expect;
  BouncingBallOnBouncingBallTest = BouncingBall;
}

describe('BouncingBall Class', () => {
  describe('Default properties', () => {
    const MY_BOUNCING_BALL = new BouncingBallOnBouncingBallTest();

    it('BouncingBall has a canvas', () => {
      expectOnBouncingBallTest(MY_BOUNCING_BALL).to.have.property('CANVAS');
    });

    it('BouncingBall has a context', () => {
      expectOnBouncingBallTest(MY_BOUNCING_BALL).to.have.property('CONTEXT');
    });

    it('BouncingBall has a moving point', () => {
      expectOnBouncingBallTest(MY_BOUNCING_BALL).to.have.property('movingBall');
    });
  });
});

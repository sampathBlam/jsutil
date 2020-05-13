/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');

describe('JS Utils', () => {
  let jsUtils;
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
    jsUtils = require('../dist/bundle');
  })
  describe('Array Utils', () => {
    let reverseSpy;
    before(() => {
      reverseSpy = sandbox.spy(Array.prototype, 'reverse');
    })
    describe('reverse()', () => {
      afterEach(() => {
        sandbox.restore();
      })
      it('reverse() -> Reverses an array', () => {
        expect(jsUtils.reverse(['a', 'b', 'c'])).
          to.deep.equal(['c', 'b', 'a']);
        expect(reverseSpy.called).to.be.true;
      });

      it('reverse() -> Validation error', () => {
        expect(() => jsUtils.reverse('abc')).
          to.throw();
      });
    });
  });

  describe('Object Utils', () => {
    describe('pick()', () => {
      afterEach(() => {
        sandbox.restore();
      })
      it('pick() - Picks the correct keys', () => {
        expect(jsUtils.pick({ a: 1, b: 2 }, ['a'])).
          to.deep.equal({ a: 1 });
      });

      it('pick() - Validation error', () => {
        expect(() => jsUtils.pick('abc', ['a'])).
          to.throw();
      });
    });
  });
});

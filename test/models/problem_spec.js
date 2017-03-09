
var Problem = require('../../models/problem.js');
var assert = require('assert');

describe('Problem', function() {
    describe('#answer()', function() {
        it('calculates addition', function() {
            p1 = new Problem;
            p1.number1 = 1;
            p1.number2 = 3;
            p1.operator = '-';
            assert.equal(p1.answer(), -2);
        });

        it('calculates subtraction', function() {
            p2 = new Problem;
            p2.number1 = -1;
            p2.number2 = 3;
            p2.operator = '+';
            assert.equal(p2.answer(), 2);
        });
    });
});

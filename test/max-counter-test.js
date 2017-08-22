
var chai = require('chai');
var assert = chai.assert;

var sut = require('../src/max-counters.js');

describe('max counters exercice', function() {
		it('should return the expected result by the official site for the very first case', function() {
			var operationsArray = [3, 4, 4, 6, 1, 4, 4];
			var counterSize = 5;

			var actual = sut.solution(counterSize, operationsArray);
			assert.deepEqual(actual, [3, 2, 2, 4, 2]);
		});

});

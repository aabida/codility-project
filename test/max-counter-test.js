
'use strict';

var chai = require('chai');
var assert = chai.assert;

var sut = require('../src/max-counters.js');

describe('max counters exercice', function() {
		it('should return the expected result by the official site for the very first case', function() {
			var operationsArray = [3, 4, 4, 6, 1, 4, 4];
			var counterSize = 5;

			var actual = sut.solution(counterSize, operationsArray);
			assert.deepEqual([3, 2, 2, 4, 2], actual);
		});

		it('should return the expected value', function() {
			var actual = sut.solution(6, [3, 4, 4, 6, 5]);

			assert.deepEqual([0, 0, 1, 2, 1, 1], actual);
		});
		it('should calculate counter for small random operations', function() {
			var operationsArray = [3, 4, 4, 6, 1, 6, 2, 4, 4];
			var counterSize = 5;

			var actual = sut.solution(counterSize, operationsArray);
			assert.deepEqual([3, 4, 3, 5, 3], actual);
		})
});

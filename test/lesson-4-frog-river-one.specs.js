
'use strict';

var chai = require('chai');
var assert = chai.assert;

var sut = require('../src/lesson-4-frog-river-one.js');

describe('Frog river one', function() {
		it('should return the expected result by the official site for the very first case', function() {
			var operationsArray = [3, 4, 4, 6, 1, 4, 4];
			var counterSize = 5;

			var actual = sut.solution(5, [1,3,1,4,2,3,5,4]);
			assert.equal(6, actual);
		});


});


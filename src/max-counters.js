// https://codility.com/programmers/lessons/4-counting_elements/max_counters/


module.exports.solution = function(counterSize, operationsArray) {
	var counter = new Array(counterSize);
	counter.fill(0);

	var maxElement = 0;
	var lastOverflow = 0;

	for (var i=0; i<operationsArray.length; i++) {
		var operation = operationsArray[i] - 1;

		if (operation === counterSize) {
			lastOverflow = maxElement;
		}
		else {
			counter[operation] = 1 + Math.max(lastOverflow, counter[operation]);

			maxElement = Math.max(maxElement, counter[operation]); // update the max
		}
	}

	updateTheCounterWithTheOverflow(counter, lastOverflow);

	return counter;
}

function updateTheCounterWithTheOverflow(counter, lastOverflow) {
	for (var i=0; i<counter.length; i++) {
		counter[i] = Math.max(counter[i], lastOverflow);
	}
}


//https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

'use strict';

module.exports.solution = function(oppositeBankIndex, leafPositions) {
	var setOfPositionsAvailableForTheFrog = new Set();

	var i = 0;
	var couldJump = false;
	while (!couldJump && i<leafPositions.length) {
		addLeafPosition(setOfPositionsAvailableForTheFrog, leafPositions[i]);
		if (frogCouldJump(setOfPositionsAvailableForTheFrog, oppositeBankIndex)) {
			couldJump = true;
		} else {
			i++;
		}
	}

	if (couldJump)
		return i;
	return -1;
};

function addLeafPosition(setOfPositionsAvailableForTheFrog, leafPosition) {
	setOfPositionsAvailableForTheFrog.add(leafPosition);
};

function frogCouldJump(setOfPositionsAvailableForTheFrog, oppositeBankIndex) {
	return oppositeBankIndex === setOfPositionsAvailableForTheFrog.size;
};
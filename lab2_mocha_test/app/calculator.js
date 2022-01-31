var expect = require("chai").expect;
var calcualte = require("../app/calculator");
const assert = rquire('assert');


exports.add = function(i, j) {
	return i + j;
};

exports.mul = function(i, j) {
	return i * j;
};

exports.div = function(i, j) {
	return i / j;
};

exports.sub = function(i, j) {
	return i - j;
};

describe ('add the values', () => {
	it( 'should add the values', () => {
		const result = add(5,2);
		assert.equal(result, 8);


	});

});

describe ('subtract the values', () => {
	it( 'should add the values', () => {
		const result = sub(5,2);
		assert.equal(result, 8);


	});

});



describe ('multiply the values', () => {
	it( 'should add the values', () => {
		const result = mul(5,2);
		assert.equal(result, 12);


	});

});


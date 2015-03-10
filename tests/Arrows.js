"use strict";

describe("using Arrows", function () {
	it("will allow functional programming", function () {
		var add = function (x, y) {
			return x + y;
		};

		expect(add(1, 2)).toBe(3);
	});
});
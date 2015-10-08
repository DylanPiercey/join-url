var assert = require("assert");
var join   = require("../");

describe("join-url", function () {
	it("should join paths", function () {
		assert.equal(
			join("/a", "/b"),
			"/a/b"
		);

		assert.equal(
			join("/a", "b"),
			"/a/b"
		);
	});

	it("should join a querystring", function () {
		assert.equal(
			join("/a", "/?test=1"),
			"/a?test=1"
		);

		assert.equal(
			join("/a", "?test=1"),
			"/a?test=1"
		);
	});

	it("should join a hash", function () {
		assert.equal(
			join("/a", "/#test"),
			"/a#test"
		);

		assert.equal(
			join("/a", "#test"),
			"/a#test"
		);
	});

	it("should join a url with a protocol", function () {
		assert.equal(
			join("http://test.com/a", "/b"),
			"http://test.com/a/b"
		);

		assert.equal(
			join("http://test.com/a", "b"),
			"http://test.com/a/b"
		);
	});
});
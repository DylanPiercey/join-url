var assert = require("assert");
var join   = require("../");

describe("join-url", function () {
	it("should join paths", function () {
		assert.equal(
			join.pathname("/admin/", "/"),
			"/admin/"
		);

		assert.equal(
			join.pathname("/admin/", "dashboard/", null, "/messages", "new"),
			"/admin/dashboard/messages/new"
		);
	});

	it("should join hosts", function () {
		assert.equal(
			join.hostname(".sub.", "domain.", null, ".co", "uk"),
			"sub.domain.co.uk"
		);
	});

	it("should join a querystring", function () {
		assert.equal(
			join.query("&a=1&", "b=2&", null, "&c=3", "d=4"),
			"a=1&b=2&c=3&d=4"
		);
	});
});
"use strict";

module.exports = {
	pathname: joinPathName,
	hostname: joinHostName,
	query:    joinQuery
};

/**
 * Joins paths, normalizing all slashes.
 */
function joinPathName () {
	// Convert arguments to an array.
	for (var i = arguments.length, arr = new Array(i); i--;) {
		arr[i] = arguments[i];
	}

	return arr
		.filter(exists)
		.join('/')
		.replace(/\/+/g, '/');
}

/**
 * Joins hosts, normalizing all dots.
 */
function joinHostName () {
	// Convert arguments to an array.
	for (var i = arguments.length, arr = new Array(i); i--;) {
		arr[i] = arguments[i];
	}

	return arr
		.filter(exists)
		.join('.')
		.replace(/^\./,  '')
		.replace(/\.+/g, '.');
}

/**
 * Joins all variables in a querystring, normalizing all ampersands.
 */
function joinQuery () {
	// Convert arguments to an array.
	for (var i = arguments.length, arr = new Array(i); i--;) {
		arr[i] = arguments[i];
	}

	return arr
		.filter(exists)
		.join('&')
		.replace(/^&/,  '')
		.replace(/&+/g, '&');
}

/**
 * Utility to check if a value exists.
 */
function exists (val) {
	return val != null
}

module.exports = function joinURL () {
	// Convert arguments to an array.
	for (var i = arguments.length, arr = new Array(i); i--;) {
		arr[i] = arguments[i];
	}
	
	return arr
		.join("/")
		.replace(/[\/]+/g,      '/')
		.replace(/\/\?/g,       '?')
		.replace(/\/\#(?!\!)/g, '#')
		.replace(/\:\//g,       '://');
};
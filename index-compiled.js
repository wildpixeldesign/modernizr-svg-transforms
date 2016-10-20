'use strict';

/* global Modernizr */

module.exports = function () {

	Modernizr.addTest('svg-transforms', function () {
		var vendorPrefixesCss = ['-moz-', '-ms-', '-webkit-', ''],


		// reduce vendor prefix array to create a cssText string.
		styleRules = vendorPrefixesCss.reduce(function (prev, curr) {
			return prev + curr + 'transform: translateX(10px); ';
		}, ''),
		    body = document.querySelector('body'),
		    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
		    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

		// Append elements to dom
		svg.appendChild(path);
		svg.style.width = '100px';
		body.appendChild(svg);

		// getBoundingClientRect to determine if transform applied successfully.
		var initialBoundingRect = path.getBoundingClientRect();

		path.style.cssText = styleRules;

		var newBoundingRect = path.getBoundingClientRect();

		return initialBoundingRect.left != newBoundingRect.left;
	});
};
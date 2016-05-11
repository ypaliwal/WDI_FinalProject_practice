(function() {
	'use strict';

	angular
		.module('myApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($location, $state) {
		var mainVm = this;
		console.log("MainCtrl loaded!");

		// Global functions
		mainVm.toGraph = toGraph;

		function toGraph() {
			$state.go('home.graph');
		}

	}

})();
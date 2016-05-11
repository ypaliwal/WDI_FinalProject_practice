(function() {
	'use strict';

	angular
		.module('myApp', ['ui.router']);

	angular
		.module('myApp')
		.config(function($stateProvider, $urlRouterProvider){
			
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'site/partials/main.html',
				controller: 'MainCtrl as ctrl'
			})
			.state('home.graph', {
				url: '/graph',
				templateUrl: 'site/partials/main-graph.html',
				controller: 'GraphCtrl as ctrl'
			});
			// .state('', {
			// 	url: '/',
			// 	templateUrl: 'site/partials/',
			// 	controller: ' as ctrl'
			// });
		});

})();
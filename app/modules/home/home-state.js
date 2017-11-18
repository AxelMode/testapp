(function() {
	'use strict';
	angular.module('testApp.home',[]).config(
		function ($stateProvider) 
		{
			console.log('Se ha cargado el estado testApp.home!!!');
			$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'modules/home/home-tpl.html'
			});
		}
	);
})();
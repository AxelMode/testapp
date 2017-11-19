(function() {
	'use strict';

	//Dado que $stateProvider es un provider de AngularJS, debemos inyectarlo
	//en un bloque config.
	angular.module('testApp.login',[]).config(
		function ($stateProvider) 
		{
			console.log('state - <<testApp.login>>');
			//Código para registrar el estado
			$stateProvider.state('login', {
				url: '/login',
				templateUrl: 'modules/login/login-tpl.html',
				controller: 'loginController',
				controllerAs:'vm'
			});
		}
	);
})();
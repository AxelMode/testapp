(function() {
	'use strict';

	angular.module('testApp.login')
	.service('loginService', loginService);

	loginService.$inject = ['$log'];

	function loginService($log) {

		var service = {
			login: login
		};

		function login(email, password) {
			$log.info('Datos recibidos: Email: ' + email + ' Password: ' + password);
			//TODO: Call to $http method to retrieve userData.
		}

		return service;
	}
})();
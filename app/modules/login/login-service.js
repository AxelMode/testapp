(function() {
	'use strict';

	angular.module('testApp.login')
	.factory('loginService', loginService);

	loginService.$inject = ['$log'];

	function loginService($log) {

		var service = {
			login: login
		};

		function login(email, password, callbackFunction) {
			//TODO: Call to $http method to retrieve userData.

			var response = {
				'name': 'Axel',
				'surname': 'God of War',
				'age' : 38,
				'gender': 'male',
				'address' : 'My personal address'
			};

			callbackFunction(response);
		}

		return service;
	}
})();
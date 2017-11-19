(function(){
	'use strict';
	angular.module('testApp.login')
	.controller('loginController',loginController);

	loginController.$inject = ['$scope','$log','loginService', '$state'];

	function loginController($scope, $log, loginService, $state) {
		$log.info('<<loginController>> loaded')
		var vm = this;

		//Place bindable members at the top of the controller, alphabetized, and not spread through the controller code.
		vm.doLogin = doLogin;

		///////

		init();

		function init() {
			$log.info('Init en loginController!!');
		}


		function doLogin() {
			loginService.login(vm.email, vm.password, callbackFunction);
		}

		function callbackFunction(response) {
			//Hemos recibido los datos del usuario y estos
			//los pasamos como parámetros al estado siguiente.

			//TODO: Saltar al estado userdata pasándole response.
			$state.go('userdata', {params: response});
		}
	}
})();
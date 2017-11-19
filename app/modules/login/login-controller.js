(function(){
	'use strict';
	angular.module('testApp.login')
	.controller('loginController',loginController);

	loginController.$inject = ['$scope','$log','loginService'];

	function loginController($scope, $log, loginService) {
		$log.info('<<loginController>>')
		var vm = this;

		vm.doLogin = doLogin;

		init();

		function init() {
			$log.info('Init!!');
		}


		function doLogin() {
			loginService.login(vm.email, vm.password);
		}
	}
})();
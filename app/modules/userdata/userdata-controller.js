(function() {
	angular.module('testApp.userdata')
	.controller('userdataController' , userdataController);

	userdataController.$inject = ['$scope','$log', '$stateParams', '$state'];

	function userdataController($scope, $log, $stateParams, $state) {
		$log.info('<<userdataController>> loaded!');
		var vm = this;

		///
		vm.close = close;
		///

		init();

		function init() {
			$log.info('Init en userdataController');

			vm.model = {
				data : {}
			};

			if ($stateParams && $stateParams.params) {
				//Se copian los parámetros recibidos en el modelo.
				angular.copy($stateParams.params, vm.model.data);
			}
		}

		function close() {
			$state.go('login');
		}

	}
})();
(function(){
	'use strict';
	angular.module('testApp.headerbar')
	.controller('headerbarController',headerbarController);

	headerbarController.$inject = ['$scope','$log', '$translate'];

	function headerbarController($scope, $log, $translate) {
		$log.info('<<headebarController>> loaded');
		var vm = this;

		vm.changeLang = changeLang;

		function changeLang(lang) {
			$log.info('Change Language!!');
			switch(lang) {

				case 'en':
				case 'es':
					$translate.use(lang);
				break;

				default:
					$translate.use('en');
				break;
			}
		}
	}
})();
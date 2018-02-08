(function() {
	'use strict';

	//Dado que $stateProvider es un provider de AngularJS, debemos inyectarlo
	//en un bloque config.
	angular.module('testApp.headerbar',[]).config(['$stateProvider',headerbarConfig]);

		function headerbarConfig ($stateProvider) 
		{
			console.log('state - <<testApp.headerbar>>');
			//Código para registrar el estado
			$stateProvider.state('headerbar', {
				controller: 'headerbarController',
				controllerAs:'vm'
			});
		}
})();
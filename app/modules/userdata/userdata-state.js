(function() {
	'use strict';

	//Dado que $stateProvider es un provider de AngularJS, debemos inyectarlo
	//en un bloque config.
	angular.module('testApp.userdata',[]).config(
		function ($stateProvider) 
		{
			console.log('state - <<testApp.userdata>>');
			//Código para registrar el estado
			$stateProvider.state('userdata', {
				url: '/userdata',
				templateUrl: 'modules/userdata/userdata-tpl.html',
				controller: 'userdataController',
				controllerAs:'vm',
				params: {
     			   params: null
    			}
			});
		}
	);
})();
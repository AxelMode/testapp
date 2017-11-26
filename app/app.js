(function() {
  'use strict';

//Decimos a Angular que testApp es nuestro módulo principal y éste
//depende del módulo "ui.router" y de "testApp.home".
angular.module('testApp', [
  'ui.router',
  'pascalprecht.translate',
  'testApp.login',
  'testApp.userdata',
  'testApp.headerbar']);


	//Aquí se configura sobre el módulo de la aplicación el proveedor de traducciones.
	angular.module('testApp').config(['$translateProvider', function ($translateProvider) {

		//Configuración de la ruta desde la que se obtendrán los ficheros.
		$translateProvider.useStaticFilesLoader({
    		prefix: '/i18n/locale-',
    		suffix: '.json'
		});

		/* The method useSanitizeValueStrategy(strategy) defines which strategy 
		   for escaping will be used; this is global.

		*  sanitize: sanitizes HTML in the translation text using $sanitize.
		*  escape: escapes HTML in the translation.
		*  sanitizeParameters: sanitizes HTML in the values of the interpolation parameters using $sanitize.
		*  escapeParameters: escapes HTML in the values of the interpolation parameters.
		*  sce: wraps HTML in $sce.trustAsHtml(value).
		*  sceParameters: wraps HTML in the values of the interpolation parameters in $sce.trustAsHtml(value)
		*/
		$translateProvider.useSanitizeValueStrategy('escape');

		//Selección  de idiona por defecto.
		$translateProvider.preferredLanguage('es');
	}]);


})();
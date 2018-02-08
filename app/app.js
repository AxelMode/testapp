(function() {
  'use strict';

//Decimos a Angular que testApp es nuestro módulo principal y éste
//depende del módulo "ui.router" y de "testApp.home".
/* Un módulo es una colección de proveedores, servicios, directivas, etc. y opcionalmente bloques run y config que pueden aplicarse durante el proceso de arranque de la aplicación.

Los módulos pueden contener otros módulos como dependencias. Depender de un módulo implica que el módulo requerido será cargado antes que el módulo que lo requiere.

En un módulo único, el orden de ejecución es como sigue:

		1.- provider functions are executed, so they and the services they define can be made available to the $injector.

		2.- After that, the configuration blocks (config functions) are executed. This means the configuration blocks of the required modules execute before the configuration blocks of any requiring module.

This continues until all module dependencies has been resolved.

Then, the run blocks that have been collected from each module are executed in order of requirement.
			Los bloques Run son lo más cercano a un método main en angularJS.
			Un bloque Run es el código que se necesita ejecutar para arrancar rápidamente la aplicación.
			Se ejecuta después de que todos los servicios hayan sido configurados y el inyector haya sido creado.


Documentación: https://docs.angularjs.org/guide/module
*/
angular.module('testApp', [
  'ui.router',
  'pascalprecht.translate',
  'testApp.login',
  'testApp.userdata',
  'testApp.headerbar']);


	//Aquí se configura sobre el módulo de la aplicación el proveedor de traducciones.
	angular.module('testApp').config(['$translateProvider',initialConfig]);


		function initialConfig($translateProvider) {
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
		}
	//}]);


})();
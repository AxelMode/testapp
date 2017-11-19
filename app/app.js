(function() {
  'use strict';

//Decimos a Angular que testApp es nuestro módulo principal y éste
//depende del módulo "ui.router" y de "testApp.home".
angular.module('testApp', [
  'ui.router',
  'testApp.login',
  'testApp.userdata']);
})();
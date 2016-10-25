angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

	.state('tabsController.controlRemoto', {
    url: '/manual',
    views: {
      'tab1': {
        templateUrl: 'templates/controlRemoto.html',
        controller: 'controlRemotoCtrl'
      }
    }
  })

  .state('tabsController.trabajos', {
    url: '/jobs',
    views: {
      'tab2': {
        templateUrl: 'templates/trabajos.html',
        controller: 'trabajosCtrl'
      }
    }
  })

  .state('tabsController.configuracion', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/configuracion.html',
        controller: 'configuracionCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/manual')

  

});
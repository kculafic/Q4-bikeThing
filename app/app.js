import angular from 'angular'
import uiBootstrap from 'angular-ui-bootstrap'

import uiRouter from 'angular-ui-router'

import LongtripsCtrl from './longtrips/longtrips.controller';
import TourCtrl from './longtrips/tour.controller';
import LongtripCreatorCtrl from './longtrips/longtrip-creator.controller';
import LongtripsService from './longtrips/longtrips.service';

angular.module('my-app', [uiBootstrap, uiRouter])
  .service('LongtripsService', LongtripsService)
  .controller('LongtripsCtrl', LongtripsCtrl)
  .controller('TourCtrl', TourCtrl)
  .controller('LongtripCreatorCtrl', LongtripCreatorCtrl)
  .config(['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/home.html'
    })
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('ltindex', {
      url: '/ltindex',
      templateUrl: 'views/ltindex.html'
    })
    .state('ltshow', {
      url: '/ltindex/:id',
      templateUrl: 'views/ltshow.html'

    })
    .state('ltadd', {
      url: '/ltadd',
      templateUrl: 'views/ltadd.html'
    })
  }]);

import angular from 'angular'
import uiBootstrap from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router'

import ngMap from 'ngmap'

import LongtripsCtrl from './longtrips/longtrips.controller';
import TourCtrl from './longtrips/tour.controller';
import LongtripCreatorCtrl from './longtrips/longtrip-creator.controller';
import LongtripsService from './longtrips/longtrips.service';

import SignUpCtrl from './user/signUp.controller';
import loginCtrl from './user/login.controller';
import SignOutCtrl from './user/signOut.controller';
import AuthService from './user/authentication.service';
import SignUpService from './user/signUp.service';

import SegmentsCreatorCtrl from './segments/segment-creator.controller';
import SegmentsService from './segments/segments.service';

angular.module('my-app', [uiBootstrap, uiRouter, ngMap])
  .service('LongtripsService', LongtripsService)
  .controller('LongtripsCtrl', LongtripsCtrl)
  .controller('TourCtrl', TourCtrl)
  .controller('LongtripCreatorCtrl', LongtripCreatorCtrl)
  .controller('loginCtrl', loginCtrl)
  .controller('SignUpCtrl', SignUpCtrl)
  .controller('SignOutCtrl', SignOutCtrl)
  .service('SignUpService', SignUpService)
  .service('AuthService', AuthService)
  .service('SegmentsService', SegmentsService)
  .controller('SegmentsCreatorCtrl', SegmentsCreatorCtrl)
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
    .state('ltsegments', {
      url: '/ltindex/:id/segments/',
      templateUrl: 'views/ltsegments.html'
    })
    .state('ltadd', {
      url: '/ltadd',
      templateUrl: 'views/ltadd.html'
    })
    .state('createUser', {
      url: '/newuser',
      templateUrl: 'views/createUser.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html'
    })

  }]);

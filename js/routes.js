//routes.js
var routerApp = angular.module('routes', []);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'view/dashboard.html',
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: LoginController
    });



    // .state('dashboard', {
    //     abstract: true,
    //     url: '/dashboard',
    //     templateUrl: 'content.html',
    // })
    // .state('dashboard.dashboard', {
    //     url: '/',
    //     templateUrl: 'dashboard.html',
    // })
    // .state('dashboard.provider', {
    //     url: '/provider',
    //     templateUrl: 'provider.html',
    // })

});

var theApp = angular.module('theApp', ['ngRoute']);

theApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(false);

        $routeProvider.
        when('/home', {
            templateUrl: 'app/components/home/home.index.html',
            controller: 'HomeCtrl'
        }).
        when('/practice/:courseId', {
            templateUrl: 'app/components/practice/practice.index.html',
            controller: 'PracticeCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);
'use strict';

theApp.controller('PracticeCtrl', function($scope, $routeParams, courseService) {

    let course = courseService.getById($routeParams.courseId);

    $scope.entries = [];
    $scope.title = course.title;
    $scope.description = course.description;
    $scope.equation = new Equation(course.strategies);

    $scope.check = function() {
        $scope.entries.unshift($scope.equation);
        $scope.equation = new Equation(course.strategies);
    }
});
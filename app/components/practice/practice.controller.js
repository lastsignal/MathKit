'use strict';

theApp.controller('PracticeCtrl', function($scope, $routeParams, programService) {

    let program = programService.getById($routeParams.programId);

    console.log(program);

    $scope.entries = [];
    $scope.title = program.title;
    $scope.description = program.description;
    $scope.equation = new Equation(program.strategies);

    $scope.check = function() {
        $scope.entries.unshift($scope.equation);
        $scope.equation = new Equation(program.strategies);
    }
});
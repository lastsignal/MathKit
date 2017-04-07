theApp.controller('HomeCtrl', function($scope, courseService) {

    $scope.courses = courseService.getList();

    $scope.systemDate = Date();
    /*
        sharedService.getSystemDate().then(function(result) {
            var date = new Date(result);
            $scope.systemDate = date;
        });
    */

    $scope.userInfo = 'Hello you';
    /*
        sharedService.getUserInfo().then(function (result) {
            $scope.userInfo = result;
        });
    */
});
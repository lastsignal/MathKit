theApp
    .controller('HomeCtrl', function ($scope, courseService) {

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
    })
    .filter('courseContains', function () {
        return function (items, tag) {
            var result = [];
            for (var i = 0; i < items.length; i++) {
                if (!!tag && !!items[i].tags && items[i].tags.includes(tag)) {
                    result.push(items[i]);
                }
            }
            return result;
        }
    })
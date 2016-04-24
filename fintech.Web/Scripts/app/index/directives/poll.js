app.directive("poll", ["pollDataHttp", "$interval", "$location", function (pollDataHttp, $interval, $location) {
    return {
        scope: {
            pollData: "="
        },
        restrict: "EA",
        replace: true,
        templateUrl: "../scripts/app/index/directives/poll.html",
        controller: ["$scope", pollCtrl]
    };

    function pollCtrl($scope) {

        var interval = null;
        $scope.pollData = [];
        $scope.remainingTime = 0;

        var data = [];
        pollDataHttp.getMyFriendsPolls({}).then(
            function (resp) {
                $scope.pollData = resp;
            },
            function (exception) {

                var endDate = new Date();
                var startDate = new Date();
                endDate.setMinutes(startDate.getMinutes()+1);
                $scope.pollData = [{
                    id:"1",
                    owner: "Mitsos",
                    startDate: startDate,
                    endDate: endDate,
                    remainingTime: endDate - startDate,
                    imgUrl: "../Content/tempImages/temp1.jpg"
                },
                {
                    id: "2",
                    owner: "Maria",
                    startDate: new Date(),
                    endDate: endDate,
                    remainingTime: endDate - startDate,
                    imgUrl: "../Content/tempImages/temp2.jpg"
                }];

            });


        $scope.goToPoll = function (pollId) {
            $location.url('/poll/' + pollId);
        }

      
        $scope.$watch("pollData", function (n, o) {
            if (n != o) {
                interval = $interval(function () {
                    if ($scope.pollData && $scope.pollData.length > 0) {
                        if ($scope.remainingTime <= 0 && data.length<=$scope.pollData.length) {
                            var remainingData = _.difference($scope.pollData, data)
                            if (remainingData.length == 0) {
                                $interval.cancel(interval);
                            }
                            $scope.display = _.first(remainingData);
                            data.push($scope.display);
                            $scope.remainingTime = $scope.display.endDate - $scope.display.startDate;
                        }
                        $scope.remainingTime -= 100;
                    }
                }, 100);
            }
        })
    }
}])
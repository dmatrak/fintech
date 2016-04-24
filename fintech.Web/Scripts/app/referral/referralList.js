app.controller("checkoutCtrl", function ($scope, pollDataHttp, $routeParams, $location, $interval, userProfile) {
    
    var interval = null;

    if (!$routeParams.uniqId || $routeParams.uniqId.trim().length == 0) {
        $location.url("/checkout");
    }
    
    pollDataHttp.getNeedDetails({ needId: $routeParams.uniqId }).then(
        function (resp) {
            $scope.details = resp;
        },
        function (exception) {
            var endDate = new Date();
            var startDate = new Date();
            endDate.setMinutes(startDate.getMinutes() + 1);
            $scope.details = {
                uniqId: 100,
                prodId:1000,
                catId: 3,
                owner: "Mitsos",
                startDate: startDate,
                endDate: endDate,
                remainingTime: endDate - startDate,
                imgUrl: "../Content/tempImages/temp1.jpg",
                profPicUrl: "",
                message:"Should i get it or not?"
            }
        });

    $scope.thumbsUp = function () {
        pollDataHttp.giveThumbsUp({ needId: $routeParams.uniqId, userId: userProfile.id });
    }
    $scope.thumbsDown = function () {
        pollDataHttp.giveThumbsDown({ needId: $routeParams.uniqId, userId: userProfile.id });
    }
    $scope.addToWishList = function () {
        pollDataHttp.addToWishList({ prodId: $scope.details.prodId, userId: userProfile.id });
    }

    $scope.$watch("details", function (n, o) {
        if (n != o) {
            interval = $interval(function () {
                if ($scope.details) {
                    if ($scope.remainingTime <= 0) {
                        $interval.cancel(interval);
                    }
                    $scope.details.remainingTime -= 100;
                }
            }, 100);
        }
    })
});
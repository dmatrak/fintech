app.controller("myNeedsCtrl", function ($scope) {


    console.log("sds");




});


app.controller("needsCtrl", function ($scope, pollDataHttp, $interval, $location) {

    $scope.categories = [
        {
            id: 1,
            title: "Fashion"
        },
        {
            id: 2,
            title: "Travel"
        },
        {
            id: 3,
            title: "Technology"
        },
        {
            id: 4,
            title: "Food & Drinks"
        }
    ];

    var intervals = [];
    $scope.currentPolls = [];
    $scope.remainingTime = 0;
    var data = [];

    pollDataHttp.getCurrentPolls({}).then(
            function (resp) {
                $scope.currentPolls = resp;
            },
            function (exception) {

                var endDate = new Date();
                var startDate = new Date();
                endDate.setMinutes(startDate.getMinutes() + 1);
                $scope.currentPolls = [{
                    uniqId:100,
                    catId: 3,
                    owner: "Jennifer",
                    startDate: startDate,
                    endDate: endDate,
                    remainingTime: endDate - startDate,
                    imgUrl: "../Content/tempImages/temp1.jpg"
                },
                {
                    uniqId: 200,
                    catId: 1,
                    owner: "Maria",
                    startDate: new Date(),
                    endDate: endDate,
                    remainingTime: endDate - startDate,
                    imgUrl: "../Content/tempImages/temp2.jpg"
                },
                 {
                     uniqId: 300,
                     catId: 1,
                     owner: "Maria",
                     startDate: new Date(),
                     endDate: endDate,
                     remainingTime: endDate - startDate,
                     imgUrl: "../Content/tempImages/temp2.jpg"
                 }
                ];

            });

    pollDataHttp.getMyFriendsPolls({}).then(
            function (resp) {
                $scope.pollsPerCategory = resp;
            },
            function (exception) {

                $scope.pollsPerCategory = [
                    {
                        id: 1,
                        title: "Fashion",
                        total: 12
                    },
                    {
                        id: 2,
                        title: "Travel",
                        total: 3
                    },
                    {
                        id: 3,
                        title: "Technology",
                        total: 10
                    },
                    {
                        id: 4,
                        title: "Food & Drinks",
                        total: 100
                    }
                ];

            });

    $scope.$watch("currentPolls", function (n, o) {
        if (n != o) {
            $scope.$evalAsync(function () {
                _.forEach($scope.currentPolls, function (i) {
                    var interval = $interval(function () {
                        if (i.remainingTime <= 0) {
                            $interval.cancel(intervals[intervals.indexOf(interval)]);
                        }
                        i.remainingTime -= 100;
                    }, 100)
                    intervals.push(interval);
                });
            });
            console.log(intervals)
        }
    })

    $scope.goToNeed=function(uniqId){
        $location.url("/needs/" + uniqId);
    }
    $scope.goToProdCat=function(id){
        $location.url("/myNeeds");
    }
});
app.controller("referralListCtrl", function ($scope, pollDataHttp, $routeParams, $location, $interval, userProfile) {
    
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



});
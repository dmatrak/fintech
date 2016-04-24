app.controller("referralListCtrl", function ($scope, pollDataHttp, $routeParams, $location, $interval, userProfile) {
    
    $scope.goToProdCat = function (id)
    {
        $location.url("/referrals/" + id);
    }
    console.log("sds");
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
    ];;

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

app.controller("referralsDetailCtrl", function ($scope) {


    console.log("sds");
   
  


});
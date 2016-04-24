app.controller("brandsCtrl", function ($scope, $location) {
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

    $scope.goTo = function (section) {
        $location.url("/brands/brandsMerchants/" + section);
    }
   

})
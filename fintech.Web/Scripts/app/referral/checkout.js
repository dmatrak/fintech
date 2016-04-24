app.controller("checkout", function ($scope,$location) {
    $scope.data = {
        imgUrl: "~Content/tempImages/tmp1.jpg",

    }

    $scope.goTo= function(id) {
        $location.url("/" + id);
    }
})
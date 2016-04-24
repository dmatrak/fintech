app.controller("brandsMerchantsDetailsCtrl", function ($scope, $location) {


    $scope.goTo = function (section) {
        $location.url("/brands/brandsMerchants/" + section);
    }


})
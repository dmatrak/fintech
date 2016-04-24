app.controller("brandsMerchantsCtrl", function ($scope, $location,$routeParams) {
    

    $scope.goTo = function (section) {
        $location.url("/brands/brandsMerchants/" + $routeParams.id +"/" +section);
    }


})
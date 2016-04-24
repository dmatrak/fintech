app.controller("cameraCtrl", function($scope,$location) {
    $scope.goToSend= function() {
        $location.url("/send")
    }
})
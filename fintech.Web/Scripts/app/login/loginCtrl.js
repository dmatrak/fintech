app.controller("loginCtrl", function($scope, $location,userProfile) {
    
    $scope.login= function(user) {
        userProfile.user = user;
        $location.url("/home");
    }
})
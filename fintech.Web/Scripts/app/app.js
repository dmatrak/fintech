var app = angular.module("app", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../scripts/app/index/index.html',
            controller: 'indexCtrl'
        }).
        when('/poll/:id', {
            templateUrl: '../scripts/app/poll/poll.html',
            controller: 'pollCtrl'
        }).
        when('/needs', {
            templateUrl: '../scripts/app/needs/needs.html',
            controller: 'needsCtrl'
        }).
        when('/needs/:uniqId', {
            templateUrl: '../scripts/app/needs/needDetails.html',
            controller: 'needDetailsCtrl'
        }).
        when('/referrals', {
            templateUrl: '../scripts/app/referral/referralList.html',
            controller: 'referralListCtrl'
        }).
        when('/brands', {
            templateUrl: '../scripts/app/brands/brands.html',
            controller: 'brandsCtrl'
        }).
        when('/wishlist', {
            templateUrl: '../scripts/app/wishlist/wishlist.html',
            controller: 'wishlistCtrl'
        }).when('/startPoll', {
            templateUrl: '../scripts/app/startPoll/startPoll.html',
            controller: 'startPollCtrl'
        }).when('/explore', {
            templateUrl: '../scripts/app/explore/explore.html',
            controller: 'exploreCtrl'
        }).when('/camera', {
            templateUrl: '../scripts/app/camera/camera.html',
            controller: 'cameraCtrl'
        }).when('/tapAndPlay', {
            templateUrl: '../scripts/app/tapAndPlay/tapAndPlay.html',
            controller: 'tapAndPlayCtrl'
        }).when('/profile', {
            templateUrl: '../scripts/app/profile/profile.html',
            controller: 'profileCtrl'
        }).

    otherwise({
        redirectTo: '/'
    });
}]);

app.controller("mainCtrl", function ($scope, $location) {
    $scope.goTo = function (section) {
        $location.url("/" + section);
    }
})
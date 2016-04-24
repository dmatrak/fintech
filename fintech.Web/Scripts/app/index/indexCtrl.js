app.controller("indexCtrl", function ($scope, $location) {
    $scope.data = {
        searchResult: {},
        pollData: {},
        needs: {
            title: "Needs",
            items: 250
        },
        referrals: {
            title: "Referrals",
            items: 11
        },
        brands: {
            title: "My Brands' Invites",
            items: 17
        },
        wishlist: {
            title: "Wishlist",
            items: 6
        }
    }

    $scope.goTo = function (section) {
        $location.url("/" + section);
    }
   

})
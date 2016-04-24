app.service("pollDataHttp", ["$http", function ($http) {

    return {
        getMyFriendsPolls: function (req) {
            return $http.post("api/referraApi/getMyFriendsPolls", req);
        }
    };
}])
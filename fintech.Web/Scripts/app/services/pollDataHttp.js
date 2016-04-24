app.service("pollDataHttp", ["$http", function ($http) {

    return {
        getCurrentPolls: function (req) {
            return $http.post("api/referraApi/getCurrentPolls", req);
        },
        getMyFriendsPolls: function (req) {
            return $http.post("api/referraApi/getMyFriendsPolls", req);
        }
    };
}])
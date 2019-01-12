var a = angular.module('newApp', ['ngSanitize']).controller('appCtrl', function ($scope) {
    $scope.names =
        [
            {name: "Ali", country: "Iran"},
            {name: "Mahdi", country: "France"},
            {name: "Reza", country: "England"},
            {name: "Mohammad", country: "Switzerland"},
            {name: "Mojtaba", country: "Turkey"},
            {name: "Hadi", country: "US"}
        ];
    $scope.changeOrder = function (x) {
        $scope.orderByMe = x;
    };
});
a.filter('myFilter', function () {
    return function (x) {
        var txt = "";
        var i, ch = "";
        for (i = 0; i < x.length; i++) {
            ch = x[i];
            if (i % 2 == 0) {
                ch = ch.toUpperCase();
            }
            txt += ch;
        }
        return txt;
    };
});
a.controller('locationURL', function ($scope, $location) {
    $scope.myURL = $location.absUrl();
    $scope.myPath = $location.path();
    $scope.myProtocol = $location.protocol();
    $scope.url = $location.url();
    $scope.port = $location.port();
    $scope.host = $location.host();
});

a.controller("makeResponse", function ($scope, $http) {
    $http.get("innerHTML.html").then(function (Response) {
        $scope.myData = Response.data;
    });
});
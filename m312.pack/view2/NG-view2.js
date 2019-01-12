var a = angular.module("newApp", []).controller("appCtrl", function ($scope) {
    $scope.names =
        [{name: "ALi", country: "Iran"},
            {name: "Mahdi", country: "France"},
            {name: "Reza", country: "England"},
            {name: "Mohammad", country: "Switzerland"},
            {name: "Mojtaba", country: "Turkey"},
            {name: "Hadi", country: "US"}];
    $scope.changeOrder = function (x) {
        $scope.orderByMe = x;
    };
});
a.controller("timeOut" , function ($scope, $timeout) {
    $scope.wm = "Welcome Mahdi to Your Company";
    $timeout(function () {
        $scope.wm = "It's your second's day of Job"
    },5000);
});
a.controller("interval" , function ($scope, $interval) {
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
});
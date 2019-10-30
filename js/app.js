var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.events = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/sets.json';

        $http.get(file)
        .then(function(response) {
            $scope.sets = response.data.sets;
        });
    };

    $scope.init();
});
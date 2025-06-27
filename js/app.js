var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http, $q, $filter) {
  $scope.sets = [];
  $scope.sets_jonathan = [];

  $scope.sum = 0;

  $scope.init = function () {
    getData();
    getDataJonathan();
  };

  getData = () => {
    var file = "data/sets.json";

    $http.get(file).then(function (response) {
      $scope.sets = response.data.sets;

      // $scope.sum = function () {
      //   var total = 0;
      //   angular.forEach($scope.sets, function (key, value) {
      //     total += parseFloat(key.price);
      //   });
      //   return total;
      // };
    });
  };

  getDataJonathan = () => {
    var file = "data/jonathan.json";

    $http.get(file).then(function (response) {
      $scope.sets_jonathan = response.data.sets;
    });
  };

  $scope.init();
});

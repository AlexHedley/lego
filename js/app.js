var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $http, $q, $filter) {
  // const pathPrefix = process.env.GITHUB_ACTIONS ? "/lego/" : "/";
  const pathPrefix = "/lego/"; // "/"
  $scope.pathPrefix = pathPrefix;

  $scope.events = [];
  $scope.sum = 0;

  $scope.init = function () {
    getData();
  };

  getData = () => {
    var file = "data/sets.json";

    $http.get(file).then(function (response) {
      $scope.sets = response.data.sets;

      $scope.sum = function () {
        var total = 0;
        angular.forEach($scope.sets, function (key, value) {
          total += parseFloat(key.price);
        });
        return total;
      };
    });
  };

  $scope.init();
});

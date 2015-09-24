'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http, $watchGroup) {

    $scope.gold_value = 3;
    $scope.silver_value = 2;
    $scope.bronze_value = 1;

    $scope.sortType     = 'total_points'; // set the default sort type
    $scope.sortReverse  = true;  // set the default sort order


    $http.get('https://www.kimonolabs.com/api/4rgltdoq?apikey=h8I2BEdJd3zQHmVYN8aboiHgoy71W4BX')
      .then(function(res){
        $scope.countries = res.data.results.data;

        angular.forEach($scope.countries, function (country) {
          country.gold = parseFloat(country.gold);
          country.silver = parseFloat(country.silver);
          country.bronze = parseFloat(country.bronze);
        });

        $scope.updatePoints();

      });

    $scope.updatePoints = function() {
      angular.forEach($scope.countries, function (country) {
        country.gold_points = country.gold * $scope.gold_value;
        country.silver_points = country.silver * $scope.silver_value;
        country.bronze_points = country.bronze * $scope.bronze_value;
        country.total_points = country.gold_points + country.silver_points + country.bronze_points;
      });
    };

    $scope.medalValues = function(gold, silver, bronze) {
      $scope.gold_value = gold;
      $scope.silver_value = silver;
      $scope.bronze_value = bronze;

      $scope.updatePoints();
    }


    // $scope.$watchGroup(['gold_value', 'silver_value', 'bronze_value'],function(newVal, oldVal){
    //   // $scope.$apply();

    //   angular.forEach($scope.countries, function (country) {
    //     country.gold_points = country.gold * $scope.gold_value;
    //     country.silver_points = country.silver * $scope.silver_value;
    //     country.bronze_points = country.bronze * $scope.bronze_value;
    //     country.total_points = country.gold_points + country.silver_points + country.bronze_points;
    //   });
    // });
  }])

  .controller('MyCtrl2', [function() {

  }]);

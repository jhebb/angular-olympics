'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http, $watchGroup) {

    $scope.rankFilter = function (rank) {
        return rank.rank > 0;
    };

   $scope.gold_value = 3;
   $scope.silver_value = 2;
   $scope.bronze_value = 1;

   $scope.$watchGroup(['gold_value'],function(newVal, oldVal){
    // console.log('Using $scope.$watchGroup - Models Changed to '+ newValues[0]+' and '+newValues[1]);
    console.log('Using $scope.$watchGroup - Models Changed to '+ newVal[0]);

   });

  $http.get('https://www.kimonolabs.com/api/4rgltdoq?apikey=h8I2BEdJd3zQHmVYN8aboiHgoy71W4BX')
    .then(function(res){
      $scope.countries = res.data.results.data;

      angular.forEach($scope.countries, function (country) {
        country.gold = parseFloat(country.gold);
        country.silver = parseFloat(country.silver);
        country.bronze = parseFloat(country.bronze);
        country.gold_points = country.gold * $scope.gold_value;
        country.silver_points = country.silver * $scope.silver_value;
        country.bronze_points = country.bronze * $scope.bronze_value;
        country.total_points = country.gold_points + country.silver_points + country.bronze_points;
      });

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

    // $scope.goldPoints = function(index) {
    //   var country = $scope.countries[index];

    //   return country.gold * $scope.gold_value;
    // }

    // $scope.totalPoints = function(index) {
    //   var country = $scope.countries[index];

    //   // return $scope.goldPoints(index)
    //   return 10 * $scope.gold_value;
    // }


    // $scope.$watchGroup(['gold_value', 'silver_value', 'bronze_value'],function(newVal, oldVal){
    //   // $scope.$apply();

    //   angular.forEach($scope.countries, function (country) {
    //     country.gold_points = country.gold * newVal[0];
    //     country.silver_points = country.silver * $scope.silver_value;
    //     country.bronze_points = country.bronze * $scope.bronze_value;
    //     // country.total_points = 10 * newVal[0] + country.silver_points + country.bronze_points;
    //   });
    // });
  }])

  .controller('MyCtrl2', [function() {

  }]);

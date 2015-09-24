'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
  	$scope.rankFilter = function (rank) {
        return rank.rank > 0;
    };

  	// $http.get('http://olympics.clearlytech.com/api/v1/medals', { cache: true})
   //     .then(function(res){
   //        $scope.countries = res.data;
   //  });
   //
   $scope.gold_value = 3;
   $scope.silver_value = 2;
   $scope.bronze_value = 1;

    $http.get('https://www.kimonolabs.com/api/4rgltdoq?apikey=h8I2BEdJd3zQHmVYN8aboiHgoy71W4BX')
      // .success(function(res) {
      //   $scope.countries = res.results.data;
      //   // $scope.name = res.name;
      // })
      // .error(function(error) {
      //   console.log(error);
      // })
      .then(function(res){
        $scope.countries = res.data.results.data;
        $scope.name = res.name;

        angular.forEach($scope.countries, function (country) {
          country.gold = parseFloat(country.gold);
          country.silver = parseFloat(country.silver);
          country.bronze = parseFloat(country.bronze);
          country.gold_points = country.gold * $scope.gold_value;
          country.silver_points = country.silver * $scope.silver_value;
          country.bronze_points = country.bronze * $scope.bronze_value;
          country.total_points = country.gold_points + country.silver_points + country.bronze_points;
        });
      })

 	// $scope.countries = [];

  }])
  .controller('MyCtrl2', [function() {

  }]);
'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
  	$scope.rankFilter = function (rank) {
        return rank.rank > 0;
    };

  	$http.get('http://olympics.clearlytech.com/api/v1/medals', { cache: true})
       .then(function(res){
          $scope.countries = res.data;
    });

 	// $scope.countries = [];

  }])
  .controller('MyCtrl2', [function() {

  }]);
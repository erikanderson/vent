var app = angular.module('vent');

app.controller('mainController', function($scope, dataService) {

  $scope.getVentData = function() {
    dataService.getData().then(function(response){
      $scope.items = response.data.results;
    })
  };

  $scope.postVentData = function() {
    dataService.postData($scope.newItemName).then(function(response){
      console.log(response);
    })
    $scope.newItemName = '';
    $scope.getVentData();
  }

  $scope.getVentData();

})
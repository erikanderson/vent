var app = angular.module('vent');

app.service('dataService', function($http) {

  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://api.parse.com/1/classes/vent"
    })
  }

  this.postData = function(newItemName) {
    return $http({
      method: 'POST', 
      url: "https://api.parse.com/1/classes/vent",
      data: {'itemName': newItemName}
    })
  };
})
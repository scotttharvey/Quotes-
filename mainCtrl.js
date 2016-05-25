angular.module("app").controller("mainCtrl", function($scope, dataService){

  $scope.getQuotes = function(){
    $scope.quotes = dataService.getQuotes();
  }
  $scope.getQuotes();

  $scope.addy = dataService.add;

  $scope.rm = dataService.remove;
})

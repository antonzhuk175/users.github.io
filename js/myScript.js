var usersApp = angular.module('usersApp', []);
usersApp.controller('usersController', function($scope, $http){
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data){
        $scope.users = data;
    })
});
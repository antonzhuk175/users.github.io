var usersApp = angular.module('usersApp', []);
usersApp.controller('usersController', function($scope, $http){
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data){
        $scope.users = data;
        $scope.showModalWin = function(index) {

            var darkLayer = document.createElement('div');
            darkLayer.id = 'shadow';
            document.body.appendChild(darkLayer);

            var modalWin = document.getElementById('mWin');
            modalWin.style.display = 'block';

            darkLayer.onclick = function() {
                darkLayer.parentNode.removeChild(darkLayer);
                modalWin.style.display = 'none';
                return false;
            };

            $scope.user = data[index];
        }
    })
});
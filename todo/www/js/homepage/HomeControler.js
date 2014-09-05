function HomeCtrl($scope, localStorageService) {

    $scope.uno='uno!';

    $scope.init = function(){
        console.log('local:',localStorageService)

    };

}

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

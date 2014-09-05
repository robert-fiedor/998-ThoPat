function HomeCtrl($scope, localStorageService,localStoragePath) {

    $scope.uno='uno!';

    $scope.init = function(){

        localStorageService.set(localStoragePath.PATH,{kl:{kl:2}});
        var value = localStorageService.get(localStoragePath.PATH);
        console.log('<<<',localStoragePath)

    };

    $scope.init();
}

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

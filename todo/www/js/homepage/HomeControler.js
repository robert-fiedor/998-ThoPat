function HomeCtrl($scope, localStorageService, LOCAL_STORAGE, MAIN_STATE) {

    $scope.uno='uno!';

    $scope.init = function(){

        localStorageService.set(LOCAL_STORAGE.PATH,{kl:{kl:2}});
        var value = localStorageService.get(LOCAL_STORAGE.PATH);

        console.log('MAIN_STATE',MAIN_STATE)

    };

    $scope.init();
}

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

'use strict';

angular.module('myApp', ['ionic','LocalStorageModule']);




angular.module('myApp')

    .constant( 'LOCAL_STORAGE', {
    'PATH': 'PATH'})
    .constant( 'MAIN_STATE', {
        'EDIT':'EDIT',
        'RECORD': 'RECORD'})



;
angular.module('myApp').directive('entryFieldDirective', [
     function () {
        return {
            restrict: 'E',
            templateUrl: 'js/entry-field/my-customer.html',
            link: function (scope) {
                console.log(123);
                scope.lala=1;
            }
        };
    }
]);

function HomeCtrl($scope, localStorageService,LOCAL_STORAGE, MAIN_STATE) {

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

angular.module('myApp').directive('smartButton', [
     function () {
        return {
            restrict: 'E',
            templateUrl: 'js/smart-button/smart-button.html',
            link: function (scope) {

                console.log('smartbutton ini');
                scope.lala=1;

            }
        };
    }
]);

'use strict';

angular.module('myApp', ['ionic','LocalStorageModule']);




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

function HomeCtrl($scope, localStorageService) {

    $scope.uno='uno!';

    $scope.init = function(){
        console.log('local:',localStorageService)

    };

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

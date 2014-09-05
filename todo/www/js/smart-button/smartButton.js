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

angular.module('myApp').directive('smartButton', [
     function () {
        return {
            restrict: 'E',
            templateUrl: 'js/smart-button/smart-button.html',
            link: function (scope) {

                console.log('smartbutton ini');
                scope.lala=1;

                scope.onBlur = function() {
                    console.log('on blur');
                }

                scope.buttonInfo = "init val";


            }
        };
    }
]);

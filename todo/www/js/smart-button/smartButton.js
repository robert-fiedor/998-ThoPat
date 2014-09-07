
angular.module('myApp').directive('smartButton', ['uuid2',
   function (uuid2) {
    return {
        restrict: 'E',
        templateUrl: 'js/smart-button/smart-button.html',
        link: function (scope) {

            scope.onBlur = function() {
                console.log('on blur');
            }

            scope.buttonData = {
                textf:'yo',
                color:'pink',
                uid:'xxx'
            };

            scope.buttonData.textf = uuid2.newuuid();

            // console.log('...',uuid2.newuuid(),uuid2.newguid())

            // var guid = require('angular-uid');
            // console.log(guid())


        }
    };
}
]);

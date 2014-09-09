
angular.module('myApp').directive('smartButton', ['uuid2','ThoughtsFactory',
 function (uuid2,ThoughtsFactory) {
    return {
        restrict: 'E',
        templateUrl: 'js/smart-button/smart-button.html',
        scope:{},
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
            
            ThoughtsFactory.addItem(scope.buttonData);

            console.log(1,ThoughtsFactory.size());

        }
    };
}
]);

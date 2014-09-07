'use strict';

angular.module('myApp', ['ionic','LocalStorageModule']);





angular.module('myApp')

.factory('ThoughtsFactory', function() {
    return {

        save: function(projects) {

            // window.localStorage['projects'] = angular.toJson(projects);
            
        }


    }
})





    //     all: function() {
    //         var projectString = window.localStorage['projects'];
    //         if(projectString) {
    //             return angular.fromJson(projectString);
    //         }
    //         return [];
    //     },
    //     save: function(projects) {
    //         window.localStorage['projects'] = angular.toJson(projects);
    //     },
    //     newProject: function(projectTitle) {
    //         // Add a new project
    //         return {
    //             title: projectTitle,
    //             tasks: []
    //         };
    //     },
    //     getLastActiveIndex: function() {
    //         return parseInt(window.localStorage['lastActiveProject']) || 0;
    //     },
    //     setLastActiveIndex: function(index) {
    //         window.localStorage['lastActiveProject'] = index;
    //     }
    // 
angular.module('myApp')

    .constant( 'LOCAL_STORAGE', {
    'PATH': 'PATH'})
    .constant( 'MAIN_STATE', {
        'EDIT':'EDIT',
        'RECORD': 'RECORD'})



;
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

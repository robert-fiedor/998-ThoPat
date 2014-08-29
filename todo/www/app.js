'use strict';

angular.module('myApp', ['ionic']);




// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

function HomeCtrl($scope, $timeout, $ionicModal, $ionicActionSheet) {
    $scope.items = [];

    $ionicModal.fromTemplateUrl('newTask.html', function (modal) {
        $scope.settingsModal = modal;
    });

    var removeItem = function (item, button) {
        $ionicActionSheet.show({
            buttons: [],
            destructiveText: 'Delete Task',
            cancelText: 'Cancel',
            cancel: function () {
                return true;
            },
            destructiveButtonClicked: function () {
                $scope.items.splice($scope.items.indexOf(item), 1);
                return true;
            }
        });
    };

    var completeItem = function (item, button) {
        item.isCompleted = true;
    };

    $scope.onReorder = function (el, start, end) {
        ionic.Utils.arrayMove($scope.items, start, end);
    };

    $scope.onRefresh = function () {
        console.log('ON REFRESH');

        $timeout(function () {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    }


    $scope.removeItem = function (item) {
        removeItem(item);
    };

    $scope.newTask = function () {
        $scope.settingsModal.show();
    };

    // Create the items
    for (var i = 0; i < 25; i++) {
        $scope.items.push({
            title: 'Taskk ' + (i + 1),
            buttons: [
                {
                    text: 'Done',
                    type: 'button-success',
                    onButtonClicked: completeItem
                },
                {
                    text: 'Delete',
                    type: 'button-danger',
                    onButtonClicked: removeItem
                }
            ]
        });
    }

}

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

/**
 * Created by RFiedor on 8/29/2014.
 */

function TaskCtrl($scope) {
    $scope.close = function () {
        $scope.modal.hide();
    }
}

angular
    .module('myApp')
    .controller('TaskCtrl', TaskCtrl);
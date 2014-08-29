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


angular.module('myApp')
.factory('ThoughtsFactory', function() {
  
  var ListService = {};
  var list = [];

  ListService.getItem = function(index) { return list[index]; }
  ListService.addItem = function(item) { list.push(item); }
  ListService.removeItem = function(item) { list.splice(list.indexOf(item), 1) }
  ListService.size = function() { return list.length; }

  return ListService;
});


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
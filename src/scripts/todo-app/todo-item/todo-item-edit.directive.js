(function(w) {
  'use strict';

  angular.module('todoApp')
    .directive('todoItemEdit', todoItemEdit);

  function todoItemEdit() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: '/scripts/todo-app/todo-item/todo-item-edit.template.html'
    }
  }
  
})(window);

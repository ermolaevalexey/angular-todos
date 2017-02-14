(function(w) {
  'use strict';

  angular.module('todoApp')
    .directive('todoItem', TodoItemDirective);

  function TodoItemDirective() {
    return {
      restrict: 'E',
      require: '^todoList',
      transclude: true,
      scope: false,
      templateUrl: '/scripts/todo-app/todo-item/todo-item.template.html',
      link: function(scope, el, attrs, ctrl, transclude) {
        scope.editMode = false;
        scope.toggleEditMode = function() {
          scope.editMode = !scope.editMode;
        }
      }
    }
  }

})(window);

(function(w) {
    'use strict';

    angular.module('todoApp')
        .directive('todoList', TodoListDirective);

    function TodoListDirective() {
        return {
            restrict: 'E',
            controller: 'TodoListController',
            controllerAs: '$ctrl',
            transclude: true,
            templateUrl: '/scripts/todo-app/todo-list/todo-list.template.html',
            link: function(scope, el, attrs, ctrl, transclude) {
                el.find('ul').append(transclude());
            }
        }
    }

})(window);
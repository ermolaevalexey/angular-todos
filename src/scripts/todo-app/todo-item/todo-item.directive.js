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
                console.log(scope);
                /*scope.$onDestroy = function() {
                    console.log(el);
                    el.remove();
                };*/
            }
        }
    }

})(window);

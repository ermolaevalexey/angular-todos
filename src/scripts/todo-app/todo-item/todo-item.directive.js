(function(w) {

    angular.module('todoApp')
        .directive('todoItem', TodoItemDirective);

    function TodoItemDirective() {
        return {
            restrict: 'E',
            require: '^todoList',
            transclude: true,
            templateUrl: '/scripts/todo-app/todo-item/todo-item.template.html',
            link: function(scope, el, attrs, ctrl, transclude) {

            }
        }
    }

})(window);

(function(w) {

    angular.module('todoApp')
        .directive('todoList', TodoListDirective);

    function TodoListDirective() {
        return {
            restrict: 'E',
            templateUrl: '/scripts/todo-app/todo-list/todo-list.template.html'
        }
    }

})(window);
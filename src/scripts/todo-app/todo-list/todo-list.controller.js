(function (w) {
    'use strict';

    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['_', 'TodoListService', '$localStorage'];

    function TodoListController(_, TodoListService, $localStorage) {
        var vm = this;

        vm.todos = [];

        vm.$onInit = onInit;
        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;

        function onInit() {
            TodoListService.get()
            .then(function(data) {
                vm.todos = data;
            }).catch(function(reason) {
                console.log(reason);
            });
        }

        function addTodo(title) {
            TodoListService.add(title)
            .then(function() {
                onInit();
                console.log('added', vm.todos);
            })
            .catch(function(reason) {
                console.log(reason);
            });
        }

        function removeTodo(id) {
           TodoListService.remove(id);
           vm.todos = $localStorage.todos;
           console.log(vm.todos);
        }
    }

})(window);
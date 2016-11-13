(function (w) {
    'use strict';

    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['_', 'TodoListService'];

    function TodoListController(_, TodoListService) {
        var vm = this;

        vm.hello = 'Hello sucker!';

        vm.todos = [];

        vm.$onInit = function() {
            vm.todos = TodoListService.get();
        };

        vm.removeTodo = function (id) {
            console.log(id);
            /*vm.todos = _.reject(vm.todos, function(item) {
                return item.id === id;
            });*/
            vm.todos = vm.todos.filter(function(item) {
                return item.id !== id;
            });
            console.log(vm.todos);
        };
    }

})(window);
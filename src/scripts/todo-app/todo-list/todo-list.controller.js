(function (w) {
    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['_'];

    function TodoListController(_) {
        var vm = this;

        vm.hello = 'Hello sucker!';
        vm.todos = ['go shop', 'check comp', 'foo', 'bar'];

        vm.removeTodo = function (id) {
            console.log(id);
            vm.todos = _.reject(vm.todos, function(item, index) {
                return index === id;
            });
            console.log(vm.todos);
        };
    }

})(window);
(function (w) {
    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['_'];

    function TodoListController(_) {
        var vm = this;

        vm.hello = 'Hello sucker!';
        vm.todos = [
            {
                id: 1,
                title: 'go shop'
            },
            {
                id: 2,
                title: 'check comp'
            },
            {
                id: 3,
                title: 'foo'
            },
            {
                id: 4,
                title: 'bar'
            }
        ];

        vm.removeTodo = function (id) {
            console.log(id);
            vm.todos = _.reject(vm.todos, function(item) {
                return item.id === id;
            });
            console.log(vm.todos);
        };
    }

})(window);
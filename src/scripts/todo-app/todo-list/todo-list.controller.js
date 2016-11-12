(function (w) {
    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = [];

    function TodoListController() {
        var vm = this;

        vm.hello = 'Hello sucker!';
    }

})(window);
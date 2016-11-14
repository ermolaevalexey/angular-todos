(function (w) {
    'use strict';

    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['$scope', '_', 'TodoListService', '$localStorage'];

    function TodoListController($scope, _, TodoListService, $localStorage) {
        var vm = this;

        vm.todos = [];

        vm.$onInit = onInit;
        vm.addTodo = addTodo;
        vm.editTodo = editTodo;
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
	            $scope.TodoAddForm.$setPristine();
	            $scope.todo.title = '';
            })
            .catch(function(reason) {
                console.log(reason);
            });
        }
        
        function editTodo(id, title) {
        	TodoListService.edit(id, title)
		    .then(function() {
		    	onInit();
		    })
		    .catch(function(reason) {
			    console.log(reason)
		    });
        }

        function removeTodo(id) {
           TodoListService.remove(id)
	       .then(function(){
		       onInit();
	       })
	       .catch(function(reason) {
	       	    console.log(reason);
	       });
           console.log(vm.todos);
        }
    }

})(window);
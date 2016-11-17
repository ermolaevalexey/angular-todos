(function (w) {
    'use strict';

    angular.module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['$scope', '_', 'TodoListService', '$localStorage', '$filter'];

    function TodoListController($scope, _, TodoListService, $localStorage, $filter) {
        var vm = this;

        vm.todos = [];

        vm.$onInit = onInit;
        vm.addTodo = addTodo;
        vm.editTodo = editTodo;
        vm.removeTodo = removeTodo;
        
        vm.sortTodosByDone = sortTodosByDone;
        vm.removeCompleted = removeCompleted;
        vm.toggleFilter = toggleFilter;
        
        vm.activeFilter = {
        	completed: false
        };

        function onInit() {
        	console.log($scope);
            TodoListService.get()
            .then(function(data) {
                vm.todos = data;
	            sortTodosByDone();
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
	
	    function sortTodosByDone() {
		    vm.todos = _.sortBy(vm.todos, function (item) {
			    return item.completed;
		    });
		    console.log(vm.todos);
	    }
	    
	    function removeCompleted() {
	    	vm.todos
			.filter(function(item) {
			    return item.completed;
		    })
			.map(function(item) {
			    TodoListService.remove(item.id)
				.then(function(){
					onInit();
				})
				.catch(function(reason) {
				    console.log(reason);
				});
		    });
	    }
	    
	    function toggleFilter() {
	    	if (vm.activeFilter.completed) {
			    vm.todos = vm.todos
				    .filter(function(item) {
					    if (item.completed === vm.activeFilter.completed) {
						    return item;
					    }
				    });
		    } else {
		    	onInit();
		    }
	    }
    }

})(window);
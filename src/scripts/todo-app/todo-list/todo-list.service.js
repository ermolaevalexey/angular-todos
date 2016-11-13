(function(w) {
    'use strict';

    angular.module('todoApp')
        .service('TodoListService', TodoListService);

    TodoListService.$inject = ['$localStorage', '_', '$q', '$timeout'];

    function TodoListService($localStorage, _, $q, $timeout) {
        var service = {
            get: get,
            add: add,
            remove: remove
        };

        $localStorage.todos = $localStorage.todos || [];

        function Todo(title) {
            this.id = (new Date()).getTime();
            this.title = title;
            this.completed = false;
        }

        function add(title) {
            var deferred = $q.defer();
            deferred.resolve(
                $localStorage.todos.push(
                    JSON.parse(JSON.stringify(new Todo(title)))
                )
            );
            console.log(deferred);
            return deferred.promise;
        }

        function get() {
            var deferred = $q.defer();
            deferred.resolve($localStorage.todos);
            return deferred.promise;
        }

        function remove(id) {
            console.log(id);
            $localStorage.todos = _.reject($localStorage.todos, function(item) {
                return item.id === id;
            });
        }

        return service;

    }

})(window);

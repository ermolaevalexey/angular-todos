(function(w) {
    'use strict';

    angular.module('todoApp')
        .service('TodoListService', TodoListService);

    function TodoListService() {
        var service = {
            get: get
        };

        var todos =  [
            {
                id: 1,
                title: 'go shop',
                completed: false
            },
            {
                id: 2,
                title: 'check comp',
                completed: false
            },
            {
                id: 3,
                title: 'foo',
                completed: false
            },
            {
                id: 4,
                title: 'bar',
                completed: false
            },
            {
                id: 5,
                title: 'learn jedi mastership',
                completed: false
            }
        ];

        function get() {
            return todos;
        }

        return service;

    }

})(window);

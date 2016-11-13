(function(w) {
    'use strict';

    angular.module('todoApp')
        .directive('todoAddForm', todoAddFormDirective);

    function todoAddFormDirective() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/scripts/todo-app/todo-add-form/todo-add-form.template.html'
        }
    }

})(window);
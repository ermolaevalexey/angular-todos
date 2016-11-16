(function(w) {
	'use strict';
	
	angular.module('todoApp')
		.directive('todoFilters', todoFilters);
	
	function todoFilters() {
		return {
			controller: 'TodoFiltersController',
			controllerAs: '$tdfCtrl',
			templateUrl: '/scripts/todo-app/todo-filters/todo-filters.template.html'
		}
	}
	
})(window);
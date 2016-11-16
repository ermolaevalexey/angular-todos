(function(w) {
	'use strict';
	
	angular.module('todoApp')
		.service('TodoFiltersService', TodoFiltersService);
	
	TodoFiltersService.$inject = ['$localStorage', '_', '$q', '$timeout'];
	
	function TodoFiltersService($localStorage, _, $q, $timeout) {
		var service = {
			todos: $localStorage.todos,
			filtersCollection: [
				{name: 'Завершенные', alias: 'completed', active: false},
				{name: 'Незавершенные', alias: 'not_completed', active: false}
			],
			getFilters: getFilters,
			toggleFilter: toggleFilter,
			clearFilters: clearFilters
		};
		
		function getFilters() {
			return this.filtersCollection;
		}
		
		function toggleFilter(alias) {
			this.filtersCollection.map(function(item) {
				if(item.alias === alias) {
					item.active = !item.active;
				}
			});
		}
		
		function clearFilters() {
			this.filtersCollection.map(function(item) {
				item.active = false;
			});
		}
		
		return service;
		
	}
	
})(window);


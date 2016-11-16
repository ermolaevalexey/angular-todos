(function(w) {
	'use strict';
	
	angular.module('todoApp')
		.controller('TodoFiltersController', TodoFiltersController);
	
	function TodoFiltersController() {
		var vm = this;
		
		vm.hello = 'HRU HRU';
		
		vm.$onInit = function() {
			console.log(vm.hello);
		}
	}
	
})(window);
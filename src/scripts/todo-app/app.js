(function (w) {
    'use strict';
    var body = w.document.body;
    angular.module('todoApp', []).constant('_', window._);
    angular.element(body).ready(function() {
        angular.bootstrap(body, ['todoApp']);
    });
})(window);

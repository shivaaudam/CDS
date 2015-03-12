/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	app.register.controller('contactController', ['$scope', function($scope){

		$scope.message1 = 'Contact us! JK. This is just a demo qwqwqw.';

	}]);

});


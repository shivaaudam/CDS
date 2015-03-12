
/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	app.register.controller('aboutController', ['$scope', function($scope){

		$scope.message = 'Look! I am an about page.';

	}]);

});


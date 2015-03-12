
/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('aboutController', ['$scope', function($scope){

		$scope.message = 'Look! I am an about page.';

	}]);

});


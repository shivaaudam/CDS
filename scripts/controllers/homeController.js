/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('mainController', ['$scope', function($scope){

		$scope.message = 'Everyone come and see how good I look!';


	}]);

});


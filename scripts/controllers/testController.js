/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('testController', ['$scope', function($scope){

		$scope.testData = "hellow world";


	}]);

});
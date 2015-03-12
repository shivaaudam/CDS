/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	 app.register.controller('homeController', ['$scope', function($scope){

		$scope.message = 'Everyone come and see how good I look!';


	}]);

});


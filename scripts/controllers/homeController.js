/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	 app.register.controller('homeController', ['$scope', function($scope){

		$scope.message = 'Constituency Development System';

		$scope.login = function(data){
			console.log(data);

		}

	}]);

});


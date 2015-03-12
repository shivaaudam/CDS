/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('crudController', ['$scope', function($scope){		
		$scope.add = function(){
			console.log("here");
		}  

	}]);

});
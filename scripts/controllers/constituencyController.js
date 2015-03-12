/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('constituencyController', ['$scope','$http', function($scope, $http){

		var url = "constituencyData.json";	
		$http.get(url).success(function(resp){
			console.log("success");
			$scope.constituencyData = resp;
		});

	}]);

});
/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

	return app.controller('constituencyController', ['$scope','$http', function($scope, $http){		

	   $http.get('constituencyData.json').success(function(resp){
	   		console.log(resp);
            $scope.constituencyData = resp;
	   });        

	}]);

});
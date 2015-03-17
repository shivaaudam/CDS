
'use strict';

define(['app'], function (app) {

	 app.register.controller('listController', ['$scope','$http', function($scope,$http){

	 	$scope.filter = false;

		$http.get('constituencyData.json').success(function(resp){
	   	
            $scope.constituencyData = resp;
	   	}); 

	   	$scope.add = function(){
			console.log("here");
		} 

		$scope.showFilter = function(){
			$scope.filter = !$scope.filter;
		}

	}]);

});


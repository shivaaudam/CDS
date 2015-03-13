
'use strict';

define(['app'], function (app) {

	 app.register.controller('listController', ['$scope','$http', function($scope,$http){

		$http.get('constituencyData.json').success(function(resp){
	   		console.log(resp);
            $scope.constituencyData = resp;
	   	}); 
	   	$scope.add = function(){
			console.log("here");
		} 

	}]);

});


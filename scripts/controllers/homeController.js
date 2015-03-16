/*global define*/
'use strict';

/* test module */

define(['app'], function (app) {

    app.register.controller('homeController', ['$scope', function($scope){

        $scope.message = 'Constituency Development System';

        $scope.list = [];

        $scope.submitForm = function(){
            console.log("here");
            console.log("posting data....");
            $http.post('http://posttestserver.com/post.php?dir=jsfiddle', JSON.stringify(data)).success(function(){
                console.log("success");
            });
        }
    }]);

});


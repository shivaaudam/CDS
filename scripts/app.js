/*global define*/
'use strict';

define(['angular','angularRoute','vendor/routeResolver'], function (angular) {

	console.log("app 1");
	var app = angular.module('CDS', ['ngRoute','routeResolverServices']);
console.log("app 2");
	app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {


        	//routeResolverProvider.routeConfig.setBaseDirectories('scripts/views', 'scripts/controllers');
console.log("app 3");
        	app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
             //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;
console.log("app 4");
            $routeProvider.when('/', route.resolve('home'))
            	.when('/contact', route.resolve('contact'))
                .otherwise({ redirectTo: '/' });


                }]);

      /* app.run(['$rootScope', '$location', 'authService',
        function ($rootScope, $location, authService) {
            
            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if (next && next.$$route && next.$$route.secure) {
                    if (!authService.user.isAuthenticated) {
                        $rootScope.$evalAsync(function () {
                            authService.redirectToLogin();
                        });
                    }
                }
            });

    }]); */



	//app.provider('routeResolver', routeResolver);

	return app;
});

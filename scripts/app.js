/*global define*/
'use strict';

define(['angular','angularRoute','vendor/routeResolver'], function (angular) {

	
	var app = angular.module('CDS', ['ngRoute','routeResolverServices']);

	app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {


        	routeResolverProvider.routeConfig.setBaseDirectories('scripts/views', 'scripts/controllers');

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

            $routeProvider.when('/customers', route.resolve('Customers'))
            	.when('/customerorders/:customerID', route.resolve('CustomerOrders'))
                .otherwise({ redirectTo: '/customers' });


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

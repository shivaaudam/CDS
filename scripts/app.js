/*global define*/
'use strict';

define(['angular','angularRoute','vendor/routeResolver','angular-animate','resource'], function (angular) {

    var app = angular.module('CDS', ['ngRoute','routeResolverServices','ngAnimate','ngResource']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {


            //routeResolverProvider.routeConfig.setBaseDirectories('scripts/views', 'scripts/controllers');

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

            $routeProvider.when('/', route.resolve('home'))
                .when('/contact', route.resolve('contact'))
                .when('/list',route.resolve('list'))
                .when('/add',route.resolve('add'))
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

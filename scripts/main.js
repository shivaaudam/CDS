/*global require*/
'use strict';

require.config({
	paths: {
		angular: 'vendor/angular',
		'angularRoute' : 'vendor/angular-route',
		'angular-animate' : 'vendor/angular-animate',
		'resource' : 'vendor/resource'

	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-animate' : {
			exports : 'angular-animate'
		},
		'resource' : {
			exports : 'resource'
		},
		'angularRoute': {
			deps: ['angular']
		}
	}
});
require(['angular','app'], function (angular) {
	console.log("mainjs");
//require(['angular', 'app', 'controllers/testController','controllers/constituencyController','controllers/crudController'], function (angular) {
	angular.bootstrap(document, ['CDS']);
});

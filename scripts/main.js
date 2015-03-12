/*global require*/
'use strict';

require.config({
	paths: {
		angular: 'vendor/angular',
		'angularRoute' : 'vendor/angular-route'
	},
	shim: {
		angular: {
			exports: 'angular'
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

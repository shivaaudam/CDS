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

require(['angular', 'app', 'controllers/testController'], function (angular) {
	angular.bootstrap(document, ['CDS']);
});

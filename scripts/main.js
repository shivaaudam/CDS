/*global require*/
'use strict';

require.config({
	paths: {
		angular: 'vendor/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	}
});

require(['angular', 'app', 'controllers/testController','controllers/constituencyController','controllers/crudController'], function (angular) {
	angular.bootstrap(document, ['CDS']);
});

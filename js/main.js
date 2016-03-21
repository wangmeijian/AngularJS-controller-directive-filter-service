require.config({
	baseUrl: 'js',
	paths: {
		'app': 'app',
		'angular': 'angular.min',
		'router': 'angular-ui-router'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'router': {
			deps: ['angular']
		},
		'app': {
			deps: ['router']
		}
	}
})
// 初始化myModule模块
require(['app'],function(){
	angular.bootstrap(document, ['myModule'])		
})
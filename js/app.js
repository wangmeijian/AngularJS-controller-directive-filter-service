define(['angular','router'],function(){
	var app = angular.module("myModule", ['ui.router'])
	app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){		
		app.register = {
			//得到$controllerProvider的引用
			controller : $controllerProvider.register,
			//同样的，这里也可以保存directive／filter／service的引用
			directive: $compileProvider.directive,
			filter: $filterProvider.register,
			service: $provide.service
		};
	})
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('home');
	$stateProvider
	.state("home",{
		url:"/home",
		controller: 'homeCtrl',
		template: '<p>{{str}}</p><br/>'+
                    '过滤器应用：<span>{{sex | sexFilter}}</span><br/><br/>'+
                    'Service应用：<span ng-repeat="book in books">{{book.id + 1}}：《{{book.name}}》</span><br/><br/>'+
                    '指令应用：<my-directive></my-directive>',
        resolve: {
            loadCtrl: ["$q", function($q) { 
            	var deferred = $q.defer();
            	//异步加载controller／directive/filter/service
            	require([
            		'controller/homeCtrl' 
            	], function() { deferred.resolve(); });
            	return deferred.promise;
            }]
        }
	})
	.state("local",{
		url:"/local",
		controller: 'localCtrl',
		template: '<p>{{str}}</p><br/>',
        resolve: {
            loadCtrl: ["$q", function($q) { 
            	var deferred = $q.defer();
            	//异步加载controller／directive/filter/service
            	require([
            		'controller/localCtrl'
            	], function() { deferred.resolve(); });
            	return deferred.promise;
            }]
        }
	})
}])
	return app;
})
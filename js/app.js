var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
		.when('/view1',
		{
			controller: 'SimpleController',
			templateUrl: 'view1.html'
		})
		.when('/view2',
		{
			controller: 'SimpleController',
			templateUrl: 'view2.html'
		})
		.otherwise({ redirectTo : '/view1'});
}]);
	demoApp.controller('SimpleController',['$scope','$http',function ($scope,$http){
		$http.get('js/dataRecords.json').success(function(data){
			$scope.customers = data;
	});

	$scope.addCustomer = function(){
		$scope.customers.push({
			name:$scope.newCustomer.name, 
			city: $scope.newCustomer.city 
		});
	};
}]);

<script>
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
	demoApp.controller('SimpleController',function ($scope){
		$scope.customers = [

			{name:'Jon',city:'Makati City'},
			{name:'Jeszza',city:'Makati City'},
			{name:'Gelo',city:'Caloocan City'},
			{name:'Shaw',city:'Pasig City'}

		];

		$scope.addCustomer = function(){
			$scope.customers.push({
				name:$scope.newCustomer.name, 
				city: $scope.newCustomer.city 
			});
		};
	});
</script>
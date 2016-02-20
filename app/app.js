var app = angular.module('infiniteScroll', ['infinite-scroll']);

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

app.controller('scrolling',function($scope, $http){
	
	$scope.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 12; i++) {
			$scope.images.push(last + i);
		}
	};
});
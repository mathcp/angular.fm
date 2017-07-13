var artistListApp = angular.module('artistList', ["ngRoute"]);

artistListApp.controller('artistDetailController', function($scope, $routeParams, artistListAPI) {
    
    artistListAPI.getArtistInfo($routeParams.id).then(function(artist){
        $scope.artist = artist.data;
    });
}); 
artistListApp.controller('artistListController', function($scope, artistListAPI) {
    
    //Get artist json from API
    artistListAPI.getArtistList().then(function(src){
        $scope.artists = src.data;
    });
 
    //Filter artists by name or number of plays
    $scope.filterName = 'name';
    $scope.filterReverse = true;

    $scope.sortBy = function(filterName) {
        $scope.reverse = ($scope.filterName === filterName) ? !$scope.reverse : false;
        $scope.filterName = filterName;
    };
});
artistListApp.factory('artistListAPI', function($http){
	var _getArtistList = function() {
		return $http.get('https://iws-recruiting-bands.herokuapp.com/api/bands')
	};

	var _getArtistInfo = function(id) {
		return $http.get('https://iws-recruiting-bands.herokuapp.com/api/bands/' + id)
	};

	return {
		getArtistList: _getArtistList,
		getArtistInfo: _getArtistInfo
	}
});
artistListApp.config(function($routeProvider) {
	$routeProvider.when("/artists", {
		templateUrl: "view/artistList.html",
		controller: "artistListController"
	});
	$routeProvider.when("/artist-detail/:id", {
		templateUrl: "view/artistDetail.html",
		controller: "artistDetailController"
	});
}); 	
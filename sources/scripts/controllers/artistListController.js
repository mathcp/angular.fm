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
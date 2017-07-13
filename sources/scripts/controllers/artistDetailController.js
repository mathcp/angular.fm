artistListApp.controller('artistDetailController', function($scope, $routeParams, artistListAPI) {
    
    artistListAPI.getArtistInfo($routeParams.id).then(function(artist){
        $scope.artist = artist.data;
    });
}); 
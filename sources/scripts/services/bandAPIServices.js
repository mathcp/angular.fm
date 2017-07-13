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
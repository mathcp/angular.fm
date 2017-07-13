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
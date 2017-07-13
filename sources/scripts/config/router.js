artistListApp.config(function($routeProvider) {
	$routeProvider.when("/artists", {
		templateUrl: "view/artistList.html",
		controller: "artistListController"
	});
	$routeProvider.when("/artist/:id", {
		templateUrl: "view/artistDetail.html",
		controller: "artistDetailController"
	});
}); 	
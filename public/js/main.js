var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $location) {
	// Move to service or factory
	$scope.about = [
		"Hi. I'm Babak, a junior at UVA who enjoys working on side projects. Check out my Github or Tumblr!"
	];

		// {
		// 	name: 'Search Command Line',
		// 	link: 'https://github.com/BPkazemi/search-command-line-app'
		// },
	$scope.projects = [
		{
			name: 'Nassim Taleb Visualization',
			link: 'http://blackswan.bpourkazemi.com'
		},
		{
			name: 'Stritter',
			link: 'http://stritter.bpourkazemi.com'
		}
	];

	$scope.bucketList = [
		"Skydive (DONE)",
		"Get a dog.",
		"Go to space.",
		"Camp for a week.",
		"Live abroad for an extended period.",
		"Live in a city.",
		"Start a company."
	];

	// ------- UI changes -------
	// On mouseover, expand the menu bar
	$('.first').on('mouseover', function() {
		$(this).removeClass('col-md-3').addClass('col-md-4');
		$('.second').removeClass('col-md-8').addClass('col-md-7');

		$(this).css({
			opacity: 1
		});
	});

	// On mouseout, contract the menu bar
	$('.first').on('mouseout', function() {
		$(this).removeClass('col-md-4').addClass('col-md-3');
		$('.second').removeClass('col-md-7').addClass('col-md-8');

		$(this).css({
			opacity: 0.90
		});
	});

	// On nav item clicks, update the 'active' state
	$('.pill').on('click', function() {
		$('.pill').each(function() {
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});
});

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: '../partials/about_me.html'
	})
	.when('/about_me', {
		controller: 'MainCtrl',
		templateUrl: '../partials/about_me.html'
	})
	.when('/projects', {
		controller: 'MainCtrl',
		templateUrl: '../partials/projects.html'
	})
	.when('/bucket_list', {
		controller: 'MainCtrl',
		templateUrl: '../partials/bucket_list.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
})
var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $location) {
	// Move to service or factory
		// "Live, laugh, eat, hike, think, code, and create."
		// My story is a long one, but here's a shorter version: \nI came into UVA set to be a systems and economics double, and forge a path in finance. The alure of that life quickly faded as I spent the summer of my first year at a local incubator (hackcville) building my first app. The notion that only a few people can leverage software to impact many more people was the main reason I switched to CS, and it's been a great ride since.
	$scope.about = [
		"Hi there! I'm Babak, a junior at UVA who enjoys working on side projects. Check out my Github, Tumblr, or LinkedIn."
	];

	$scope.projects = [
		{
			name: 'Nassim Taleb Visualization',
			link: 'http://bpkazemi.github.io/NTVisual'
		},
		{
			name: 'Search Command Line',
			link: 'https://github.com/BPkazemi/search-command-line-app'
		},
		{
			name: 'Stritter',
			link: 'stritter.bpourkazemi.com'
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
	$('.first').on('mouseover', function() {
		$(this).removeClass('col-md-3').addClass('col-md-4');
		$('.second').removeClass('col-md-8').addClass('col-md-7');

		$(this).css({
			opacity: 1
		});
	});

	$('.first').on('mouseout', function() {
		$(this).removeClass('col-md-4').addClass('col-md-3');
		$('.second').removeClass('col-md-7').addClass('col-md-8');

		$(this).css({
			opacity: 0.90
		});
	});

	$('.tab').on('click', function() {
		// On tab click...
		// Add custom styling to selected tab
		$('.tab').each(function() {
			$(this).removeClass('selected');
		});
		$(this).addClass('selected');

		// Hide all content
		$('.tab-content').css('display', 'none');

		// Show appropriate content
		var tabName = $(this).get(0).id;
		$('.' + tabName + '-wrapper').css('display', 'block')
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
var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $location) {

	// Move to service or factory
		// "Hey there! I'm a junior at UVA who enjoys working on side projects, watching a good movie, and staying active. My story is a long one, but here's a shorter version: \nI came into UVA set to be a systems and economics double, and forge a path in finance. The alure of that life quickly faded as I spent the summer of my first year at hackcville. The notion that just a couple people can build something to impact thousands, millions, billions - incredible. I switched to CS, and haven't looked back since."
	$scope.about = [
		"Live, laugh, eat, hike, think, code, and create."
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
	$('.first').on('mouseover', function() {
		$(this).css({
			width: '32%',
			opacity: 1
		});
		$('.second').css({
			width: '50%'
		});
	}).on('mouseout', function() {
		$(this).css({
			width: '27%',
			opacity: 0.92
		});
		$('.second').css({
			width: '55%'
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

	$locationProvider.html5Mode(true);
})
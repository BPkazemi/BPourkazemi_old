var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $location) {

	// Move to service or factory
	$scope.about = [
		"Live, laugh, eat, hike, think, code, and create."
	];

	$scope.projects = [
		{
			name: 'Nassim Taleb Visualization',
			link: 'http://bpkazemi.github.io/NTVisual'
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
	$('.left').on('mouseover', function() {
		$(this).css({
			width: '32%',
			opacity: 1
		});
		$('.right').css({
			width: '50%'
		});
	}).on('mouseout', function() {
		$(this).css({
			width: '27%',
			opacity: 0.92
		});
		$('.right').css({
			width: '55%'
		});
	});

	$('.tab').on('click', function() {
			// Add custom styling to selected tab
			$('.tab').each(function() {
				$(this).removeClass('selected');
			});
			$(this).addClass('selected');

			// Hide all right side content
			$('.tab-content').css('display', 'none');

			// Show appropriate right side content
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
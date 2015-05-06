angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [

		{name: 'C# for Crazy People', featured: false, published: '2014-01-02 12:24:00'},
		{name: 'C# for Normal People', featured: true, published: '2013-01-02 12:24:00'},
		{name: 'PHP the Basics', featured: true, published: '2015-01-01 12:24:00'},
		{name: 'D, what is it', featured: false, published: '2014-03-02 12:24:00'},
		{name: 'Python Fundamentals', featured: true, published: '2012-07-09 12:24:00'},
		{name: 'Javascript, this is it', featured: false, published: '2012-12-02 12:24:00'},
		{name: 'Node.js, the new java', featured: true, published: '2011-01-12 12:24:00'},
		{name: 'Java - its back', featured: true, published: '2014-10-12 12:24:00'},
		{name: 'Why Perl is for old people', featured: true, published: '2012-11-08 12:24:00'},
		{name: 'Reasons to NOT learn RUBY', featured: false, published: '2015-09-07 12:24:00'},
		{name: '.NET no one even cares', featured: true, published: '2010-12-05 12:24:00'},
		{name: 'RUBY on RAILS - Awesome!', featured: true, published: '1988-04-24 12:24:00'},
		{name: 'PHP dead but still kicking', featured: false, published: '2013-01-29 12:24:00'}

	]
});

